<script setup>
const route = useRoute();
</script>

<template>
  <v-container
    ><h1>{{ route.params.planet }}</h1></v-container
  >
</template>
