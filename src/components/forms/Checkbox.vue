<template lang="html">
    <div v-if="buttonStyle"
    :class="['btn',btnType,{active:checked,disabled:disabled,readonly:readonly}]"
    @click.prevent="toggle">
    <input v-el:input type="checkbox" autocomplete="off"
         v-show="!readonly"
         :checked="active"
         :value="value"
         :name="name"
         :readonly="readonly"
         :disabled="disabled"
       />
       <slot></slot>
    </div>
    <div v-else :class="['checkbox',typeColor,{active:active,disabled:disabled,readonly:readonly}]"  @click.prevent="toggle">
        <label clas="open">
            <input v-el:input type="checkbox" autocomplete="off"
            :name="name"
            :disabled="disaled"
            :readonly="readonly"
            :value="value"
            :checked="active" />
            <span class="icon dropdown-toggle" :class="[btnType,{bg:typeColor==='default'}]"></span>
            <span v-if="active && typeColor==='default'" class="icon"></span>
            <slot></slot>
        </label>
    </div>

</template>

<script>
import coerceBoolean from 'src/utils/coerceBoolean.js'
export default {
    props: {
        name: {
            type: String,
            default: null
        },
        checked: {
            twoWay: true,
            default: null
        },
        disabled: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        readonly: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        button: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        value: {
            default: true
        },
        type: {
            type: String,
            default: ''
        }
    },
    computed: {
        btnType () {
            return 'btn-' + this.typeColor;
        },
        typeColor () {
            return (this.type || (this.$parent && this.$parent.type)) || 'default'
        },
        active () {
            return this.checked === this.value;
        },
        buttonStyle () {
            return this.button || this.group && this.$parent.buttons;
        },
        group () {
            return this.$parent && this.$parent._checkboxGroup;
        }
    },
    created () {
        const parent = this.$parent
        if (typeof this.value === 'boolean') {
            return;
        }
        if (parent && parent._btnGroup && !parent._radioGroup) {
            parent._checkboxGroup = true

            // 初始化 parent value
            if (!(parent.value instanceof Array)) {
                parent.value = [];
            }
        }
    },
    ready () {
        if (!this.$parent._checkboxGroup || typeof this.value === 'boolean') {
            return
        }
        if (this.$parent.value.length) {
            // 是否选中
            this.checked = ~this.$parent.value.indexOf(this.value) ? this.value : null
        }
    },
    methods: {
        focus () {
            this.$els.input.focus()
        },
        toggle () {
            // 如果是禁用状态， 点击无效
            if (!this.disabled) {
                // 设置 focus
                this.focus()
                // 如果不为 readonly 属性
                if (!this.readonly) {
                    // 赋值
                    this.checked = this.checked === this.value ? null : this.value
                }
            }
            return false
        },
        push (val) {
            this.$parent.value.push(val);
        }
    },
    watch: {
        checked (val) {
            if (typeof this.value !== 'boolean' && this.group) {
                let index = this.$parent.value.indexOf(this.value);
                // 选中了按钮
                // 但是button-group 不存在 val
                if (val && !~index) {
                    this.$parent.checked.push(this.value);
                }
                // 取消选中
                // 但是button-group 存在 val
                if (!val && ~index) {
                    this.$parent.checked.$remove(this.value);
                }
            }
        }
    }
}
</script>

<style lang="less">
.checkbox { position: relative; }
.checkbox > label {
    line-height: initial;
}
.checkbox > label > input {
  box-sizing: border-box;
  position: absolute;
  z-index: -1;
  padding: 0;
  opacity: 0;
  margin: 0;
}
.checkbox > label > .icon {
  position: absolute;
  top: .2rem;
  left: 0;
  display: block;
  width: 1.4rem;
  height: 1.4rem;
  line-height:1rem;
  text-align: center;
  user-select: none;
  border-radius: .35rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.checkbox:not(.active) > label > .icon {
  background-color: #ddd;
  border: 1px solid #bbb;
}
.checkbox > label > input:focus ~ .icon {
  outline: 0;
  border: 1px solid #66afe9;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
}
.checkbox.active > label > .icon {
  background-size: 1rem 1rem;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);
}
.checkbox.active .btn-default { filter: brightness(75%); }
.checkbox.disabled > label > .icon,
.checkbox.readonly > label > .icon,
.btn.readonly {
  filter: alpha(opacity=65);
  box-shadow: none;
  opacity: .65;
}
label.btn > input[type=checkbox] {
  position: absolute;
  clip: rect(0,0,0,0);
  pointer-events: none;
}
.inline > .checkbox{
    display: inline-block;
}
</style>
