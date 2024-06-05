import { createApp } from 'vue'
import App from '@/App'
import router from '@/router'
import { createPinia } from 'pinia'
import '@/assets/css/index.css'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
