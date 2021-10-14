import { createStore } from 'vuex'
import { upsert } from '@/helpers'

export default createStore({
  state: {
    addresses: []
  },
  mutations: {
    setAddresses (state, { address }) {
      upsert(state.addresses, address)
    }
  },
  actions: {
  },
  modules: {
  }
})
