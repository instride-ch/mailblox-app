<template>
  <div id="map"></div>
  <modal ref="modal" @close="onModalClose"/>
</template>

<script>
import MapboxGL from 'mapbox-gl'
import Modal from '@/components/Modal'

export default {
  name: 'Mapbox',

  components: {
    Modal
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
        url: 'mapbox://wvision.bhrnw7t6'
      })

      this.map.addLayer({
        id: 'buildings',
        type: 'fill',
        source: 'buildings',
        'source-layer': 'buildings-sursee-5ttb04',
        paint: {
          'fill-outline-color': 'rgba(0, 0, 0, 0.1)',
          'fill-color': 'rgba(0, 0, 0, 0.1)'
        }
      }, 'settlement-label')

      this.map.addLayer({
        id: 'buildings-highlighted',
        type: 'fill',
        source: 'buildings',
        'source-layer': 'buildings-sursee-5ttb04',
        paint: {
          'fill-outline-color': '#484896',
          'fill-color': '#6e599f',
          'fill-opacity': 0.75
        },
        filter: ['in', '@id', '']
      }, 'settlement-label')

      this.map.on('click', 'buildings', ({ point }) => {
        const bbox = [
          [point.x, point.y],
          [point.x, point.y]
        ]
        const building = this.map.queryRenderedFeatures(bbox, { layers: ['buildings'] })[0]

        this.fitCoordinates(building.geometry.coordinates[0])
        this.map.setFilter('buildings-highlighted', ['in', '@id', building.properties['@id']])

        this.$refs.modal.setAddress({
          street: building.properties['addr:street'],
          housenumber: building.properties['addr:housenumber'],
          postcode: building.properties['addr:postcode'],
          city: building.properties['addr:city']
        })
        this.$refs.modal.setIsOpen(true)
      })

      this.map.on('mouseenter', 'buildings', () => {
        this.map.getCanvas().style.cursor = 'pointer'
      })

      this.map.on('mouseleave', 'buildings', () => {
        this.map.getCanvas().style.cursor = ''
      })
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
      this.map.setFilter('buildings-highlighted', ['in', '@id', ''])
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
