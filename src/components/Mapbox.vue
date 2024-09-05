<template>
  <div id="map"></div>
  <button @click="updateData">Update</button>
  <Modal ref="modal" @close="onModalClose" @save="updateFilter" />
</template>

<script>
import MapboxGL from 'mapbox-gl'
import Modal from '@/components/Modal'
import { useAddressesStore } from '@/stores/addresses'
import { useBuildingsStore } from '@/stores/buildings'

export default {
  name: 'Mapbox',

  components: {
    Modal
  },

  setup () {
    const addressesStore = useAddressesStore()
    const buildingsStore = useBuildingsStore()
    const buildingNoAddress = []
    const buildingComplete = []
    const buildingPartial = []
    buildingsStore.getBuildings.forEach(building => {
      if (building.addresses.length === 0) {
        buildingNoAddress.push(building.osm_id.toString())
      }
      if (building.record_status === 'complete') {
        buildingComplete.push(building.osm_id.toString())
      }
      if (building.record_status === 'partial') {
        buildingPartial.push(building.osm_id.toString())
      }
    })

    return {
      buildingNoAddress,
      buildingComplete,
      buildingPartial,
      addressesStore,
      buildingsStore
    }
  },

  data () {
    return {
      modalAddresses: [],
      building: Object
    }
  },

  beforeMount () {
    this.addressesStore.fetchAddresses()
    this.buildingsStore.fetchBuildings()
  },

  mounted () {
    MapboxGL.accessToken = process.env.VUE_APP_MAPBOX_TOKEN
    this.map = new MapboxGL.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [8.109, 47.174],
      zoom: 14
    })

    this.map.on('load', () => {
      this.map.addSource('buildings', {
        type: 'vector',
        url: 'mapbox://wvision.bd5gcv6m'
      })

      this.map.addLayer({
        id: 'buildings',
        type: 'fill',
        source: 'buildings',
        'source-layer': 'buildings-sursee-bthp8h',
        paint: {
          'fill-outline-color': 'rgba(0, 0, 0, 0.1)',
          'fill-color': 'rgba(0, 0, 0, 0.1)'
        }
      }, 'settlement-label')

      this.map.addLayer({
        id: 'buildings-no-address',
        type: 'fill',
        source: 'buildings',
        'source-layer': 'buildings-sursee-bthp8h',
        paint: {
          'fill-outline-color': 'rgba(0, 0, 0, 0.1)',
          'fill-color': 'rgba(255,0,0,0.1)'
        },
        filter: ['in', 'osm_id', '']
      }, 'settlement-label')

      this.map.addLayer({
        id: 'buildings-complete',
        type: 'fill',
        source: 'buildings',
        'source-layer': 'buildings-sursee-bthp8h',
        paint: {
          'fill-outline-color': 'rgba(0, 0, 0, 0.1)',
          'fill-color': 'rgba(0,255,0,0.1)'
        },
        filter: ['in', 'osm_id', '']
      }, 'settlement-label')

      this.map.addLayer({
        id: 'buildings-partial',
        type: 'fill',
        source: 'buildings',
        'source-layer': 'buildings-sursee-bthp8h',
        paint: {
          'fill-outline-color': 'rgba(0, 0, 0, 0.1)',
          'fill-color': 'rgba(255,255,0,0.1)'
        },
        filter: ['in', 'osm_id', '']
      }, 'settlement-label')

      this.map.addLayer({
        id: 'buildings-highlighted',
        type: 'fill',
        source: 'buildings',
        'source-layer': 'buildings-sursee-bthp8h',
        paint: {
          'fill-outline-color': '#484896',
          'fill-color': '#6e599f',
          'fill-opacity': 0.75
        },
        filter: ['in', 'osm_id', '']
      }, 'settlement-label')

      this.map.on('click', 'buildings', ({ point }) => {
        const bbox = [
          [point.x, point.y],
          [point.x, point.y]
        ]
        const building = this.map.queryRenderedFeatures(bbox, { layers: ['buildings'] })[0]
        const foundBuilding = this.buildingsStore.getBuildingsByOsmId(parseInt(building.properties.osm_id))

        if (foundBuilding.addresses.length !== 0) {
          this.fitCoordinates(building.geometry.coordinates[0])
          this.map.setFilter('buildings-highlighted', ['in', 'osm_id', building.properties.osm_id])

          const allAddresses = []

          for (const address of foundBuilding.addresses) {
            const currentAddress = this.addressesStore.getAddressesById(address._key.path.segments[6])
            allAddresses.push({
              id: currentAddress.id,
              street: currentAddress.street,
              housenumber: currentAddress.housenumber,
              postcode: currentAddress.postcode,
              city: currentAddress.city,
              party_quantity: currentAddress.party_quantity,
              osm_id: currentAddress.osm_id
            })
          }

          this.addressesStore.selectedAddresses = allAddresses
          this.buildingsStore.selectedBuilding = foundBuilding
          this.$refs.modal.setIsOpen(true)
        }
      })

      this.map.on('mouseenter', 'buildings', () => {
        this.map.getCanvas().style.cursor = 'pointer'
      })

      this.map.on('mouseleave', 'buildings', () => {
        this.map.getCanvas().style.cursor = ''
      })

      this.updateFilter()
    })

    this.map.addControl(
      new MapboxGL.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        fitBoundsOptions: {
          maxZoom: 16
        },
        trackUserLocation: true,
        showUserHeading: true,
        showAccuracyCircle: false
      })
    )
  },

  methods: {
    onModalClose () {
      this.map.setFilter('buildings-highlighted', ['in', 'osm_id', ''])
    },

    updateData () {
      localStorage.clear()
      setTimeout(() => {
        this.addressesStore.fetchAddresses()
        this.buildingsStore.fetchBuildings()
        console.log(this.addressesStore)
        console.log(this.buildingsStore)
        setTimeout(() => {
          // eslint-disable-next-line no-self-assign
          location.href = location.href
        }, 1000)
      }, 1000)
    },

    buildingNotDone () {
      const index = this.buildingsStore.buildingItems.indexOf(this.buildingsStore.selectedBuilding)
      this.buildingPartial.push(this.buildingsStore.selectedBuilding.osm_id.toString())
      this.buildingComplete = this.buildingComplete.filter(item => item !== this.buildingsStore.selectedBuilding.osm_id.toString())
      this.buildingsStore.buildingItems[index].record_status = 'partial'
      this.updateFilter()
    },

    buildingDone () {
      const index = this.buildingsStore.buildingItems.indexOf(this.buildingsStore.selectedBuilding)
      this.buildingComplete.push(this.buildingsStore.selectedBuilding.osm_id.toString())
      this.buildingPartial = this.buildingPartial.filter(item => item !== this.buildingsStore.selectedBuilding.osm_id.toString())
      this.buildingsStore.buildingItems[index].record_status = 'complete'
      this.updateFilter()
    },
    reset () {
      const index = this.buildingsStore.buildingItems.indexOf(this.buildingsStore.selectedBuilding)
      this.buildingComplete = this.buildingComplete.filter(item => item !== this.buildingsStore.selectedBuilding.osm_id.toString())
      this.buildingPartial = this.buildingPartial.filter(item => item !== this.buildingsStore.selectedBuilding.osm_id.toString())
      this.buildingsStore.buildingItems[index].record_status = 'empty'
      this.updateFilter()
    },

    updateFilter (status) {
      switch (status) {
        case 'complete':
          this.buildingDone()
          break
        case 'partial':
          this.buildingNotDone()
          break
        case 'empty':
          this.reset()
          break
      }
      this.map.setFilter('buildings-no-address', ['in', 'osm_id', ...this.buildingNoAddress])
      this.map.setFilter('buildings-complete', ['in', 'osm_id', ...this.buildingComplete])
      this.map.setFilter('buildings-partial', ['in', 'osm_id', ...this.buildingPartial])
    },

    fitCoordinates (coordinates) {
      const bounds = new MapboxGL.LngLatBounds(coordinates[0], coordinates[0])

      for (const coordinate of coordinates) {
        bounds.extend(coordinate)
      }

      this.map.fitBounds(bounds, {
        zoom: 17.5,
        offset: [0, -60]
      })
    }
  }
}
</script>

<style scoped>
#map {
  width: 100vw;
  height: calc(100vh - 65px);
}
</style>
