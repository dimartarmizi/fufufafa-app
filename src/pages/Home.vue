<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-4">Fufufafa Gallery</h1>
    <div class="flex items-center gap-4 mb-6">
      <input v-model="searchQuery" type="text" placeholder="Search comments..." class="p-2 border border-gray-600 rounded bg-gray-800 text-white" />
      <button @click="search" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Search</button>
    </div>
    <div v-if="loading" class="text-gray-400">Loading...</div>
    <div v-else>
      <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="item in data" :key="item.id" class="bg-gray-800 rounded overflow-hidden shadow-lg hover:shadow-purple-500/50 transition">
          <img :src="item.image_url" alt="Screenshot" class="w-full h-48 object-cover object-left" />
          <div class="p-4">
            <p class="text-sm text-gray-300 line-clamp-3">{{ item.content }}</p>
            <div class="flex justify-between mt-4">
              <button @click="goToDetail(item.id)" class="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 flex items-center gap-2">
                Detail <i class="fas fa-info-circle"></i>
              </button>
              <a :href="item.image_url" download class="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 flex items-center gap-2">
                Download <i class="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const data = ref([])
const loading = ref(true)
const searchQuery = ref('')
const errorMessage = ref("")
const router = useRouter()

const goToDetail = (id) => {
  router.push({ name: 'Detail', params: { id } })
}

const search = async () => {
  loading.value = true
  errorMessage.value = ""
  try {
    const res = await axios.get(`https://fufufafapi.vanirvan.my.id/api`, {
      params: { content: searchQuery.value }
    })
    const result = res.data
    if (result.error === "Quote not found") {
      data.value = []
      errorMessage.value = "No images found for the given search query."
    } else {
      data.value = result
    }
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  try {
    const res = await axios.get('https://fufufafapi.vanirvan.my.id/api')
    data.value = res.data
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>
