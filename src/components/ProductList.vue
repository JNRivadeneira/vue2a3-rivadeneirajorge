<script setup>
import { useProductStore } from '../stores/ProductStore'
import ProductCard from './ProductCard.vue'

const productStore = useProductStore()
productStore.fill()
</script>

<template>
  <h1 class="text-5xl text-emerald-500">Lista de Productos</h1>
  <div v-if="productStore.products[0]" class="grid grid-cols-3 gap-4">
    <div v-for="(plato, index) of productStore.products[0].entradas" :key="index">
      <ProductCard :product="plato" @add-to-cart="cartStore.addItems($event, plato)" />
    </div>

    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 fill-indigo-600 hover:fill-cyan-700">
      <path fill-rule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
        clip-rule="evenodd" />
    </svg></a>
  </div>
</template>

<style>

</style>
