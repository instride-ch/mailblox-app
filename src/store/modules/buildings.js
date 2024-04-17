import building from '@/resources/building'

export default {
  namespaced: true,

  state: {
    items: [
      {
        street: 'Sandgruebestrasse 4'
      },
      {
        street: 'Sandgruebestrasse 2'
      }
    ],
    itemsLoaded: false
  },

  getters: {},

  mutations: {},

  actions: {
    fetchBuildings ({ commit, state }) {
      return new Promise((resolve) => {
        if (state.itemsLoaded) {
          resolve(state.items)
        } else {
          building.fetch().then(snapshot => {
            const buildings = snapshot.docs.map(doc => {
              const item = { id: doc.id, ...doc.data() }
              commit('setItem', { resource: 'buildings', item }, { root: true })
              console.log(doc)
              // TODO: commit addresses into store as well (via REF)

              return item
            })

            commit('setItemsLoaded', { resource: 'buildings', status: true }, { root: true })

            localStorage.setItem('buildings', JSON.stringify(buildings, null, 2))
            resolve(buildings)
          })
        }
      })
    }
  }
}
