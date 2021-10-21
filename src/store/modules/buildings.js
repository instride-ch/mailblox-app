import building from '@/resources/building'

export default {
  namespaced: true,

  state: {
    items: [],
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

            resolve(buildings)
          })
        }
      })
    }
  }
}
