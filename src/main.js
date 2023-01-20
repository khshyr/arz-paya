import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosHandler from '@/services/axios'
import './assets/style/main.scss'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
app.use(store);
app.config.globalProperties.$http = axiosHandler;
app.use(router);
app.mount("#app");
