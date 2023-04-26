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
        <v-img :src="planet.image" :alt="planet.name" width="100%"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            <h2>{{ planet.name }}</h2>
          </v-card-title>
          <v-card-text>
            <p>{{ planet.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
