<template lang="html">
    <doc-section id="Sidebar" name="Sidebar">
        <sidebar :type.sync="sidebarType" :nav-list="sidebarNavList"></sidebar>
        <doc-code language="markup" title="Component Style">
            <sidebar :type.sync="sidebarType" :nav-list="sidebarNavList"></sidebar>
        </doc-code>
        <doc-code language="javascript" title="Javascript Code">
            var app = new Vue({
                el: 'body',
                data: {
                    navList: [],
                    type: 'full'
                },
                components: {
                    Sidebar: VueAdminBootStrap.components.layout.Sidebar
                }
            });
        </doc-code>
        <doc-code language="javascript" title="sidebarNav data" :content="dataStr"></doc-code>
    </doc-section>

</template>

<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'
import ViewFramework from 'components/layouts/ViewFrameWork'
import Sidebar from 'components/layouts/Sidebar'
import data from 'data/sidebar.json'

export default {
    components: {
        docSection,
        docCode,
        docOptions,
        docCallout,
        ViewFramework,
        Sidebar
    },
    data () {
        return {
            sidebarType: data.type,
            sidebarNavList: data.navList,
            dataStr: JSON.stringify(data.navList.slice(0, 2), undefined, 0)
        };
    }
};
</script>
