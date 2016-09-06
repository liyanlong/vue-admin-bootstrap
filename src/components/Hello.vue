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
          <popover title="特别差"  placement="right" trigger="click">
              popover 弹窗
              <form slot="content">
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

      <br>
      <br>
      <ul class="nav nav-tabs">
        <li><a href="/core/domain/list">全部域名</a></li>
        <li class="active"><a href="/core/domain/needpaydomainlist">急需续费域名</a></li>
        <li><a href="/core/domain/redeemdomainlist">急需赎回域名</a></li>
        <li><a href="/core/domain/noauditdomainlist">未实名认证域名</a></li>
        <li><a href="/core/domain/getin">转入域名</a></li>

        <li><a href="/core/domain/pregalist">预登记域名</a></li>
    </ul>
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
