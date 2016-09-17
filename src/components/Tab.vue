<template>
  <div  v-el:panel role="tabpanel" class="tab-pane active" :class="[animate]" v-show="show">
    <slot></slot>
  </div>

</template>
<script>
import $ from 'jquery'
import coerceBoolean from '../utils/coerceBoolean.js'
export default {
    props: {
        header: {
            type: String
        },
        disabled: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        animate: {
            type: String,
            default: 'fade'
        },
        href: {
            type: String,
            default: null
        }
    },
    computed: {
        // 单独的tab, 检测是否选中
        active () {
            return this._tabset.show === this
        },

        // 返回 index
        index () {
            return this._tabset.tabs.indexOf(this)
        },

        // 是否显示
        show () {
            this.tabShow = this._tabset && this._tabset.show === this;
            return this.tabShow;
        }
    },
    data () {
        return {
            tabShow: false
        }
    },
    created () {
        // 该tab是否 属于 tabgroup中
        this._ingroup = this.$parent && this.$parent._tabgroup
        let tabset = this
        // 取得 tabset 组件
        while (tabset && tabset._tabset !== true && tabset.$parent) {
            tabset = tabset.$parent
        }

        // 父组件中缺少tabset警告
        if (!tabset._tabset) {
            this._tabset = {}
            console.warn('Warning: "tab" depend on "tabset" to work properly.')
        } else {
            // push tab
            tabset.tabs.push(this)

            // 是否为一个group
            if (!this._ingroup) {
                tabset.headers.push(this)
            } else {
                // 如果选中的为 tabgroup内的 一个tab
                // 并且 tabgroup 还未加入到tabset
                // push该tabgroup
                if (!~tabset.headers.indexOf(this.$parent)) {
                    tabset.headers.push(this.$parent)
                }
            }
            // 设置所属的 tabset
            this._tabset = tabset
        }

        // 如果有 tabgroup , push 到 tabgroup 的 tab
        if (this._ingroup) {
            this.$parent.tabs.push(this)
        }
        if (!this.header) {
            console.warn('Warning: "tab" unset attribute header or header is empty ');
        }
    },
    watch: {
        tabShow (val) {
            if (val) {
                this.animate ? this.$els.panel.offsetWidth && $(this.$els.panel).addClass('in')
                : $(this.$els.panel).addClass('in');
            } else {
                $(this.$els.panel).removeClass('in');
            }
        }
    },
    // 销毁前处理
    beforeDestroy () {
        // 如果销毁的为选中的 tab
        // 重新设置active
        if (this._tabset.active === this.index) {
            this._tabset.active = 0
        }
        // 删除分组的tab
        if (this._ingroup) {
            this.$parent.tabs.$remove(this);
        }
        // 删除tabset实例对应本身的数据
        this._tabset.tabs.$remove(this)
    }
}
</script>
