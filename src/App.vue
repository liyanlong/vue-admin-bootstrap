<template>
  <div id="app" class="viewFrameWork-body" :class="sidebarClass">
      <sidebar :type.sync="sidebarType"></sidebar>
      <div class="viewFrameWork-product">
        <hello></hello>
      </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Hello from './components/Hello'

export default {
    components: {
        Sidebar,
        Hello
    },
    computed: {
        sidebarClass: function () {
            return 'viewFrameWork-sidebar-' + this.sidebarType;
        }
    },
    data: function () {
        return {
            sidebarType: 'full'
        };
    }
}
</script>
