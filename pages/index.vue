<script setup>
import { Icon } from "@iconify/vue";

const planets = await useFetch("/data.json");
</script>

<template>
  <v-container flex flex-col items-center gap-4 prose>
    <NavBar></NavBar>
    <MainContent></MainContent>
  </v-container>
</template>

<style>
/* * {
  border: 1px solid red;
} */
</style>
