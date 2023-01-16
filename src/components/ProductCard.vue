<script setup>

import { ref } from 'vue'


const props = defineProps({
  product: Object,
})

const count = ref(0)

</script>

<template>
  <!-- <h1>{{ product }}</h1> -->
  <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img class="p-8 rounded-t-lg" :src="product.image" alt="product image" />
    </a>
    <div class="px-5 pb-5">
      <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{product.title}}</h5>
      </a>
      <div class="flex items-center justify-between">
        <span class="text-md font-bold text-indigo-600 dark:text-white">AR$ {{product.price}}</span>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>