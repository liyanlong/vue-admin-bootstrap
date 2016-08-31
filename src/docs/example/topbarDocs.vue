<template lang="html">
    <doc-section id="Topbar" name="Topbar">
        <topbar home-name="文档名称" home-link="#/home"  logo-icon="fa fa-desktop">
            <topbar-nav slot="topbar-nav" :nav-list="navList" text="导航"></topbar-nav>
            <a slot="topbar-left" class="topbar-left topbar-btn topbar-console-btn"  href="#/console"><span>管理控制台</span></a>
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
        <doc-code language="markup" title="Component Style">
            <topbar home-name="文档名称" home-link="#/home"  logo-icon="fa fa-desktop">
                <topbar-nav slot="topbar-nav" :nav-list="navList" text="导航"></topbar-nav>
                <a slot="topbar-left" class="topbar-left topbar-btn topbar-console-btn"  href="#/console"><span>管理控制台</span></a>
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
        </doc-code>

        <doc-code language="javascript" title="Javascript Code">
            var app = new Vue({
                el: 'body',
                data: {
                    navList: []
                },
                components: {
                    topbar: VueAdminBootStrap.components.layout.Topbar,
                    topbarNav: VueAdminBootStrap.components.layout.TopbarNav
                }
            });
        </doc-code>
        <doc-code language="javascript" title="topbarNav data" :content="dataStr"></doc-code>
    </doc-section>

</template>

<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'

import Topbar from 'components/layout/Topbar'
import TopbarNav from 'components/layout/TopbarNav'
import Dropdown from 'components/Dropdown'

import data from 'data/topbar.json'

export default {
    components: {
        docSection,
        docCode,
        docOptions,
        docCallout,
        Topbar,
        TopbarNav,
        Dropdown
    },
    data () {
        return {
            navList: data.navList,
            dataStr: JSON.stringify(data.navList.slice(0, 2), undefined, 0)
        };
    }
};
</script>

<style lang="less">
.admin-topbar {
    width: 100%;
    min-width:inherit;

    .topbar-console-btn {
        padding: 0 10px;
    }
}
</style>
