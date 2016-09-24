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
               <span v-if="clearButton && values.length" class="close" @click.stop="clear()">&times;</span>
               <span class="caret"></span>
           </template>
           <ul slot="dropdown-menu"  class="dropdown-menu">
               <template v-if="options.length">
                   <li v-if="canSearch" class="bs-searchbox">
                        <input type="text"
                        class="form-control"
                        autocomplete="off"
                        v-el:search
                        v-model="searchValue"
                        :placeholder="searchText || text.search"
                        @keyup.esc="show = false"
                        @click.stop="true"/>
                        <span v-show="searchValue" class="close" @click.stop="clearSearch">&times;</span>
                    </li>
                 <li v-if="required && !clearButton" @mousedown.prevent="clear() && blur()"><a>{{ placeholder || text.notSelected }}</a></li>
                 <li v-for="option in options | filterBy searchValue in 'label'" :id="option.value||option">
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
import $ from 'jquery'
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
            default: function () {
                return [];
            }
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
        url: {
            type: String,
            default: null
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
        },
        search: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        minSearch: {
            type: Number,
            coerce: coerceNumber,
            default: 0
        },
        searchText: {
            type: String,
            default: null
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
                        foundItems.push(option.label || option);
                    }
                }
            }
            return foundItems.join(', ')
        },
        hasParent () {
            return this.parent instanceof Array ? this.parent.length : this.parent;
        },

        // 下拉选项框 未选中 或者 parent未选中
        showPlaceholder () {
            return (this.values.length === 0 || !this.hasParent) ? (this.placeholder || this.text.notSelected) : null
        },
        text () {
            return translations(this.lang)
        },
        values () {
            return this.value instanceof Array ? this.value : this.value !== null && this.value !== undefined ? [this.value] : []
        },
        canSearch () {
            return this.search && this.options.length > this.minSearch;
        }
    },
    data () {
        return {
            show: false,
            loading: false,
            valid: null,
            searchValue: null
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
        },
        clearSearch () {
            this.searchValue = null;
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
            // 基本类型转为数组
            if (this.multiple && !(this.value instanceof Array)) {
                this.value = (this.value === null || this.value === undefined) ? [] : [this.value]
            }

            // 数组转基本类型
            if (!this.multiple && this.value instanceof Array) {
                this.value = this.value.length ? this.value.pop() : null
            }

            // 这里为多选提供检查，从队列头部取 limit 作为value
            if (this.values.length > this.limit) {
                this.value = this.value.slice(0, this.limit)
            }
        },
        select (value) {
            // 多选的情况
            if (this.value instanceof Array) {
                if (~this.value.indexOf(value)) {
                    this.value.$remove(value)
                } else {
                    // 未超过选择限制
                    if (this.values.length < this.limit) {
                        this.value.push(value)
                    }
                }
                if (this.closeOnSelect) {
                    this.toggle()
                }
            } else {
                this.value = value
                this.toggle()
            }
        },
        validate () {
            return !this.required ? true : this.value instanceof Array ? this.value.length > 0 : this.value !== null
        },
        update () {
            if (!this.url) {
                return;
            }
            let key = this.url;
            if (this._caches[key]) {
                let options = [];
                for (let item of this._caches[key]) {
                    item.value !== undefined && item.label !== undefined && options.push(item);
                }
                this.options = options;
                return;
            }
            this.loading = true;

            // 远程加载
            $.getJSON(this.url).then((data) => {
                let options = [];
                this._caches[key] = data;
                for (let item of data) {
                    item.value !== undefined && item.label !== undefined && options.push(item);
                }
                this.options = options;
            }).fail(() => {
                this.options = [];
            }).done(() => {
                this.loading = false;
            });
        }
    },
    watch: {
        valid (val, old) {
            if (val === old) { return }
            // 父组件 form-group 检测validator
            this._parent && this._parent.validate()
        },
        value (val) {
            // 重新检查value
            this.checkValue()
            this.valid = this.validate()
        },
        url () {
            this.update();
        },
        parent () {
            this.clear();
            this.blur();
        }
    },
    components: {
        Dropdown
    },
    created () {
        this._select = true;
        this._caches = {};

        // 初始化
        if (this.options === undefined || this.options === null) {
            this.options = [];
        }
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
        if (this.url) {
            this.update()
        }
        let parent = this.$parent;
        while (parent && !parent._formGroup) {
            parent = parent.$parent;
        }
        if (parent && parent._formGroup) {
            parent.children.push(this);
            this._parent = parent;
        }
    },
    beforeDestroy () {
        // 存在 form-group
        if (this._parent) {
            this._parent.children.$remove(this)
        }
    }
}
</script>
