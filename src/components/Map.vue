<template>
  <div id="map"></div>
  <Modal ref="modal" @close="onModalClose" />
</template>

<script>
import MapboxGL from 'mapbox-gl'
import polylabel from '@mapbox/polylabel'
import Modal from './Modal.vue'

export default {
  name: 'Map',

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
        url: 'mapbox://wvision.4hcksvl7'
      })

      this.map.addLayer({
        id: 'buildings',
        type: 'fill',
        source: 'buildings',
        'source-layer': 'buildings-5uyhwo',
        paint: {
          'fill-outline-color': 'rgba(0, 0, 0, 0.1)',
          'fill-color': 'rgba(0, 0, 0, 0.1)'
        }
      }, 'settlement-label')

      this.map.addLayer({
        id: 'buildings-highlighted',
        type: 'fill',
        source: 'buildings',
        'source-layer': 'buildings-5uyhwo',
        paint: {
          'fill-outline-color': '#484896',
          'fill-color': '#6e599f',
          'fill-opacity': 0.75
        },
        filter: ['in', 'osm_id', '']
      }, 'settlement-label')

      this.map.on('click', 'buildings', (e) => {
        const bbox = [
          [e.point.x, e.point.y],
          [e.point.x, e.point.y]
        ]
        const selectedFeature = this.map.queryRenderedFeatures(bbox, {
          layers: ['buildings']
        })[0]
        this.map.setFilter('buildings-highlighted', ['in', 'osm_id', selectedFeature.properties.osm_id])
        this.map.flyTo({
          center: polylabel(selectedFeature.geometry.coordinates, 1.0),
          zoom: 16
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
      this.map.setFilter('buildings-highlighted', ['in', 'osm_id', ''])
    }
  }
}
</script>

<style scoped>
#map {
  width: 100vw;
  height: 100vh;
}

#info {
  display: table;
  position: relative;
  margin: 0 auto;
  word-wrap: anywhere;
  white-space: pre-wrap;
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  text-align: center;
  color: #222;
  background: #fff;
}
</style>
