import $ from 'jquery'
import Vue from 'Vue'
import modal from 'components/Modal'
import dropdown from 'components/Dropdown'
import directiveDropdown from 'directives/dropdown.js'

Vue.use(directiveDropdown);

window.Vue = Vue
window.$ = $

const VueAdminBootStrap = {
    components: {
        modal,
        dropdown
    },
    directives: {
        dropdown: directiveDropdown
    }
}
module.exports = VueAdminBootStrap
