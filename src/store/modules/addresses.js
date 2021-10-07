import AddressAPI from '@/api/address'
import { createStore } from 'vuex'

export default createStore({
  namespaced: true,

  state: {
    addresses: [],
    addressesLoaded: false
  },

  mutations: {
  },

  actions: {
    fetchAddresses ({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (state.addressesLoaded) {
          resolve(state.addresses)
        } else {
          AddressAPI.fetch()
            .then(({ data }) => {
              commit('setAddresses', data)
              commit('setAddressesLoaded', true)

              resolve(data)
            })
            .catch((error) => reject(error))
        }
      })
    }
  },

  modules: {
  }
})
