<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="closeModal">
      <div class="flex items-end justify-center min-h-screen pt-2 px-2 pb-2 text-center">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div class="block absolute top-0 right-0 pt-4 pr-4">
              <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="closeModal">
                <span class="sr-only">Schliessen</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="sm:mt-0 sm:text-left">
              <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                Adressen
              </DialogTitle>
              <div class="mt-2">
                <ul>
                  <li v-for="(address, index) in addressesStore.selectedAddresses" :key="index" class="cursor-pointer" @click="selectAddress(index)">
                    <p>{{ getAddressText(address) }}</p>
                    <div v-if="selectedIndex === index || addressesStore.selectedAddresses.length === 1">
                      <label :for="'form-number-parties-' + index" class="w-full text-gray-700 text-sm font-semibold">Anzahl Parteien</label>
                      <vue-number-input v-model="address.party_quantity" :attrs="{ id: 'form-number-parties-' + index }" :min="0" center controls/>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-5 sm:mt-4">
              <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" @click="saveModal">
                Speichern
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Dialog, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'
import VueNumberInput from '@chenfengyuan/vue-number-input'
import { useAddressesStore } from '@/stores/addresses'
import { useBuildingsStore } from '@/stores/buildings'

export default defineComponent({
  components: {
    Dialog,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
    VueNumberInput
  },

  setup () {
    const addressesStore = useAddressesStore()
    const buildingsStore = useBuildingsStore()
    const open = ref(false)
    const selectedIndex = ref(null)

    return {
      open,
      addressesStore,
      buildingsStore,
      selectedIndex,
      setIsOpen (value) {
        open.value = value
      },
      selectAddress (index) {
        selectedIndex.value = index
      }
    }
  },

  methods: {
    closeModal () {
      this.setIsOpen(false)
      this.$emit('close')
      this.addressesStore.selectedAddresses = null
      this.buildingsStore.selectedBuilding = null
      this.selectedIndex = null
    },
    saveModal () {
      let counter = 0
      for (const address of this.addressesStore.selectedAddresses) {
        const item = this.addressesStore.addressItems.find(item => item.id === address.id)
        const index = this.addressesStore.addressItems.indexOf(item)
        this.addressesStore.addressItems[index].party_quantity = address.party_quantity
        if (address.party_quantity > 0) {
          counter++
        }
      }
      if (counter === this.addressesStore.selectedAddresses.length) {
        this.buildingsStore.saveBuilding(this.buildingsStore.selectedBuilding, 'complete')
        this.$emit('save', 'complete')
      } else if (counter > 0) {
        this.buildingsStore.saveBuilding(this.buildingsStore.selectedBuilding, 'partial')
        this.$emit('save', 'partial')
      } else {
        this.buildingsStore.saveBuilding(this.buildingsStore.selectedBuilding, 'empty')
        this.$emit('save', 'empty')
      }
      this.addressesStore.saveAddress(this.addressesStore.selectedAddresses)
      this.closeModal()
    },
    getAddressText (address) {
      if (!address.street && !address.housenumber) {
        return 'Keine eindeutige Adresse'
      }

      return `${address.street} ${address.housenumber || ''}`
    }
  }
})
</script>
