<template>
  <div id="wrapper">
    <docs-navbar></docs-navbar>
    <div class="bs-docs-header">
      <div class="container">
        <h1>VueAdminBootStrap</h1>
        <p>基于Bootstrap , jQuery 库为基础, 以 Vue.js 为框架 开发组件</p>
        <p>不含 bootstrap.js</p>
        <br>
        <p><a class="btn btn-outline-inverse btn-lg" href="https://github.com/liylanlong/vue-admin-bootstrap">Code on GitHub</a></p>
      </div>
    </div>
    <container>
            <div v-el:sections class="col-md-9">
                <modal-docs></modal-docs>
                <dropdown-docs></dropdown-docs>
                <popover-docs></popover-docs>
                <tooltip-docs></tooltip-docs>
                <tabs-docs></tabs-docs>
                <topbar-docs></topbar-docs>
                <sidebar-docs></sidebar-docs>
            </div>
            <div class="col-md-3">
                <affix-sidebar></affix-sidebar>
            </div>
    </container>
  </div>
  <footer class="bs-docs-footer">
    <div class="container">
      <p>组件参考了vue-strap, bootstrap的源码. 根据自身业务进行了筛选.</p>
      <p>Designed and built by <a href="https://github.com/liyanlong/">liyanlong</a>.</p>
    </div>
  </footer>
</template>

<script>
import container from './layout/container'
import docsNavbar from './layout/docsNavbar'
import affixSidebar from './layout/affixSidebar'

// docs
import modalDocs from './example/modalDocs'
import dropdownDocs from './example/dropdownDocs'
import popoverDocs from './example/popoverDocs'
import tooltipDocs from './example/tooltipDocs'
import tabsDocs from './example/tabsDocs'
import topbarDocs from './example/topbarDocs'
import sidebarDocs from './example/sidebarDocs'

export default {
    components: {
        container,
        docsNavbar,
        affixSidebar,
        modalDocs,
        popoverDocs,
        dropdownDocs,
        tooltipDocs,
        tabsDocs,
        topbarDocs,
        sidebarDocs
    }
}
</script>
