import { docToResource, upsert } from '@/helpers'

export default {
  setItem (state, { resource, item }) {
    upsert(state[resource].items, docToResource(item))
  },

  setItemsLoaded (state, { resource, status }) {
    state[resource].itemsLoaded = status
  }
}
