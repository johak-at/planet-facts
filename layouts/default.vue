<script setup>
import { Icon } from "@iconify/vue";

const planets = ref([]);

onMounted(async () => {
  const res = await fetch("/data.json");
  planets.value = await res.json();
});
</script>

<template>
  <div>
    <NavBar :planets="planets.planets"></NavBar>
    <v-main>
      <!-- <UiBreadcrumbs /> NOT WORKING AS INTENDED - DON'T USE -->
      <slot></slot
    ></v-main>
  </div>
</template>
