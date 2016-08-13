import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// 自定义jQuery
import bootstrapHandler from './class/bootstrapHandler'
bootstrapHandler.init();

// 自定义指令
import directiveHandler from './class/directiveHandler'
import Tooltip from './directives/tooltip'
directiveHandler.register([Tooltip]);

Vue.use(VueRouter);
new Vue({
    el: 'body',
    components: { App },
    data: {
    }
});
