<template lang="html">
    <div v-if="$parent._navbar||$parent._topbar" :class="classes" :disabled="disabled" v-dropdown:show="show">
        <a v-if="text" class="dropdown-toggle"
            :class="{
                'topbar-btn': $parent._topbar,
                'topbar-nav-btn': type === 'topbar-nav'
            }"
            @keyup.esc="show = false"
            :disabled="disabled">
        {{ text }}
        <span class="caret"></span>
        </a>
      <slot v-else name="button"></slot>
      <slot v-if="slots['dropdown-menu']" name="dropdown-menu"></slot>
      <ul v-else class="dropdown-menu" :class="{
            'topbar-clearfix': $parent._topbar
          }">
        <slot></slot>
      </ul>
    </div>
    <div v-else class="btn-group" :class="classes" :disabled="disabled" v-dropdown:show="show">
      <button v-if="text" type="button" class="btn btn-{{type||'default'}} dropdown-toggle"
            @keyup.esc="show = false"
            :disabled="disabled">
        {{ text }}
        <span class="caret"></span>
      </button>
      <slot v-else name="button"></slot>
      <slot v-if="slots['dropdown-menu']" name="dropdown-menu"></slot>
      <ul v-else class="dropdown-menu" :class="{
            'pull-right': ~placement.indexOf('right')
          }">
          <slot></slot>
      </ul>
  </div>
</template>

<script>
// topbar-nav topbar-info
import coerceBoolean from 'src/utils/coerceBoolean.js'
export default {
    props: {
        show: {
            twoWay: true,
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        'class': null,
        disabled: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        text: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: null
        },
        placement: {
            coerce: function (val) {
                if (typeof val === 'string') {
                    return val.split(' ');
                }
                return ['left', 'down'];
            }
        }
    },
    data: function () {
        console.log(this.type);
        return {

        };
    },
    computed: {
        classes () {
            return [{
                'topbar-nav': this.type === 'topbar-nav',
                'dropup': ~this.placement.indexOf('top')
            },
            this.class,
            'dropdown']
        },
        slots () {
            return this._slotContents
        }
    },
    ready () {

    },
    created () {

    },
    attached: function () {},
    methods: {},
    components: {}
}
</script>

<style lang="css">
</style>
