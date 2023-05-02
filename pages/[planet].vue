<script setup>
const route = useRoute();

const currentCard = ref("overview");

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
          </v-card-title>
          <v-card-text>
            <div v-if="currentCard === 'overview'">
              <p>{{ planet.description }}</p>
              <p>{{ planet.revolution }}</p>
              <p>{{ planet.rotation }}</p>
              <p>{{ planet.radius }}</p>
              <p>{{ planet.temperature }}</p>
            </div>
            <div v-if="currentCard === 'structure'">
              <p>{{ planet.structure }}</p>
            </div>
            <div v-if="currentCard === 'geology'">
              <p>{{ planet.geology }}</p>
            </div>
            <v-row>
              <v-card>
                <v-btn @click="currentCard = 'overview'" variant="outlined"> Overview </v-btn>
                <v-btn @click="currentCard = 'structure'" variant="outlined"> Structure </v-btn> 
                <v-btn @click="currentCard = 'geology'" variant="outlined"> Geology</v-btn>
              </v-card>
            </v-row>
            <div>
              <button type="submit">siu</button>
            </div>
            <div>
              <button type="submit">
                <router-link :to="{ name: 'index' }">Back</router-link>
              </button>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
