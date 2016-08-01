import Vue from 'vue'

import App from './App'
import VueRouter from 'vue-router'
import Tooltip from './directives/tooltip'

Vue.use(VueRouter);
Tooltip(Vue);
/* eslint-disable no-new */
new Vue({
    el: 'body',
    components: { App },
    data: {
    }
})
