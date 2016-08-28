require('./assets/docs.css')
require('./assets/prism.css')
require('prismjs');
require('./js/showLanguage')
import Vue from 'Vue'

Vue.config.debug = true
import bodyDocs from './bodyDocs'
new Vue({
    el: 'body',
    components: {
        bodyDocs
    },
    created () {
    },
    ready () {
        console.log('this is docs');
    }
})
