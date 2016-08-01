import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.config.debug = true;
/* eslint-disable no-new */
new Vue({
    el: 'body',
    components: { App },
    data: {
    }
})
