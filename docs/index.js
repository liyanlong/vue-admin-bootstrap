require('assets/docs.css')
require('assets/prism.css')
require('prismjs');
require('./js/showLanguage')
import Vue from 'Vue'
import $ from 'jquery'
import bodyDocs from './bodyDocs'
Vue.config.debug = true
new Vue({
    el: 'body',
    components: {
        bodyDocs
    },
    created () {
        if (this.$root.sections) {
            this.$root.sections = [];
        }
    },
    ready () {
        var list = this.$root.sections
        while (list.length) {
            list.pop()
        }
        $('.bs-docs-section').each((index, el) => {
            list.push({
                id: el.id,
                name: $(el).find('.anchor').text(),
                el: el
            })
        })
    }
})
