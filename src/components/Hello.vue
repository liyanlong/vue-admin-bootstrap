<template>
  <div class="container">
      <h1>Hello World</h1>
      <dropdown class="" text="帮助" placement="top">
          <li>
              <a href="#ASDS">列表1</a>
          </li>
          <li>
              <a href="#AA">列表1</a>
          </li>
      </dropdown>
      <br>
      <br>
      <button class="btn btn-default"><popover title="特别差" content="是的" placement="top" trigger="focus">popover 弹窗</popover></button>
      <br>
  </div>
</template>

<script>
import Modal from 'components/Modal'
import Dropdown from 'components/Dropdown'
import Popover from 'components/Popover'

export default {
    data () {
        return {
            show: false,
            msg: 'Hello World!'
        }
    },
    methods: {
        toggle () {
            this.msg = '你好';
        }
    },
    events: {
    },
    components: {
        Modal,
        Dropdown,
        Popover
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
