<script setup>
const props = defineProps(["planets"]);
</script>

<template>
  <v-container>
    <div>NAVBAR</div>
    <div>{{ planets }}</div>
  </v-container>
</template>
