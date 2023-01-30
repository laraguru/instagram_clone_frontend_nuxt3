import { defineStore } from 'pinia'
import { IStory } from '@@/models'

interface IState {
  data: IStory[]
  hasErr: boolean
  errors: Record<string, string>
}

export const useStoriesStore = defineStore('stories', {
  state: () => ({
    data: [] as IStory[],
    hasErr: false,
    errors: {},
  }),
  getters: {},
  actions: {
    save(data: IStory[] | null) {
      if (data) {
        this.data = data
      }
    },
  },
})
