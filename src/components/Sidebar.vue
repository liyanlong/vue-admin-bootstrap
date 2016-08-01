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
        toggleSidebar: function () {
            var status = {
                'full': 'mini',
                'mini': 'full'
            }
            this.type = status[this.type];
        },

        // 折叠服务列表
        toggleNavFold: function (sidebarNav) {
            sidebarNav.product.folded = !sidebarNav.product.folded;
        }
    },
    components: {}
}
</script>
