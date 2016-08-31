import Modal from 'components/Modal'
import Dropdown from 'components/Dropdown'
import Popover from 'components/Popover'
import Tooltip from 'components/Tooltip'

import ViewFramework from 'components/layout/ViewFramework'
import Sidebar from 'components/layout/Sidebar'
import Topbar from 'components/layout/Topbar'
import TopbarNav from 'components/layout/TopbarNav'
import popoverMixins from 'components/mixins/popoverMixins.js'

import directiveDropdown from 'directives/dropdown.js'

// Vue.use(directiveDropdown);
const VueAdminBootStrap = {
    components: {
        Modal,
        Dropdown,
        Popover,
        Tooltip
    },
    layout: {
        Sidebar,
        Topbar,
        TopbarNav,
        ViewFramework
    },
    directives: {
        dropdown: directiveDropdown
    },
    mixins: {
        popover: popoverMixins
    }
}
module.exports = VueAdminBootStrap
