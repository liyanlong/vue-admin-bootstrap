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
          <li class="topbar-info-btn">
              <a href="#">列表1</a>
          </li>
          <li class="topbar-info-btn">
              <a href="#">列表1</a>
          </li>
      </dropdown>
      <br>
      <br>
      <button class="btn btn-default">
          <popover title="特别差"  placement="left" trigger="click">
              popover 弹窗
              <form slot="popover-content">
                    <input type="text" name="name" value="" />
                    <br>
                    <input type="text" name="name" value="" />
                    <br>
                    <input type="button" name="button" value="提交"/>
              </form>
          </popover>
      </button>

      <br>
      <br>
      <modal :show.sync="modalShow"></modal>
      <button type="button" class="btn btn-default" @click="modalShow = true">打开modal</button>
      <br>
      <br>
      <button type="button" class="btn btn-default">
          <tooltip content="hello world"  trigger="hover">
              移动此处打开tooltip
          </tooltip>
      </button>
  </div>
</template>

<script>
import Modal from 'components/Modal'
import Dropdown from 'components/Dropdown'
import Popover from 'components/Popover'
import Tooltip from 'components/Tooltip'

export default {
    data () {
        return {
            modalShow: false,
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
        Popover,
        Tooltip
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
