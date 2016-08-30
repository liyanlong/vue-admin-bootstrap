import Modal from 'components/Modal'
import Dropdown from 'components/Dropdown'
import Popover from 'components/Popover'
import Tooltip from 'components/Tooltip'

import directiveDropdown from 'directives/dropdown.js'

// Vue.use(directiveDropdown);
const VueAdminBootStrap = {
    components: {
        Modal,
        Dropdown,
        Popover,
        Tooltip
    },
    directives: {
        dropdown: directiveDropdown
    }
}
module.exports = VueAdminBootStrap
