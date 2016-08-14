<template>
  <div class="hello">
    <h1 v-tooltip="{ title: msg, placement:'top',container:'body'}" :tooltip-show="show">
        {{ msg }}
    </h1>
    <button type="button" name="button" @click="toggle">开关</button>
  </div>
</template>

<script>
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
        'tooltip-show' () {
            console.log(arguments);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
