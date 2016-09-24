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
import FormGroup from 'components/forms/FormGroup'
import Input from 'components/forms/Input'
import Option from 'components/forms/Option'
import Radio from 'components/forms/Radio'
import Select from 'components/forms/Select'

import ViewFramework from 'components/layouts/ViewFramework'
import Sidebar from 'components/layouts/Sidebar'
import Topbar from 'components/layouts/Topbar'
import TopbarNav from 'components/layouts/TopbarNav'

import popoverMixins from 'components/mixins/popoverMixins.js'
import buttonMixins from 'components/mixins/buttonMixins.js'

import * as utils from 'src/utils/utils.js'
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
        Checkbox,
        FormGroup,
        Input,
        Option,
        Radio,
        Select
    },
    mixins: {
        popover: popoverMixins,
        button: buttonMixins
    },
    utils
}
module.exports = VueAdminBootStrap
