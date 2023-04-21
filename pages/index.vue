<script setup>
import { Icon } from "@iconify/vue";

const planets = ref([]);

onMounted(async () => {
  const res = await fetch("/data.json");
  planets.value = await res.json();
});
</script>

<template>
  <v-container flex flex-col items-center gap-4 prose>
    <NavBar :planets="planets"></NavBar>
    <MainContent></MainContent>
  </v-container>
</template>

<style>
/* * {
  border: 1px solid red;
} */
</style>
