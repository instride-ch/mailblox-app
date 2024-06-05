import { defineStore } from 'pinia'
import address from '@/resources/address'

export const useAddressesStore = defineStore('addresses', {
  state: () => ({
    items: [],
    itemsLoaded: false
  }),

  getters: {
    getAddresses: (state) => state.items,
    isAddressesLoaded: (state) => state.itemsLoaded
  },

  actions: {
    fetchAddresses () {
      return new Promise((resolve, reject) => {
        if (this.itemsLoaded) {
          resolve(this.items)
        } else {
          address.fetch().then(snapshot => {
            const addresses = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }))

            this.items = addresses
            this.itemsLoaded = true

            resolve(addresses)
          }).catch(error => {
            reject(error)
          })
        }
      })
    }
  }
})
