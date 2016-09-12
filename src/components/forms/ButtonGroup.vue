<template>
  <div :class="{'btn-group':buttons}" :data-toggle="buttons&&'buttons'">
    <slot></slot>
  </div>
</template>

<script>
import $ from 'jquery'
import coerceBoolean from '../../utils/coerceBoolean.js'
export default {
    props: {
        value: {
            twoWay: true,
            default: null
        },
        buttons: {
            type: Boolean,
            coerce: coerceBoolean,
            default: true
        },
        type: {
            type: String,
            default: 'default'
        }
    },
    data () {
        return {
            checked: null
        };
    },
    created () {
        this._btnGroup = true
    },
    ready () {
        this.$set('checked', this.value);
    },
    watch: {
        checked (val) {
            this.$set('value', val);
        },
        value () {
            if (this._radioGroup) {
                $.each(this.$children, (index, el) => {
                    el.eval && el.eval();
                });
            }
        }
    }
}
</script>
