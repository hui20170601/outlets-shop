import Vue from 'vue'
import App from './App'
import router from './router'
import mui from 'mui'

import '../static/css/mui.css'
import './style/main.css'



Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})