<template lang='html'>
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
            <div v-for="(index,navConfig) in navList" class="sidebar-nav" :class="{
                'main-nav': index == 0 ,
                'sidebar-nav-fold' : navConfig.product && navConfig.product.folded
                }">
                <div class="sidebar-title" v-if="navConfig.product">
                    <tooltip :content="navConfig.product.title" trigger="hover" tooltip-class="admin-sidebar-tooltip" :disabled="type =='full'">
                        <div class="sidebar-title-inner"
                            @click="navConfig.product.folded = !navConfig.product.folded">
                            <span class="sidebar-title-icon">
                              <i class="fa fa-caret-down"></i>
                            </span>
                            <span class="sidebar-title-text">{{navConfig.product.name}}</span>
                            <tooltip  :content="navConfig.product.title" trigger="hover" class="sidebar-manage"  tooltip-class="admin-sidebar-tooltip">
                                <i class="fa fa-cog" aria-hidden="true"></i>
                            </tooltip>
                        </div>
                    </tooltip>
                </div>
                <ul class="sidebar-trans">
                    <li v-for="item in navConfig.serviceList" class="nav-item" :class="{'active' : item.active}">
                        <tooltip :content="item.title" trigger="hover" tooltip-class="admin-sidebar-tooltip" :disabled="type =='full'">
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
            <!--工具列表-->
        </div>
    </div>
</template>
<script>
import Tooltip from 'components/Tooltip'
export default {
    props: {
        'string': {
            type: String,
            default: ''
        },
        type: {
            twoWay: true,
            type: String,
            default: 'full'
        },
        navList: {
            type: Array,
            default: null
        }
    },
    events: {},
    components: {
        Tooltip
    }
}
</script>
