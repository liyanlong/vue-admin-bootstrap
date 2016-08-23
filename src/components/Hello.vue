<template>
  <modal :show="show" v-on:close-modal="show=false">
      <template slot="title">标题ss</template>
      <template>
        abcaaffssff
      </template>
  </modal>
  <button type="button" name="button" @click="show=true">Toggle</button>
</template>

<script>
import Modal from 'components/modal/Modal'
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
        Modal
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
