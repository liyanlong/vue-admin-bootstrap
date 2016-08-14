<template src='./sidebar/index.html' lang='html'></template>
<script>
import {navTree} from './sidebar/data.js';
console.log(navTree);
export default {
    props: ['type'],
    data: function () {
        return {
            navTree: navTree
        };
    },
    computed: {
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
    ready: function () {},
    methods: {
        // 折叠工具栏
        toggleSidebar () {
            var status = {
                'full': 'mini',
                'mini': 'full'
            }
            this.type = status[this.type];
        },
        // 返回tooltip 的 title
        sidebarTitle (tooltip) {
            return this.type === 'full' ? '' : (tooltip.title || '');
        }
    },
    components: {}
}
</script>
