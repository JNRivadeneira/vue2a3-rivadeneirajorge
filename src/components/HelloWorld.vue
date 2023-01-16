<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <h1 class="text-3xl font-bold">{{ msg }}</h1>
  <br/>
  <p>Este desafío plantea transformar un proyecto de vue 2 a vue 3.</p>
  <p>En este se han utilizado nuevas librerías, como: </p><br />
  <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li><strong>Vee-Validate</strong> para el formulario</li>
    <li>junto a <strong>yup</strong> para elaborar los esquemas de validación</li>
    <li><strong>Pinia</strong> para el manejo de store</li>
    <li>y <strong>Axios</strong> para recuperar los datos desde MockAPI</li>
  </ul>


</template>

<style scoped>

</style>
