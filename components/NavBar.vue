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
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-left {
  margin-left: 10px;
}

.navbar-right {
  margin-right: 10px;
}

ul {
  display: flex;
  list-style: none;
}

li {
  margin: 0 20px;
}
</style>
