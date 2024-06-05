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
      <div v-for="letter in Object.keys(addresses)" :key="letter" class="relative">
        <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
          <h3>{{ letter }}</h3>
        </div>
        <ul role="list" class="relative z-0 divide-y divide-gray-200">
          <li v-for="address in addresses[letter]" :key="address.id" class="bg-white">
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
                    {{ address.party_quantity }} {{ address.party_quantity === 1 ? 'Partei' : 'Parteien' }}
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
import { useAddressesStore } from '@/stores/addresses'
import { computed, defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'AddressList',

  components: {
    HomeIcon,
    UsersIcon
  },

  setup () {
    const addressesStore = useAddressesStore()

    onMounted(async () => {
      await addressesStore.fetchAddresses()
    })

    const items = computed(() => addressesStore.items)

    const addresses = computed(() => {
      if (!items.value) {
        return {}
      }

      const directory = {}

      items.value.forEach(item => {
        const key = item.street.charAt(0)

        if (!(key in directory)) {
          directory[key] = []
        }

        directory[key].push(item)
      })

      return directory
    })

    const addressCount = computed(() => {
      return Object.values(addresses.value)
        .reduce((total, addresses) => total + addresses.length, 0)
    })

    const partyCount = computed(() => {
      return Object.values(addresses.value)
        .reduce((total, addresses) => total + addresses
          .reduce((total, { party_quantity: quantity }) => total + quantity, 0), 0)
    })

    const fullAddress = (address) => {
      return `${address.street || '{Strasse}'} ${address.housenumber || '{Hausnummer}'}, ${address.postcode || '{PLZ}'} ${address.city || '{Ortschaft}'}`
    }

    return {
      addresses,
      addressCount,
      partyCount,
      fullAddress
    }
  }
})
</script>
