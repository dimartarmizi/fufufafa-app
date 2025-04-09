<template>
  <div class="p-8">
    <div v-if="loading" class="text-gray-400">Loading detail...</div>
    <div v-else-if="item" class="max-w-3xl mx-auto bg-gray-800 p-6 rounded shadow-lg">
      <img :src="item.image_url" alt="Screenshot" class="w-full mb-4 rounded" />
      <p class="whitespace-pre-line mb-4">{{ item.content }}</p>
      <a :href="item.doksli" target="_blank" class="text-blue-400 underline hover:text-blue-300">
        Lihat sumber komentar
      </a>
      <div class="flex justify-between mt-4">
        <button @click="$router.push('/')" class="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 flex items-center gap-2">
          Back <i class="fas fa-arrow-left"></i>
        </button>
        <a :href="item.image_url" download class="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 flex items-center gap-2">
          Download <i class="fas fa-download"></i>
        </a>
      </div>
    </div>
    <div v-else class="text-red-400">Komentar tidak ditemukan.</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const item = ref(null)
const loading = ref(true)
const route = useRoute()

onMounted(async () => {
  const res = await fetch(`https://fufufafapi.vanirvan.my.id/api/${route.params.id}`)
  if (res.ok) {
    item.value = await res.json()
  }
  loading.value = false
})
</script>
