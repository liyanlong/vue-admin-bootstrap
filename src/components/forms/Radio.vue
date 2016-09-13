<template>
  <label v-if="buttonStyle" :class="['btn', btnType,{active:active,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
    <input type="radio" autocomplete="off"
      v-el:input
      v-show="!readonly"
      :checked="active"
      :value="value"
      :name="inputName"
      :readonly="readonly"
      :disabled="disabled"
    />
    <slot></slot>
  </label>
  <div v-else :class="['radio',typeColor,{active:active,disabled:disabled,readonly:readonly,inline:inline}]" @click.prevent="toggle">
    <label class="open">
      <input type="radio" autocomplete="off"
        v-el:input
        :checked="active"
        :value="value"
        :name="inputName"
        :readonly="readonly"
        :disabled="disabled"
      />
      <span class="icon dropdown-toggle" :class="[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]"></span>
      <span v-if="active&&typeColor==='default'" class="icon"></span>
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
            return this.group ? this.$parent.value === this.value : this.value === this.checked;
        },
        buttonStyle () {
            return this.button || (this.group && this.$parent.buttons);
        },
        group () {
            return this.$parent && this.$parent._radioGroup;
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
        if (parent && parent._btnGroup && !parent._checkboxGroup) {
            parent._radioGroup = true;
        }
    },
    ready () {
        if (!this.$parent._radioGroup || typeof this.value === 'boolean') {
            return;
        }
        if (this.$parent.value) {
            // 是否选中
            this.checked = this.$parent.value === this.value ? this.value : null
        } else if (this.checked) {
            this.$parent.value = this.value
        }
    },
    methods: {
        eval () {
            console.log(this.$parent.value, this.value);
            if (this.$parent.value !== this.value) {
                this.checked = null;
            }
        },
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
                    this.checked = this.value
                }
            }
            return false
        }
    },
    watch: {
        checked (val) {
            if (typeof this.value !== 'boolean' && this.group) {
                if (val) {
                    this.$parent.value = val;
                }
            }
        }
    }
}
</script>
