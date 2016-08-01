<template>
  <div class="hello">
    <h1 v-tooltip tooltip-title="你好!" tooltip-trigger="hover" tooltip-placement="right">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
    data () {
        return {
            // note: changing this line won't causes changes
            // with hot-reload because the reloaded component
            // preserves its current state and we are modifying
            // its initial state.
            msg: 'Hello World!'
        }
    },
    ready () {
        console.log('ready')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
