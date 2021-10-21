import { createStore } from 'vuex'
import addresses from '@/store/modules/addresses'
import buildings from '@/store/modules/buildings'
import mutations from '@/store/mutations'

export default createStore({
  modules: {
    addresses,
    buildings
  },
  state: {},
  mutations,
  actions: {}
})
