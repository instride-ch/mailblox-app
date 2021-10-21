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
import { KeepAlive } from 'vue'
import { mapActions } from 'vuex'

const navigation = [
  { name: 'Karte', href: '#', current: true },
  { name: 'Adressen', href: '#', current: false }
]

export default {
  components: {
    Disclosure,
    KeepAlive
  },

  setup () {
    return {
      navigation
    }
  },

  methods: {
    ...mapActions('buildings', ['fetchBuildings'])
  },

  async created () {
    await this.fetchBuildings()
  }
}
</script>
