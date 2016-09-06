import Modal from 'components/Modal'
import Dropdown from 'components/Dropdown'
import Popover from 'components/Popover'
import Tooltip from 'components/Tooltip'

import ViewFramework from 'components/layouts/ViewFramework'
import Sidebar from 'components/layouts/Sidebar'
import Topbar from 'components/layouts/Topbar'
import TopbarNav from 'components/layouts/TopbarNav'
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
    layouts: {
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
