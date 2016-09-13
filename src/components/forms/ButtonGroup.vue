<template>
  <div :class="{'btn-group':buttons, 'inline': inline}" :data-toggle="buttons&&'buttons'">
    <slot></slot>
  </div>
</template>

<script>
import $ from 'jquery'
import coerceBoolean from '../../utils/coerceBoolean.js'
export default {
    props: {
        value: {
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
        },
        name: {
            type: String,
            default: null
        },
        inline: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        }
    },
    data () {
        return {
            // value 备份
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
            // 单选组件 受到组内其它同名单选按钮制约
            if (this._radioGroup) {
                $.each(this.$children, (index, el) => {
                    el.eval && el.eval();
                });
            }
        }
    }
}
</script>
