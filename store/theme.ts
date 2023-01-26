import { defineStore } from 'pinia'

interface IStateStore {
  darkMode: boolean
}

export const useThemeStore = defineStore('theme', {
  state: (): IStateStore => ({
    darkMode: false,
  }),
  getters: {},
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
  },
  persist: true,
})
