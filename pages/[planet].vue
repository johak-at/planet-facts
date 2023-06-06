<template>
  <v-container fluid class="planet-detail">
    <v-card-title>
      <h2 class="planet-name">{{ planet.name }}</h2>
    </v-card-title>
    <v-row class="align-center justify-space-around">
      <v-col cols="12" md="5">
        <v-img
          v-if="planet !== 'loading'"
          :src="currentImage"
          :alt="planet.name"
          class="planet-image"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="planet-card" v-if="planet.overview">
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
      <v-col class="detail-container" cols="12" md="2">
        <h3>Revolution</h3>
        <p>{{ planet.revolution }}</p>
      </v-col>
      <v-col class="detail-container" cols="12" md="2">
        <h3>Rotation</h3>
        <p>{{ planet.rotation }}</p>
      </v-col>
      <v-col class="detail-container" cols="12" md="2">
        <h3>Radius</h3>
        <p>{{ planet.radius }}</p>
      </v-col>
      <v-col class="detail-container" cols="12" md="2">
        <h3>Temperature</h3>
        <p>{{ planet.temperature }}</p>
      </v-col>
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

const currentImage = computed(() => {
  if (!planet.value || planet.value === "loading") {
    return "";
  }

  switch (currentCard.value) {
    case "overview":
      return planet.value.images.planet;
    case "structure":
      return planet.value.images.internal;

    case "geology":
      return planet.value.images.geology;
  }
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
  overflow: hidden;
}

.planet-image {
  max-width: 90%;
  height: auto;
  border-radius: 50%;
  transition: transform 0.3s;
}

.planet-image:hover {
  transform: scale(1.1);
}

.planet-card {
  background-color: #393939;
  border-radius: 10px;
  padding: 20px;
  color: white;
  transition: box-shadow 0.3s;
}

.planet-card:hover {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
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
  transition: background-color 0.3s;
}

.v-btn:active {
  background-color: #f7b733;
}

.overview-row {
  margin-top: 20px;
}
.planet-name {
  font-size: 3em; /* Erhöht die Schriftgröße noch mehr */
  font-family: "Antonio", sans-serif; /* Ändert die Schriftfamilie */
  text-align: center; /* Zentriert den Text */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Fügt einen Textschatten hinzu */
  color: #c0c0c0; /* Ändert die Textfarbe */
  text-transform: uppercase; /* Wandelt alle Buchstaben in Großbuchstaben um */
  letter-spacing: 2px; /* Erhöht den Abstand zwischen den Buchstaben */
  background: -webkit-linear-gradient(
    #eee,
    #333
  ); /* Fügt einen Gradienteneffekt hinzu */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 20px; /* Verkleinert den oberen Rand, um die Überschrift näher an der Navigationsleiste zu positionieren */
}
.detail-container {
  border: 2px solid #808080; /* Set the border color to gray */
  border-radius: 10px; /* Increase the curve of the border corners */
  padding: 20px; /* Increase the space between the border and the content inside */
  margin: 10px; /* Increase the space between each detail container */
  background-color: #1a1a1a; /* Set the background color to a darker shade of gray */
  color: #ffffff; /* Set the text color to a contrasting color for better readability */
  transition: all 0.3s ease; /* Add a transition effect to the border and background */
}

.detail-container:hover {
  border-color: #f7b733; /* Change the border color to orange on hover */
  background-color: #0d0d0d; /* Change the background color to a even darker shade of gray on hover */
}
@import "./style.css";
</style>
