<template>
  <div>
    <v-container class="navbar">
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
    <div class="navbar-placeholder"></div>
    <!-- Rest of your page content goes here -->
  </div>
</template>

<script setup>
const props = defineProps(["planets"]);
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #1a1a1a;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}

.navbar-placeholder {
  height: 70px; /* This should be the same height as your navbar, including any padding or borders */
}

.navbar div {
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

a,
a:visited {
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
  transition: color 0.3s ease;
}

a:hover {
  color: #f7b733;
}
</style>
