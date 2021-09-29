<template>
  <div class="min-h-screen bg-white">
    <Disclosure as="nav" class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" />
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

    <router-view/>
  </div>
</template>

<script>
import { Disclosure } from '@headlessui/vue'

const navigation = [
  { name: 'Karte', href: '#', current: true },
  { name: 'Adressen', href: '#', current: false }
]

export default {
  components: {
    Disclosure
  },
  setup () {
    return {
      navigation
    }
  }
}
</script>
