import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinaStore = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinaStore)

app.mount('#app')
