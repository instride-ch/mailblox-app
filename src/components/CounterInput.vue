<template>
  <div class="counter-input">
    <label for="counter-input-number" class="w-full text-gray-700 text-sm font-semibold">Anzahl Parteien</label>
    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
      <button @click="sub" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
        <span class="m-auto text-2xl font-thin">−</span>
      </button>
      <input
        type="number"
        class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700  outline-none"
        name="custom-input-number"
        :value="value"
        @input="value = $event.target.value"
      />
      <button @click="add" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer outline-none">
        <span class="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CounterInput',

  props: {
    modelValue: Number
  },

  emits: ['update:modelValue'],

  computed: {
    value: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', Number.parseInt(value))
      }
    }
  },

  methods: {
    add () {
      this.value += 1
    },
    sub () {
      if (this.value > 1) {
        this.value -= 1
      }
    }
  }
}
</script>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.counter-input input:focus {
  outline: none !important;
}

.counter-input button:focus {
  outline: none !important;
}
</style>
