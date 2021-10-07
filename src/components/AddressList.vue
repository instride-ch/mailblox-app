<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Erfasste Adressen
        </h2>
        <div class="flex flex-row sm:flex-wrap mt-0 space-x-6">
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <HomeIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            {{ addressCount }} Adressen
          </div>
          <div class="mt-2 flex items-center text-sm text-gray-500">
            <UsersIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            {{ partyCount }} Parteien
          </div>
        </div>
      </div>
    </div>
    <nav class="xl:px-8" aria-label="Adressen">
      <div v-for="letter in Object.keys(directory)" :key="letter" class="relative">
        <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
          <h3>{{ letter }}</h3>
        </div>
        <ul role="list" class="relative z-0 divide-y divide-gray-200">
          <li v-for="address in directory[letter]" :key="address.id" class="bg-white">
            <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
              <div class="flex-shrink-0">
                <div class="flex h-10 w-10 bg-gray-100 rounded-full items-center justify-center">
                  <HomeIcon class="h-6 w-6 text-gray-500"/>
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <a href="#" class="focus:outline-none">
                  <!-- Extend touch target to entire panel -->
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">
                    {{ fullAddress(address) }}
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    {{ address.parties }} {{ address.parties === 1 ? 'Partei' : 'Parteien' }}
                  </p>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { HomeIcon, UsersIcon } from '@heroicons/vue/solid'

const directory = {
  A: [
    {
      id: 1,
      street: 'Ahornweg',
      houseNumber: '2',
      city: undefined,
      zipCode: undefined,
      country: 'CH',
      parties: 3
    },
    {
      id: 2,
      street: 'Ahornweg',
      houseNumber: '4',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 1
    },
    {
      id: 3,
      street: 'Allmendweg',
      houseNumber: '3c',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 4
    },
    {
      id: 4,
      street: 'Allmendstrasse',
      houseNumber: '12',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 2
    }
  ],
  B: [
    {
      id: 5,
      street: 'Buchfinkenweg',
      houseNumber: '5',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 1
    },
    {
      id: 6,
      street: 'Buchfinkenweg',
      houseNumber: '2',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 1
    },
    {
      id: 7,
      street: 'Buchfinkenweg',
      houseNumber: '7',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 6
    }
  ],
  C: [
    {
      id: 8,
      street: 'Chlosterstrasse',
      houseNumber: '4a',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 12
    },
    {
      id: 9,
      street: 'Chlosterstrasse',
      houseNumber: '4b',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 3
    }
  ],
  E: [
    {
      id: 10,
      street: 'Eichenstrasse',
      houseNumber: '1',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 4
    },
    {
      id: 11,
      street: 'Eichenstrasse',
      houseNumber: '3',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 1
    },
    {
      id: 12,
      street: 'Eichenstrasse',
      houseNumber: '5',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 2
    },
    {
      id: 13,
      street: 'Eichenstrasse',
      houseNumber: '7',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 1
    }
  ],
  G: [
    {
      id: 14,
      street: 'Glockenstrasse',
      houseNumber: '3a',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 2
    },
    {
      id: 15,
      street: 'Glockenstrasse',
      houseNumber: '3b',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 5
    }
  ],
  M: [
    {
      id: 16,
      street: 'Migrosallee',
      houseNumber: '2',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 20
    },
    {
      id: 17,
      street: 'Migrosallee',
      houseNumber: '4',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 1
    },
    {
      id: 18,
      street: 'Migrosallee',
      houseNumber: '6',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 2
    }
  ],
  S: [
    {
      id: 19,
      street: 'Sandgruebestrasse',
      houseNumber: '4',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 4
    },
    {
      id: 20,
      street: 'Sandgruebestrasse',
      houseNumber: '2',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 5
    }
  ],
  T: [
    {
      id: 21,
      street: 'Taumatte',
      houseNumber: '21',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 1
    },
    {
      id: 22,
      street: 'Taumatte',
      houseNumber: '25',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 4
    },
    {
      id: 23,
      street: 'Taumatte',
      houseNumber: '23',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 2
    }
  ],
  W: [
    {
      id: 24,
      street: 'Wollenweg',
      houseNumber: '2',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 1
    },
    {
      id: 25,
      street: 'Wollenweg',
      houseNumber: '4',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 3
    }
  ],
  Y: [
    {
      id: 26,
      street: 'Yallostrasse',
      houseNumber: '265',
      city: 'Sursee',
      zipCode: '6210',
      country: 'CH',
      parties: 2
    }
  ]
}

export default {
  name: 'AddressList',

  components: {
    HomeIcon,
    UsersIcon
  },

  computed: {
    addressCount () {
      return Object.values(directory).reduce((total, addresses) => total + addresses.length, 0)
    },

    partyCount () {
      return Object.values(directory).reduce((total, addresses) => total + addresses.reduce((total, { parties }) => total + parties, 0), 0)
    }
  },

  setup () {
    return {
      directory
    }
  },

  methods: {
    fullAddress (address) {
      return `${address.street || '{Strasse}'} ${address.houseNumber || '{Hausnummer}'}, ${address.zipCode || '{PLZ}'} ${address.city || '{Ortschaft}'}`
    }
  }
}
</script>
