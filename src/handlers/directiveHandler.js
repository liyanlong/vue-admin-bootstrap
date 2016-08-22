import Vue from 'vue'
import Tooltip from '../directives/tooltip'
import Dropdown from '../directives/dropdown'
export default {
    init () {
        var directives = [Tooltip, Dropdown];
        directives.forEach(directive => {
            directive(Vue);
        });
    }
}
