<script setup>
const route = useRoute();

const planets = ref(null);
const planet = computed(function () {
  if (!planets.value) {
    return "loading";
  }

  return planets.value.planets.filter(
    (p) => p.name.toLowerCase() === route.params.planet
  )[0];
});

onMounted(async () => {
  const res = await fetch("/data.json");
  planets.value = await res.json();
});
</script>

<template>
  <v-container
    ><h1>{{ route.params.planet }}</h1>

    <p>{{ planet.name }}</p>
  </v-container>
</template>
