import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// 自定义 bootstrap.js
import bootstrapHandler from './handlers/bootstrapHandler'
bootstrapHandler.init();

// 自定义指令
import directiveHandler from './handlers/directiveHandler'
directiveHandler.init();

Vue.use(VueRouter);
new Vue({
    el: 'body',
    components: { App },
    data: {
    }
});
