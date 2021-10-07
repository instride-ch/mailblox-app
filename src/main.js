import { createApp } from 'vue'
import { initializeApp } from 'firebase/app'
import firebaseConfig from '@/config/firebase'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import '@/assets/css/index.css'

// Firebase
initializeApp(firebaseConfig)

// Vue.js
createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
