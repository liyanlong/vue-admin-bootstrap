<template>
  <div id="wrapper">
    <docs-navbar></docs-navbar>
    <div class="bs-docs-header">
      <div class="container">
        <h1>VueAdminBootStrap</h1>
        <p>基于Bootstrap , jQuery 库为基础, 以<a target="_blank" href="http://vuejs.org/" >Vue.js</a> 开发组件</p>
        <br>
        <p><a class="btn btn-outline-inverse btn-lg" href="https://github.com/liylanlong/vue-admin-bootstrap">Code on GitHub</a></p>
      </div>
    </div>
    <container>
            <div v-el:sections class="col-md-9">
                <modal-docs></modal-docs>
            </div>
            <div class="col-md-3">
                <affix-sidebar></affix-sidebar>
            </div>
    </container>
  </div>
  <footer class="bs-docs-footer">
    <div class="container">
      <p>Designed and built by <a href="https://github.com/liyanlong/">liyanlong</a>.</p>
    </div>
  </footer>
</template>

<script>
import container from './layout/container'
import docsNavbar from './layout/docsNavbar'
import affixSidebar from './layout/affixSidebar'

// doc
import modalDocs from './example/modalDocs'

export default {
    components: {
        container,
        docsNavbar,
        affixSidebar,
        modalDocs
    }
}
</script>
