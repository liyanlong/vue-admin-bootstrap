import Modal from 'components/Modal'
import Dropdown from 'components/Dropdown'
import Popover from 'components/Popover'
import Tooltip from 'components/Tooltip'
import TabSet from 'components/TabSet'
import TabGroup from 'components/TabGroup'
import Tab from 'components/Tab'
import PanelGroup from 'components/PanelGroup'
import Panel from 'components/Panel'

import ButtonGroup from 'components/forms/ButtonGroup'
import Checkbox from 'components/forms/Checkbox'

import ViewFramework from 'components/layouts/ViewFramework'
import Sidebar from 'components/layouts/Sidebar'
import Topbar from 'components/layouts/Topbar'
import TopbarNav from 'components/layouts/TopbarNav'
import popoverMixins from 'components/mixins/popoverMixins.js'
import formMixins from 'components/mixins/formMixins.js'

import directiveDropdown from 'directives/dropdown.js'

// Vue.use(directiveDropdown);
const VueAdminBootStrap = {
    components: {
        Modal,
        Dropdown,
        Popover,
        Tooltip,
        TabSet,
        TabGroup,
        Tab,
        PanelGroup,
        Panel
    },
    layouts: {
        Sidebar,
        Topbar,
        TopbarNav,
        ViewFramework
    },
    forms: {
        ButtonGroup,
        Checkbox
    },
    directives: {
        dropdown: directiveDropdown
    },
    mixins: {
        popover: popoverMixins,
        form: formMixins
    }
}
module.exports = VueAdminBootStrap
