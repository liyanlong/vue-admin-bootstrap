<template lang="html">
    <div class="panel" :class="classes">
      <div class="panel-heading" v-if="header">
          <h3 v-if="title" class="panel-title">{{title}}</h3>
          <template v-else>{{header}}</template>
      </div>
      <template v-else>
          <slot name="panel-heading"></slot>
      </template>
      <div class="panel-body">
          <slot></slot>
      </div>
       <div class="panel-footer" v-if="footer">{{footer}}</div>
       <template v-else>
           <slot name="panel-footer"></slot>
       </template>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'default'
        },
        header: {
            type: String,
            default: 'panel head'

        },
        title: {
            type: String,
            default: null
        }
    },
    computed: {
        classes () {
            return ['panel-' + this.type];
        }
    },
    data () {
        return {
        };
    },
    created () {
        console.log(this.$parent._panelGroup);
    }
};
</script>
