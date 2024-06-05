import { defineStore } from 'pinia'
import building from '@/resources/building'

export const useBuildingsStore = defineStore('buildings', {
  state: () => ({
    items: [],
    itemsLoaded: false
  }),

  getters: {
    getBuildings: (state) => state.items,
    isBuildingsLoaded: (state) => state.itemsLoaded
  },

  actions: {
    fetchBuildings () {
      return new Promise((resolve, reject) => {
        if (this.itemsLoaded) {
          resolve(this.items)
        } else {
          building.fetch().then(snapshot => {
            const buildings = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }))

            this.items = buildings
            this.itemsLoaded = true

            resolve(buildings)
          }).catch(error => {
            reject(error)
          })
        }
      })
    }
  }
})
