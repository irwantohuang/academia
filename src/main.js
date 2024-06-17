import { createApp } from 'vue'
import "./styles/main.css"
import App from './App.vue'
import { FaIcon } from './plugins/fontAwesome'

const app = createApp(App);
app
    .component('fa-icon', FaIcon)
    .mount('#app');
