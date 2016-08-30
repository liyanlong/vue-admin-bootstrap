<template>
<div class="viewFramwork" id="app">
    <div class="viewFramework-topbar">
        <topbar home-name="文档名称" home-link="#/home" logo-icon="fa fa-desktop">
            <topbar-nav slot="topbar-nav" :nav-list="navList" text="导航"></topbar-nav>
            <div slot="topbar-right">
                <dropdown class="topbar-left topbar-info-item" text="帮助" type="topbar-info">
                    <li class="topbar-info-btn">
                        <a href="#a">列表1</a>
                    </li>
                    <li class="topbar-info-btn">
                        <a href="#b">列表2</a>
                    </li>
                </dropdown>
                <div class="topbar-left topbar-accesskeys topbar-info-item">
                    <a href="#/docs" class="topbar-btn">文档</a>
                </div>
            </div>
        </topbar>
    </div>
    <div class="" :class="['viewFrameWork-body',{
            'viewFrameWork-sidebar-full' : sidebarType === 'full',
            'viewFrameWork-sidebar-mini' : sidebarType === 'mini'
        }]">
        <sidebar :type.sync="sidebarType"></sidebar>
        <div class="viewFrameWork-product">
            <div class="viewFramework-product-body">
                <slot name="view-framework-body">
                    <div class="container">
                        <h1>Hello World</h1>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</div>

</template>
<script>
import Topbar from './components/layout/Topbar'
import TopbarNav from './components/layout/TopbarNav'
import Dropdown from './components/Dropdown'
import Sidebar from './components/Sidebar'
import Hello from './components/Hello'

import topbarData from 'data/topbar.json'
import sidebarData from 'data/sidebar.json'

export default {
    components: {
        Topbar,
        TopbarNav,
        Dropdown,
        Sidebar,
        Hello
    },
    data () {
        return {
            sidebarType: sidebarData.type,
            navList: topbarData.navList
        };
    },
    methods: {
        handlerClass (type) {
            this.sidebarType = type;
        }
    }
}
</script>
