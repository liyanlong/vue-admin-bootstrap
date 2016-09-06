<template>
    <slot></slot>
</template>

<script>
import coerceBoolean from '../utils/coerceBoolean.js'
export default {
    props: {
        disabled: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        // 分组名称
        header: {
            type: String
        }
    },
    data () {
        return {
            // 内含有多少 tab
            tabs: [],
            // 组显示
            show: false
        }
    },
    computed: {
        // 组里的tab是否被选中
        // 实现tab的钩子函数
        active () {
            // this._tabset.show 显示的tab
            return ~this.tabs.indexOf(this._tabset.show)
        }
    },
    // 数据已经绑定起来了, 可以执行computed方法
    created () {
        // 标志位 tabgroup 组件
        this._tabgroup = true
        let tabset = (this.$parent && this.$parent._tabset === true) ? this.$parent : {}

        // 不允许嵌套分组
        if (this.$parent && this.$parent._tabgroup) {
            console.error('Can\'t nest tabgroups.')
        }
        while (tabset && !tabset._tabset && tabset.$parent) {
            tabset = tabset.$parent
        }

        // 警告不能单独使用tabgroup
        if (!tabset._tabset) {
            this._tabset = {}
            this.show = true
            console.warn('Warning: tabgroup depend on tabset to work properly.')
        } else {
            this._tabset = tabset
        }
        if (!this.header) {
            console.warn('Warning: "tab-group" unset attribute header or header is empty ');
        }
    }
}
</script>
