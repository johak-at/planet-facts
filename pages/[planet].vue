<template>
  <v-container>
    <h1>{{ planet.name }}</h1>
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
              <h3>Overview</h3>
              <p>{{ planet.description }}</p>
              <p>Revolution: {{ planet.revolution }}</p>
              <p>Rotation: {{ planet.rotation }}</p>
              <p>Radius: {{ planet.radius }}</p>
              <p>Temperature: {{ planet.temperature }}</p>
            </div>
            <div v-if="currentCard === 'structure'">
              <h3>Structure</h3>
              <p>{{ planet.structure }}</p>
            </div>
            <div v-if="currentCard === 'geology'">
              <h3>Geology</h3>
              <p>{{ planet.geology }}</p>
            </div>
            <v-row>
              <v-col cols="12">
                <v-btn @click="currentCard = 'overview'" variant="outlined">Overview</v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn @click="currentCard = 'structure'" variant="outlined">Structure</v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn @click="currentCard = 'geology'" variant="outlined">Geology</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <button type="submit">siu</button>
              </v-col>
              <v-col cols="6">
                <button type="submit">
                  <router-link :to="{ name: 'index' }">Back</router-link>
                </button>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const currentCard = ref('overview');

const planets = ref(null);
const planet = computed(() => {
  if (!planets.value) {
    return 'loading';
  }

  return planets.value.planets.filter(
    (p) => p.name.toLowerCase() === route.params.planet
  )[0];
});

onMounted(async () => {
  const res = await fetch('/data.json');
  planets.value = await res.json();
});
</script>
