import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore(
    'store',
    () => {
        const name = ref('')
        const daisyTheme = ref('dark')
        const planets = ref({})
        const loadPlanets = async () => {
            const res = await fetch("/data.json");
            planets.value = await res.json();
        }
        return { name, daisyTheme, loadPlanets }
    },
    {
        persist: true
    }
)
