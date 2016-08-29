<template lang='html'>
    <!-- 工具栏 -->
    <div class="viewFrameWork-sidebar">
        <div class="sidebar-content">
            <div class="sidebar-inner">
                <!-- 折叠按钮 -->
                <div class="sidebar-fold" @click="toggleSidebar">
                    <i  class="fa" :class="foldIcon" aria-hidden="true"></i>
                </div>
                <!-- 折叠按钮 -->
                <!--工具列表-->

                <template v-for="(index,navConfig) in navTree">
                    <div class="sidebar-nav" :class="{ 'main-nav': index == 0 , 'sidebar-nav-fold' : navConfig.product && navConfig.product.folded}">
                        <div class="sidebar-title" v-if="navConfig.product">
                            <div class="sidebar-title-inner"
                            @click="navConfig.product.folded = !navConfig.product.folded"
                            v-tooltip="{
                                'placement': 'right',
                                'title': sidebarTitle(navConfig.product.tooltip)
                            }">
                                <span class="sidebar-title-icon">
                                  <i class="fa fa-caret-down"></i>
                                </span>
                                <span class="sidebar-title-text">{{navConfig.product.name}}</span>
                                <span class="sidebar-manage"
                                @click.stop
                                v-tooltip="{
                                    'placement': 'right',
                                    'title': navConfig.product.tooltip.title
                                }">
                                  <i class="fa fa-cog" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                        <ul class="sidebar-trans">
                            <li v-for="item in navConfig.serviceList" class="nav-item" :class="{'active' : item.active}">
                              <a :href="item.href"
                              v-tooltip="{
                                  'placement': 'right',
                                  'title': sidebarTitle(item.tooltip)
                              }">
                                <div class="nav-icon">
                                  <i class="fa" :class="item.icon"></i>
                                </div>
                                <span class="nav-title">{{item.name}}</span>
                              </a>
                            </li>
                        </ul>
                    </div>
                </template>
                <!--工具列表-->
            </div>
      </div>
    </div>
    <!-- 工具栏 -->

</template>
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
