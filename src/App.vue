<template>
<div class="viewFramwork" id="app">
    <div class="viewFramework-topbar">
        <topbar></topbar>
    </div>
    <div class="viewFrameWork-body" :class="sidebarClass">
        <sidebar :type.sync="sidebarType"></sidebar>
        <div class="viewFrameWork-product">
            <hello></hello>
        </div>
    </div>
</div>
</template>
<script>
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Hello from './components/Hello'

export default {
    components: {
        Topbar,
        Sidebar,
        Hello
    },
    computed: {
        sidebarClass: function () {
            return 'viewFrameWork-sidebar-' + this.sidebarType;
        }
    },
    data () {
        return {
            sidebarType: 'full'
        };
    }
}

</script>
