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
  <v-container>
    <h1>{{ route.params.planet }}</h1>

    <p>{{ planet.name }}</p>

    <v-row>
      <v-col cols="12" md="6">
        <v-img
          v-if="planet !== 'loading'"
          :src="planet.images.planet"
          :alt="planet.name"
          width="100%"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            <h2>{{ planet.name }}</h2>

            <v-chip
              v-for="moon in planet.moons"
              :key="moon"
              class="ma-2"
              color="primary"
              text-color="white"
            >
              {{ moon }}
            </v-chip>
          </v-card-title>
          <v-card-text>
            <p>{{ planet.description }}</p>
            <p>{{ planet.revolution }}</p>
            <p>{{ planet.radius }}</p>
            <p>{{ planet.temperature }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
