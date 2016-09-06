<template>
  <ul class="nav" :class="class" role="tablist">
    <template v-for="t in headers">
      <li v-if="!t._tabgroup" :class="{active:t.active, disabled:t.disabled}" @click.prevent="select(t)">
        <a href="#"><slot name="header">{{{t.header}}}</slot></a>
      </li>
      <dropdown v-else :text="t.header" :class="[{'active': t.active}, 'tab-dropdown']" :disabled="t.disabled">
        <li v-for="tab in t.tabs" :class="{disabled:tab.disabled}"><a href="#" @click.prevent="select(tab)">{{tab.header}}</a></li>
      </dropdown>
    </template>
  </ul>
  <div class="tab-content" v-el:tab-content>
    <slot></slot>
  </div>
</template>

<script>
import $ from 'jquery'
import dropdown from 'components/Dropdown.vue'
export default {
    components: {
        dropdown
    },
    props: {
        'class': {
            type: String,
            default: 'nav-tabs'
        },
        // tab的 header 名称
        active: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            // 显示的tab components
            show: null,
            // 包含tab, tabgroup ，要求有 header 属性
            headers: [],

            // 所有的tab
            tabs: []
        }
    },
    created () {
        this._tabset = true
    },
    ready () {
        // 设置 默认 active 的元素
        this._show(this.active);
    },
    methods: {
        select (tab) {
            if (!tab.disabled) {
                this.active = tab.header
            }
        },
        // 设置 show 的 tab
        _show (header) {
            var isActive = false;
            var tabIndex = -1;
            $.each(this.tabs, (index, tab) => {
                if (tab.header === header) {
                    tabIndex = index;
                    isActive = true;
                    return;
                }
            });

            // 如果 未选中 选中默认的tab
            if (!isActive) {
                tabIndex = 0
            }
            this.show = this.tabs[tabIndex];
        }
    },
    watch: {
        // 设置显示的 tab
        // val 为 header name
        active (val) {
            this._show(val);
        }
    }
}
</script>
