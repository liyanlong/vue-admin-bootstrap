<template>
  <div :class="{'btn-group':buttons}" :data-toggle="buttons&&'buttons'">
    <slot></slot>
  </div>
</template>

<script>
import coerceBoolean from '../../utils/coerceBoolean.js'
export default {
    props: {
        value: {
            twoWay: true,
            default: []
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
            checked: []
        };
    },
    created () {
        this._btnGroup = true
        this.$set('checked', this.value);
    },
    methods: {
    },
    watch: {
        checked: {
            handler (val) {
                this.$set('value', val);
            }
        }
    }
}
</script>
