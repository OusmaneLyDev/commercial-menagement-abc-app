import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createApp } from 'vue'
import App from './App.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

createApp(App)
  .component('fa', FontAwesomeIcon)
  .mount('#app')

createApp(App).mount('#app')
