<script setup>
// Importiere die erforderlichen Bibliotheken und Funktionen
import { Icon } from "@iconify/vue";
import { useTheme } from "vuetify";
import { useStore } from "~/store/store";
import { useRouter } from "vue-router";
import { ref } from "vue";

// Initialisiere die erforderlichen Variablen
const router = useRouter();
const drawer = ref(false);
const theme = useTheme();
const store = useStore();

// Funktion zum Umschalten des Themes
function toggleTheme() {
  if (theme.global.current.value.dark) {
    theme.global.name.value = "myCustomLightTheme";
    store.daisyTheme = "light";
  } else {
    theme.global.name.value = "myCustomDarkTheme";
    store.daisyTheme = "dark";
  }
}
</script>

<template>
  <!-- Hauptnavigation -->
  <v-navigation-drawer v-model="drawer" app>
    <nav class="d-flex flex-column">
      <span class="nav-link" @click="router.push('/')">Home</span>
      <NuxtLink to="/dummy" class="nav-link">Dummy</NuxtLink>
    </nav>
  </v-navigation-drawer>

  <!-- App-Leiste -->
  <v-app-bar app class="pr-4">
    <!-- Navigations-Symbol -->
    <v-app-bar-nav-icon @click="drawer = !drawer">
      <Icon icon="game-icons:hamburger-menu" class="text-5" />
    </v-app-bar-nav-icon>

    <!-- Logo-Icons -->
    <div class="flex gap-2 text-5 items-center mr-4 ml-auto">
      <Icon icon="logos:nuxt-icon" />
      <Icon icon="logos:vuetifyjs" />
      <Icon icon="logos:unocss" />
      <Icon icon="logos:tailwindcss-icon" />
      <Icon icon="line-md:iconify1" />
      <Icon icon="logos:capacitorjs-icon" />

      <!-- Theme-Umschalter -->
      <Icon
        icon="mdi:theme-light-dark"
        @click="toggleTheme"
        class="ml-4 text-7 cursor-pointer"
      />
    </div>
  </v-app-bar>
</template>

<style>
/* Hier kannst du dein individuelles Design anpassen */
.nav-link {
  cursor: pointer;
  margin-bottom: 1rem;
  color: #333;
  font-weight: bold;
}

.nav-link:hover {
  text-decoration: underline;
}

</style>
