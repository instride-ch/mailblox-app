import { defineStore } from 'pinia'
import address from '@/resources/address'
import { useLocalStorage } from '@vueuse/core'

export const useAddressesStore = defineStore('addresses', {
  state: () => {
    return {
      addressItems: useLocalStorage('addresses', []),
      addressesLoaded: useLocalStorage('addressesLoaded', false)
    }
  },

  getters: {
    getAddresses: (state) => state.addressItems,
    getSortedAddresses: (state) => state.addressItems.sort((a, b) => a.street < b.street ? -1 : a.street > b.street ? 1 : 0),
    isAddressesLoaded: (state) => state.addressesLoaded
  },

  actions: {
    fetchAddresses () {
      return new Promise((resolve, reject) => {
        if (this.addressesLoaded) {
          resolve(this.addressItems)
        } else {
          address.fetch().then(snapshot => {
            const addresses = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }))

            this.addressItems = addresses
            this.addressesLoaded = true

            resolve(addresses)
          }).catch(error => {
            reject(error)
          })
        }
      })
    }
  }
})
