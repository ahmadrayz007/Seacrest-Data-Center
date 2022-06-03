import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { createPinia } from 'pinia'
import moment from 'moment'
import 'flowbite';

const app = createApp(App)


app.use(router)
app.use(moment)
app.use(createPinia())
app.mount('#app')

