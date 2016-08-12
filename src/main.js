import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// 自定义指令
import directiveHandler from './class/directiveHandler'
import Tooltip from './directives/tooltip'
directiveHandler.register([Tooltip]);

// 自定义jQuery
// import jQuery from 'jquery'
// import 'bootstrap'
// console.log(jQuery);

Vue.use(VueRouter);

new Vue({
    el: 'body',
    components: { App },
    data: {
    }
});
