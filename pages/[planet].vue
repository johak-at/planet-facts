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
              <p><strong>Revolution:</strong> {{ planet.revolution }}</p>
              <p><strong>Rotation:</strong> {{ planet.rotation }}</p>
              <p><strong>Radius:</strong> {{ planet.radius }}</p>
              <p><strong>Temperature:</strong> {{ planet.temperature }}</p>
            </div>
            <div v-if="currentCard === 'structure'">
              <h3>Structure</h3>
              <p>{{ planet.structure }}</p>
            </div>
            <div v-if="currentCard === 'geology'">
              <h3>Geology</h3>
              <p>{{ planet.geology }}</p>
            </div>
            <v-row class="my-4">
              <v-col cols="4">
                <v-btn @click="currentCard = 'overview'" :outlined="currentCard === 'overview'">Overview</v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn @click="currentCard = 'structure'" :outlined="currentCard === 'structure'">Structure</v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn @click="currentCard = 'geology'" :outlined="currentCard === 'geology'">Geology</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-btn class="mr-2" type="submit">Submit</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn type="submit">
                  <router-link :to="{ name: 'index' }">Back</router-link>
                </v-btn>
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

<style scoped>
  h1 {
    font-size: 24px;
    margin-bottom: 16px}
    </style>