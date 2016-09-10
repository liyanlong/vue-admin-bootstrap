<template lang="html">
    <div class="panel" :class="classes">
      <div class="panel-heading">
          <h3 class="panel-title">
              <a v-if="$parent._panelGroup" href="javascript:void(0)" @click="select(this)">{{title}}</a>
              <template v-else>{{title}}</template>
          </h3>
      </div>
      <div v-if="$parent._panelGroup" class="panel-collapse" :class="{
          'collapse': !transitioning,
          'collapsing': transitioning,
          'in': complete
          }" v-el:panel-container>
          <div class="panel-body" v-el:panel-body>
              <slot></slot>
          </div>
      </div>
      <template v-else>
          <div class="panel-body" v-el:panel-body>
              <slot></slot>
          </div>
      </template>

      <div v-if="slots['panel-footer']" class="panel-footer">
          <slot name="panel-footer"></slot>
      </div>
      <div v-if="footer" class="panel-footer">
          {{footer}}
      </div>
   </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'default'
        },
        title: {
            type: String,
            default: null
        },
        id: {
            type: String,
            default: null
        }
    },
    computed: {
        classes () {
            return ['panel-' + this.type];
        },
        complete () {
            return this._group.show === this && !this.transitioning;
        },
        slots () {
            return this._slotContents || {};
        }
    },
    data () {
        return {
            transitioning: false
        };
    },
    created () {
        this._ingroup = this.$parent && this.$parent._panelGroup
        let group = this.$parent && this.$parent._panelGroup ? this.$parent : null
        if (group) {
            this._group = this.$parent;
            this._group.panels.push(this);
        }
    },
    ready () {
    },
    methods: {
        select (panel) {
            // 正在进行变化中
            if (this._group.transitioning) {
                return;
            }
            this._group.show = this._group.show === panel ? null : panel;
        }
    }
};
</script>
