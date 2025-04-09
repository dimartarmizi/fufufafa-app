<template>
  <div class="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen text-white">
    <Navbar />
    <div class="max-w-7xl mx-auto px-4">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background: #000;
  overflow-x: hidden;
}
</style>
