<template lang="html">
    <div v-if="buttonStyle"
    :class="['btn',btnType,{active:checked,disabled:disabled,readonly:readonly}]"
    @click.prevent="toggle">
    <input v-el:input type="checkbox" autocomplete="off"
         v-show="!readonly"
         :checked="active"
         :value="value"
         :name="inputName"
         :readonly="readonly"
         :disabled="disabled"
       />
       <slot></slot>
    </div>
    <div v-else :class="['checkbox',typeColor,{active:active,disabled:disabled,readonly:readonly,inline:inline}]">
        <label clas="open" @click.prevent="toggle">
            <input v-el:input type="checkbox" autocomplete="off"
            :name="inputName"
            :disabled="disaled"
            :readonly="readonly"
            :value="value"
            :checked="active" />
            <span class="icon dropdown-toggle" :class="[btnType,{bg:typeColor==='default'}]"></span>
            <span v-if="active && typeColor === 'default'" class="icon"></span>
            <slot></slot>
        </label>
    </div>

</template>

<script>
import buttonMixins from 'components/mixins/buttonMixins.js'
export default {
    mixins: [buttonMixins],
    computed: {
        btnType () {
            return 'btn-' + this.typeColor;
        },
        typeColor () {
            return (this.type || (this.$parent && this.$parent.type)) || 'default'
        },
        active () {
            return this.group ? ~this.$parent.value.indexOf(this.value) : this.checked === this.value;
        },
        buttonStyle () {
            return this.button || this.group && this.$parent.buttons;
        },
        group () {
            return this.$parent && this.$parent._checkboxGroup;
        },
        inputName () {
            return this.name || this.group && this.$parent.name;
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
