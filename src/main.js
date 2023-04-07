import { createApp } from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'
import AppTest from './components/AppTest.vue'


createApp(App)
    .component('AppTest', AppTest)
    .component('LikeNumber', LikeNumber)
.mount('#app')
