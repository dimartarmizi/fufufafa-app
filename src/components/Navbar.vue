<template>
  <nav class="bg-black bg-opacity-80 px-8 py-4 flex justify-between items-center text-white">
    <div class="text-2xl font-bold tracking-wide flex items-center">
      <i class="fas fa-dragon mr-2"></i> Fufufafa
    </div>
    <button @click="toggleMenu" class="md:hidden px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
      <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
    </button>
    <div :class="menuOpen ? 'block' : 'hidden'" class="absolute top-16 left-0 w-full bg-black bg-opacity-90 md:static md:flex md:items-center md:justify-center md:space-x-6">
      <router-link to="/" class="block py-2 px-4 hover:text-purple-400 flex items-center">
        <i class="fas fa-home mr-2"></i> Home
      </router-link>
      <router-link to="/about" class="block py-2 px-4 hover:text-purple-400 flex items-center">
        <i class="fas fa-info-circle mr-2"></i> About
      </router-link>
      <router-link to="/disclaimer" class="block py-2 px-4 hover:text-purple-400 flex items-center">
        <i class="fas fa-exclamation-circle mr-2"></i> Disclaimer
      </router-link>
      <router-link to="/credit" class="block py-2 px-4 hover:text-purple-400 flex items-center">
        <i class="fas fa-user mr-2"></i> Credit
      </router-link>
    </div>
    <button @click="$router.push('/random')" class="hidden md:flex px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 items-center gap-2">
      <i class="fas fa-random"></i>
      <span>Random</span>
    </button>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>