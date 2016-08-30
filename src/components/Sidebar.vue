<template lang='html'>
    <!-- 工具栏 -->
    <div class="viewFrameWork-sidebar">
        <div class="sidebar-content">
            <div class="sidebar-inner">
                <!-- 折叠按钮 -->
                <div class="sidebar-fold" @click="type = (type === 'full' ? 'mini' : 'full')">
                    <i  class="fa" :class="{
                        'fa-ellipsis-h': type === 'full',
                        'fa-ellipsis-v': type === 'mini'
                        }" aria-hidden="true"></i>
                </div>
                <!-- 折叠按钮 -->

                <!--工具列表-->
                <template v-for="(index,navConfig) in navTree">
                    <div class="sidebar-nav" :class="{
                        'main-nav': index == 0 ,
                        'sidebar-nav-fold' : navConfig.product && navConfig.product.folded
                        }">
                        <div class="sidebar-title" v-if="navConfig.product">
                            <tooltip :content="navConfig.product.title" trigger="hover" selector="body" class="admin-sidebar-tooltip" :disabled="type =='full'">
                                <div class="sidebar-title-inner"
                                    @click="navConfig.product.folded = !navConfig.product.folded">
                                    <span class="sidebar-title-icon">
                                      <i class="fa fa-caret-down"></i>
                                    </span>
                                    <span class="sidebar-title-text">{{navConfig.product.name}}</span>
                                    <span class="sidebar-manage">
                                        <tooltip  :content="navConfig.product.title" trigger="hover" selector="body" class="admin-sidebar-tooltip">
                                            <i class="fa fa-cog" aria-hidden="true"></i>
                                        </tooltip>
                                    </span>
                                </div>
                            </tooltip>
                        </div>
                        <ul class="sidebar-trans">
                            <li v-for="item in navConfig.serviceList" class="nav-item" :class="{'active' : item.active}">
                                <tooltip :content="item.title" trigger="hover" selector="body" class="admin-sidebar-tooltip" :disabled="type =='full'">
                                    <a :href="item.href">
                                      <div class="nav-icon">
                                        <i class="fa" :class="item.icon"></i>
                                      </div>
                                      <span class="nav-title">{{item.name}}</span>
                                    </a>
                                </tooltip>
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
import Tooltip from 'components/Tooltip'
import data from 'data/sidebar.json'

export default {
    props: {
        type: {
            twoWay: true,
            type: String,
            default: 'full'
        }
    },
    data: function () {
        return {
            navTree: data.navTree
        };
    },
    created: function () {},
    attached: function () {},
    methods: {
        // 返回 sidebar 中 tooltip 的 title
        sidebarTitle (tooltip) {
            return this.type === 'full' ? '' : (tooltip.title || '');
        }
    },
    events: {},
    components: {
        Tooltip
    }
}
</script>
