<template>
  <modal :show.sync="show" large  backdrop-static="false">
      <template slot="title">标题ss</template>
      <template>
        abcaaffssff
      </template>
  </modal>
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
  </div>
  <button type="button" name="button" @click="show=true">Toggle</button>
  <br>
  <div class="dropdown">
  <button id="dLabel" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown trigger
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dLabel">
      <li><a href="#/go">跳转</a></li>
  </ul>
</div>
</template>

<script>
import Modal from 'components/Modal'
import Dropdown from 'components/Dropdown'
import $ from 'jquery'
$(function () {
    $('#dLabel').dropdown().parent().on('hide.bs.dropdown', function (e) {
        console.log(e.isDefaultPrevented());
        // e.preventDefault();
    });
});
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
        Dropdown
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
