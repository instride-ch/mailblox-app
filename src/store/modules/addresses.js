import address from '@/resources/address'

export default {
  namespaced: true,

  state: {
    items: [
      {
        id: 1,
        street: 'Ahornweg',
        housenumber: '2',
        city: undefined,
        postcode: undefined,
        country: 'CH',
        party_quantity: 3
      },
      {
        id: 2,
        street: 'Ahornweg',
        housenumber: '4',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 1
      },
      {
        id: 3,
        street: 'Allmendweg',
        housenumber: '3c',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 4
      },
      {
        id: 4,
        street: 'Allmendstrasse',
        housenumber: '12',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 2
      },
      {
        id: 5,
        street: 'Buchfinkenweg',
        housenumber: '5',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 1
      },
      {
        id: 6,
        street: 'Buchfinkenweg',
        housenumber: '2',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 1
      },
      {
        id: 7,
        street: 'Buchfinkenweg',
        housenumber: '7',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 6
      },
      {
        id: 8,
        street: 'Chlosterstrasse',
        housenumber: '4a',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 12
      },
      {
        id: 9,
        street: 'Chlosterstrasse',
        housenumber: '4b',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 3
      },
      {
        id: 10,
        street: 'Eichenstrasse',
        housenumber: '1',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 4
      },
      {
        id: 11,
        street: 'Eichenstrasse',
        housenumber: '3',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 1
      },
      {
        id: 12,
        street: 'Eichenstrasse',
        housenumber: '5',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 2
      },
      {
        id: 13,
        street: 'Eichenstrasse',
        housenumber: '7',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 1
      },
      {
        id: 14,
        street: 'Glockenstrasse',
        housenumber: '3a',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 2
      },
      {
        id: 15,
        street: 'Glockenstrasse',
        housenumber: '3b',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 5
      },
      {
        id: 16,
        street: 'Migrosallee',
        housenumber: '2',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 20
      },
      {
        id: 17,
        street: 'Migrosallee',
        housenumber: '4',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 1
      },
      {
        id: 18,
        street: 'Migrosallee',
        housenumber: '6',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 2
      },
      {
        id: '09588bb8-bdda-4f0c-bacf-e3e723a6d626',
        street: 'Sandgruebestrasse',
        housenumber: '4',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 4,
        osm_id: 192543109
      },
      {
        id: 20,
        street: 'Sandgruebestrasse',
        housenumber: '2',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 5,
        osm_id: 192543137
      },
      {
        id: 21,
        street: 'Taumatte',
        housenumber: '21',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 1
      },
      {
        id: 22,
        street: 'Taumatte',
        housenumber: '25',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 4
      },
      {
        id: 23,
        street: 'Taumatte',
        housenumber: '23',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 2
      },
      {
        id: 24,
        street: 'Wollenweg',
        housenumber: '2',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 1
      },
      {
        id: 25,
        street: 'Wollenweg',
        housenumber: '4',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 3
      },
      {
        id: 26,
        street: 'Yallostrasse',
        housenumber: '265',
        city: 'Sursee',
        postcode: '6210',
        country: 'CH',
        party_quantity: 2
      }
    ],
    itemsLoaded: false
  },

  getters: {
    getHouseNumber: state => osmId => {
      const item = state.items.find(item => item.osm_id === osmId)
      return item ? item.housenumber : ''
    },
    getStreet: state => osmId => {
      const item = state.items.find(item => item.osm_id === osmId)
      return item ? item.street : ''
    },
    getParties: state => osmId => {
      const item = state.items.find(item => item.osm_id === osmId)
      return item ? item.party_quantity : 1
    },
    getObject: state => id => {
      const item = JSON.parse(localStorage.getItem('addresses')).find(item => item.id === id)
      return item || 'nicht gefunden'
    }
  },

  actions: {
    saveParties ({ commit, state }, payload) {
      const itemIndex = state.items.findIndex(item => item.osm_id === payload.osm_id)
      if (itemIndex !== -1) {
        commit('editParties', { index: itemIndex, quantity: payload.quantity })
      }
    },
    fetchAddresses ({ commit, state }) {
      return new Promise((resolve) => {
        if (state.itemsLoaded) {
          resolve(state.items)
        } else {
          address.fetch().then(snapshot => {
            const addresses = snapshot.docs.map(doc => {
              const item = { id: doc.id, ...doc.data() }
              commit('setItem', { resource: 'addresses', item }, { root: true })
              console.log(doc)
              // TODO: commit addresses into store as well (via REF)

              return item
            })

            commit('setItemsLoaded', { resource: 'addresses', status: true }, { root: true })

            localStorage.setItem('addresses', JSON.stringify(addresses, null, 2))
            console.log(addresses)
            resolve(addresses)
          })
        }
      })
    }
  },
  mutations: {
    editParties (state, payload) {
      state.items[payload.index].party_quantity = payload.quantity
    }
  }
}
