<template>
  <div class="min-h-screen bg-white">
    <Disclosure as="nav" class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <img class="block lg:hidden h-8 w-auto" src="@/assets/mailblox-logo.svg" alt="Mailblox" />
              <img class="hidden lg:block h-8 w-auto" src="@/assets/mailblox-logo-text.svg" alt="Mailblox" />
            </div>
            <div class="flex -my-px ml-6 space-x-8">
              <router-link
                :to="{ name: 'Map' }"
                custom
                v-slot="{ href, navigate, isActive }"
              >
                <a :href="href" :class="[isActive ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium']" :aria-current="isActive ? 'page' : undefined" @click="navigate">
                  Karte
                </a>
              </router-link>
              <router-link
                :to="{ name: 'Addresses' }"
                custom
                v-slot="{ href, navigate, isActive }"
              >
                <a :href="href" :class="[isActive ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium']" :aria-current="isActive ? 'page' : undefined" @click="navigate">
                  Adressen
                </a>
              </router-link>
            </div>
          </div>
          <button class="relative flex items-center justify-items-end" @click="updateData">Update</button>
        </div>
      </div>
    </Disclosure>

    <router-view v-slot="{ Component }">
      <keep-alive include="Map">
        <component :is="Component"/>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import { Disclosure } from '@headlessui/vue'
import { useAddressesStore } from '@/stores/addresses'
import { useBuildingsStore } from '@/stores/buildings'
export default {
  components: {
    Disclosure
  },

  setup () {
    const addressesStore = useAddressesStore()
    const buildingsStore = useBuildingsStore()

    return {
      addressesStore,
      buildingsStore
    }
  },

  methods: {
    updateData () {
      localStorage.clear()
      this.addressesStore.addressItems = []
      this.addressesStore.addressesLoaded = false
      this.buildingsStore.buildingItems = []
      this.buildingsStore.buildingsLoaded = false
      this.addressesStore.fetchAddresses()
      this.buildingsStore.fetchBuildings()
      setTimeout(() => {
        // eslint-disable-next-line no-self-assign
        location.href = location.href
      }, 1000)
    }
  }
}
</script>
