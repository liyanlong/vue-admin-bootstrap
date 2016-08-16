<template src='./sidebar/index.html' lang='html'></template>
<script>
import {type, navTree} from './sidebar/data.js';
export default {
    data: function () {
        return {
            type: type,
            navTree: navTree
        };
    },
    computed: {
        // 工具栏按钮
        foldIcon: function () {
            var iconEnum = {
                'full': 'fa-ellipsis-h',
                'mini': 'fa-ellipsis-v'
            };
            return iconEnum[this.type];
        }
    },
    created: function () {},
    attached: function () {},
    ready: function () {
        this.$dispatch('toggle-sidebar', this.type);
    },
    methods: {
        // 折叠工具栏
        toggleSidebar () {
            var status = {
                'full': 'mini',
                'mini': 'full'
            };
            var oldType = this.type;
            var newType = status[this.type];
            this.type = newType;
            this.$dispatch('toggle-sidebar', newType, oldType);
        },
        // 返回 sidebar 中 tooltip 的 title
        sidebarTitle (tooltip) {
            return this.type === 'full' ? '' : (tooltip.title || '');
        }
    },
    events: {},
    components: {}
}
</script>
