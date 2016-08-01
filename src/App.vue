<template>
  <div id="app" class="viewFrameWork-body" :class="sidebarClass">
      <sidebar :type.sync="sidebarType"></sidebar>
      <div class="viewFrameWork-product">
        content
      </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
    components: {
        Sidebar
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
