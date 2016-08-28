<template>
    <div class="admin-topbar">
        <div class="topbar-wrap topbar-clearfix">
            <div class="topbar-head topbar-left">
                <slot name="logo">
                    <a href="/" class="topbar-logo topbar-left">
                        <i class="fa fa-desktop"></i>
                    </a>
                </slot>
                <slot name="home">
                    <a href="#/home" class="topbar-home-link topbar-btn topbar-left">
                        <span>Vue-Admin-Bootstrap</span>
                    </a>
                 <slot>
            </div>
            <dropdown class="topbar-left" text="导航" type="topbar-nav" show="false">
                <div slot="dropdown-menu" class="dropdown-menu topbar-nav-list">
                    <topbar-nav :nav-list="navList"></topbar-nav>
                </div>
            </dropdown>
            <div class="topbar-info topbar-right topbar-clearfix">
                <dropdown class="topbar-left topbar-info-item" text="帮助" type="topbar-info" disabled>
                    <li class="topbar-info-btn">
                        <a href="#">列表1</a>
                    </li>
                    <li class="topbar-info-btn">
                        <a href="#">列表1</a>
                    </li>
                </dropdown>
                <div class="topbar-left topbar-accesskeys topbar-info-item">
                    <a href="/docs.html" target="_blank" class="topbar-btn">文档</a></div>
                <!-- <div class="topbar-left topbar-info-item dropdown" v-dropdown>
                    <a href="#" class="topbar-btn">
                        帮助
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu topbar-clearfix">
                        <li class="topbar-info-btn">
                            <a href="#">列表1</a>
                        </li>
                        <li class="topbar-info-btn">
                            <a href="#">列表1</a>
                        </li>
                    </ul>
                </div> -->
                <div class="topbar-left topbar-info-item dropdown" v-dropdown>
                    <a href="#" class="topbar-btn">
                        295697141@qq.com
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu topbar-clearfix">
                        <li class="topbar-info-btn">
                            <a href="#">列表1</a>
                        </li>
                        <li class="topbar-info-btn">
                            <a href="#">列表1</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import Dropdown from 'components/Dropdown'
import TopbarNav from 'components/topbar/TopbarNav'
import data from 'data/topbar.json'
export default {
    data () {
        return $.extend({
        }, data);
    },
    computed: {
    },
    created: function () {
        this._topbar = true;
    },
    attached: function () {},
    ready: function () {},
    methods: {
    },
    components: {
        Dropdown,
        TopbarNav
    }
}
</script>
