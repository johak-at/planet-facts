<template>
  <v-container fluid class="planet-detail">
    <h1>{{ planet.name }}</h1>
    <v-row class="align-center justify-space-around">
      <v-col cols="12" md="5">
        <v-img
          v-if="planet !== 'loading'"
          :src="planet.images.planet"
          :alt="planet.name"
          class="planet-image"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="planet-card" v-if="planet.overview">
          <v-card-title>
            <h2>{{ planet.name }}</h2>
          </v-card-title>
          <v-card-text>
            <div v-if="currentCard === 'overview'">
              <h3>Overview</h3>
              <p>{{ planet.overview.content }}</p>
            </div>

            <div v-if="currentCard === 'structure'">
              <h3>Structure</h3>
              <p>{{ planet.structure.content }}</p>
            </div>
            <div v-if="currentCard === 'geology'">
              <h3>Geology</h3>
              <p>{{ planet.geology.content }}</p>
            </div>

            <v-row class="my-4 buttons-row">
              <v-col cols="4">
                <v-btn
                  @click="currentCard = 'overview'"
                  :outlined="currentCard === 'overview'"
                  >Overview</v-btn
                >
              </v-col>
              <v-col cols="4">
                <v-btn
                  @click="currentCard = 'structure'"
                  :outlined="currentCard === 'structure'"
                  >Structure</v-btn
                >
              </v-col>
              <v-col cols="4">
                <v-btn
                  @click="currentCard = 'geology'"
                  :outlined="currentCard === 'geology'"
                  >Geology</v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="overview-row">
      <h3>Overview</h3>
      <p>{{ planet.description }}</p>
      <p><strong>Revolution:</strong> {{ planet.revolution }}</p>
      <p><strong>Rotation:</strong> {{ planet.rotation }}</p>
      <p><strong>Radius:</strong> {{ planet.radius }}</p>
      <p><strong>Temperature:</strong> {{ planet.temperature }}</p>
      <p><a :href="planet.source" target="_blank">Source</a></p>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const currentCard = ref("overview");

const planets = ref(null);
const planet = computed(() => {
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

<style scoped>
.planet-detail {
  padding: 100px;
  color: white;
  background-color: #070724; /* Dunkelblau */
  font-family: "Antonio", sans-serif;
  position: relative;
}

.planet-detail::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://path-to-white-stars-image.com"); /* Ersetzen Sie "https://path-to-white-stars-image.com" durch den Pfad zum Bild mit den weißen Sternen */
  background-repeat: repeat;
  z-index: -1;
}

.planet-image {
  max-width: 90%;
  height: auto;
  border-radius: 50%;
}

.planet-card {
  background-color: #393939;
  border-radius: 10px;
  padding: 20px;
  color: white;
}

.planet-card h2,
.planet-card h3 {
  color: #c0c0c0;
}

.buttons-row {
  justify-content: center;
}

.buttons-row > .v-col {
  padding: 0;
}

.v-btn {
  color: white;
  border: 1px solid white;
  margin: 5px;
  width: 100%;
}

.v-btn:active {
  background-color: #f7b733;
}

.overview-row {
  margin-top: 20px;
}
</style>
