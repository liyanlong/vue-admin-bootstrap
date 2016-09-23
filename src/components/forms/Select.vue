<template>
<div :class="{'btn-group btn-group-justified': justified, 'btn-select': !justified, 'form-group': _parent && _parent._formGroup}">
    <slot name="select-before"></slot>
        <select
            v-el:sel
            v-model="value"
            v-show="show"
            :name="name"
            class="secret"
            :multiple="multiple"
            :required="required"
            :readonly="readonly"
            :disabled="disabled">
           <option v-if="required" value=""></option>
           <option v-for="option in options" :value="option.value||option">{{ option.label || option }}</option>
       </select>
       <dropdown :readonly="readonly" :disabled="disabled || !hasParent" :show.sync="show">
           <template slot="dropdown-text">
               <span class="btn-content">{{ loading ? text.loading : showPlaceholder || selectedItems }}</span>
               <span class="caret"></span>
               <span v-if="clearButton && values.length" class="close" @click.stop="clear()">&times;</span>
           </template>
           <ul slot="dropdown-menu"  class="dropdown-menu">
               <template v-if="options.length">
                 <li v-if="required && !clearButton" @mousedown.prevent="clear() && blur()"><a>{{ placeholder || text.notSelected }}</a></li>
                 <li v-for="option in options | filterBy searchValue" :id="option.value||option">
                   <a @mousedown.prevent="select(option.value||option)" @click.stop="true">
                       <span>{{{option.label||option}}}</span>
                       <span class="glyphicon glyphicon-ok check-mark" v-if="isSelected(option.value || option)"></span>
                   </a>
                 </li>
               </template>
               <slot></slot>
           </ul>
       </dropdown>
    <slot name="select-after"></slot>
</div>
</template>
<script>
import translations from 'src/utils/translations'
import coerceBoolean from 'src/utils/coerceBoolean'
import coerceNumber from 'src/utils/coerceNumber'
import Dropdown from 'components/Dropdown'
export default {
    props: {
        name: {
            type: String,
            default: null
        },
        value: {
            twoWay: true
        },
        options: {
            type: Array,
            default () { return [] }
        },
        required: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
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
        placeholder: {
            type: String,
            default: null
        },
        justified: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        multiple: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        limit: {
            type: Number,
            coerce: coerceNumber,
            default: 1
        },
        parent: {
            default: true
        },
        lang: {
            default: navigator.language
        },
        closeOnSelect: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        clearButton: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        }
    },
    computed: {
        selectedItems () {
            if (this.options.length === 0) { return '' }
            let foundItems = []
            for (var item of this.values) {
                if (~['number', 'string'].indexOf(typeof item)) {
                    let option = null;

                    // 如果列表中存在与item值一样的选项
                    // 加入选中集合中
                    if (this.options.some(o => {
                        if (o instanceof Object ? o.value === item : o === item) {
                            option = o;
                            return true
                        }
                    })) {
                        console.log(option);
                        foundItems.push(option.label || option);
                    }
                }
            }
            return foundItems.join(', ')
        },
        hasParent () {
            return this.parent instanceof Array ? this.parent.length : this.parent;
        },
        showPlaceholder () {
            console.log(this.values, !this.hasParent);
            return (this.values.length === 0 || !this.hasParent) ? (this.placeholder || this.text.notSelected) : null
        },
        text () {
            return translations(this.lang)
        },
        values () {
            return this.value instanceof Array ? this.value : this.value !== null && this.value !== undefined ? [this.value] : []
        }
    },
    data () {
        return {
            show: false,
            loading: false,
            valid: null
        }
    },
    methods: {
        toggle () {
            this.show = !this.show;
        },
        clear () {
            if (this.disabled || this.readonly) {
                return;
            }
            this.value = this.value instanceof Array ? [] : null;
            // this.toggle()
        },
        blur () {
            this.show = false
        },
        isSelected (v) {
            return this.values.indexOf(v) > -1;
        },

        // 设置 value 的值
        // 根据单选 和 多选的情况 进行过滤
        checkValue () {
            if (this.multiple && !(this.value instanceof Array)) {
                this.value = (this.value === null || this.value === undefined) ? [] : [this.value]
            }
            if (!this.multiple && this.value instanceof Array) {
                this.value = this.value.length ? this.value.pop() : null
            }
            if (this.values.length > this.limit) {
                this.value = this.value.slice(0, this.limit)
            }
        },
        select (v) {
            // 多选的情况
            if (this.value instanceof Array) {
                if (~this.value.indexOf(v)) {
                    this.value.$remove(v)
                } else {
                    // 未超过选择限制
                    if (this.values.length < this.limit) {
                        this.value.push(v)
                    }
                }
                if (this.closeOnSelect) {
                    this.toggle()
                }
            } else {
                this.value = v
                this.toggle()
            }
        },
        validate () {
            return !this.required ? true : this.value instanceof Array ? this.value.length > 0 : this.value !== null
        }
    },
    watch: {
        valid (val, old) {
            if (val === old) { return }
            // 父组件 form-group 检测validator
            this._parent && this._parent.validate()
        },
        value (val) {
            // 多选的情况, 超过了数字
            if (this.value instanceof Array && val.length > this.limit) {

            }
            this.checkValue()
            this.valid = this.validate()
        }
    },
    components: {
        Dropdown
    },
    created () {
        this._select = true;

        // 未定义 value 或者 非父节点
        if (this.value === undefined || !this.parent) {
            this.value = null
        }

        // 单选情况
        if (!this.multiple && this.value instanceof Array) {
            this.value = this.value.shift()
        }
        if (this.limit < 1) {
            this.limit = 1
        }

        // TODO: 加入form-group
        let parent = this.$parent;
        while (parent && !parent._formGroup) {
            parent = parent.$parent;
        }
        if (parent && parent._formGroup) {
            parent.children.push(this);
            this._parent = parent;
        }
    },
    ready () {
    },
    beforeDestroy () {
        // 存在 form-group
        if (this._parent) {
            this._parent.children.$remove(this)
        }
    }
}
</script>

<style lang="less">
.btn-select {
    display: inline-block;
    .caret{
        float: right;
        margin-top: 9px;
        margin-left: 5px;
    }
    .close{

    }
}
.btn-select>.btn-group>.dropdown-menu>li { position:relative; }
.btn-select>.btn-group>.dropdown-menu>li>a { cursor:pointer; }
.bs-searchbox {
  position: relative;
  margin: 4px 8px;
}
.bs-searchbox .close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
}
button>.close { margin-left: 5px;}
.notify.out { position: relative; }
.notify.in,
.notify>div {
  position: absolute;
  width: 96%;
  margin: 0 2%;
  min-height: 26px;
  padding: 3px 5px;
  background: #f5f5f5;
  border: 1px solid #e3e3e3;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  pointer-events: none;
}
.notify>div {
  top: 5px;
  z-index: 1;
}
.notify.in {
  opacity: .9;
  bottom: 5px;
}
.btn-group.btn-group-justified .dropdown-menu { width: 100%; }

.secret {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.bs-searchbox input:focus,
.secret:focus + button {
  outline: 0;
  border-color: #66afe9 !important;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
}
</style>
