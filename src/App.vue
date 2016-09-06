<template>
    <view-framework :sidebar-type="sidebarType">
        <topbar slot="view-framework-topbar" home-name="文档名称" home-link="#/home" logo-icon="fa fa-desktop">
            <topbar-nav slot="topbar-nav" :nav-list="topbarNavList" text="导航"></topbar-nav>
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
        <sidebar slot="view-framework-sidebar" :type.sync="sidebarType" :nav-list="sidebarNavList"></sidebar>
        <div slot="view-framework-product">
            <hello></hello>
        </div>
    </view-framework>
</template>
<script>
import ViewFramework from 'components/layouts/ViewFrameWork'
import Topbar from './components/layouts/Topbar'
import TopbarNav from './components/layouts/TopbarNav'
import Dropdown from './components/Dropdown'
import Sidebar from 'components/layouts/Sidebar'
import Hello from './components/Hello'

import topbarData from 'data/topbar.json'
import sidebarData from 'data/sidebar.json'

export default {
    components: {
        ViewFramework,
        Topbar,
        TopbarNav,
        Dropdown,
        Sidebar,
        Hello
    },
    data () {
        return {
            sidebarType: sidebarData.type,
            topbarNavList: topbarData.navList,
            sidebarNavList: sidebarData.navList
        };
    },
    methods: {
        handlerClass (type) {
            this.sidebarType = type;
        }
    }
}
</script>
