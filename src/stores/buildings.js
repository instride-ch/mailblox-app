import { defineStore } from 'pinia'
import building from '@/resources/building'
import { useLocalStorage } from '@vueuse/core'

export const useBuildingsStore = defineStore('buildings', {
  state: () => {
    return {
      buildingItems: useLocalStorage('buildings', []),
      buildingsLoaded: useLocalStorage('buildingsLoaded', false),
      selectedBuilding: null
    }
  },

  getters: {
    getBuildings: (state) => state.buildingItems,
    getBuildingsByOsmId: (state) => (osmId) => state.buildingItems.find(building => building.osm_id === osmId),
    isBuildingsLoaded: (state) => state.buildingsLoaded
  },

  actions: {
    fetchBuildings () {
      return new Promise((resolve, reject) => {
        if (this.buildingsLoaded) {
          resolve(this.buildingItems)
        } else {
          building.fetch().then(snapshot => {
            const buildings = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }))

            this.buildingItems = buildings
            this.buildingsLoaded = true

            resolve(buildings)
          }).catch(error => {
            reject(error)
          })
        }
      })
    },
    saveBuilding (currentBuilding) {
      building.update(currentBuilding)
    }
  }
})
