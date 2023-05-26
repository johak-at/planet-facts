<script setup>
const props = defineProps(["planets"]);
</script>

<template>
  <v-container>
    <div>The Planets</div>
    <ul>
      <NuxtLink
        v-for="planet in planets"
        :key="planet.name"
        :to="'/' + planet.name.toLowerCase()"
      >
        {{ planet.name }}
      </NuxtLink>
    </ul>
  </v-container>
</template>

<style scoped>
.v-container {
  background-color: #1a1a1a;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.5);
}

.v-container div {
  color: #f7b733;
  font-size: 1.5em;
  font-weight: bold;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

a, a:visited {
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
  transition: color 0.3s ease;
}

a:hover {
  color: #f7b733;
}
</style>
