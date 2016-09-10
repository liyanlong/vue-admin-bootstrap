<template lang="html">
    <doc-section id="Panel" name="Panel">
        <panel title="标题1">
            Hello World - default
        </panel>
        <panel  title="标题2" type="info">
            Hello World - info
        </panel>
        <panel  title="标题3" type="primary">
            Hello World - primary
        </panel>
        <panel title="标题4">
            Hello World
            <template slot="panel-footer">
                这里是panel的 尾部
            </template>
        </panel>
        <doc-code language="markup">
            <panel title="标题1">
                Hello World - default
            </panel>
            <panel title="标题2" type="info">
                Hello World - info
            </panel>
            <panel title="标题3" type="primary">
                Hello World - primary
            </panel>
            <panel>
                <template slot="panel-heading">
                    slot panel-heading
                </template>
                Hello World
                <template slot="panel-footer">
                    这里是panel的 尾部
                </template>
            </panel>
        </doc-code>
        <doc-options>
            <div>
                <p>type</p>
                <p><code>String</code></p>
                <p><code>default</code></p>
                <p>初始化后打开的panel, 默认为第一个panel</p>
            </div>
            <div>
                <p>title</p>
                <p><code>String</code></p>
                <p><code>null</code></p>
                <p>panel的标题</p>
            </div>
            <div>
                <p>id</p>
                <p><code>String</code></p>
                <p><code>null</code></p>
                <p>panel的 id标识,在panel-group时做唯一标识</p>
            </div>
        </doc-options>
    </doc-section>


    <doc-section id="PanelGroup" name="PanelGroup">
        <panel-group :active="active">
            <panel id="panel-a" title="组1">
                Hello World
            </panel>
            <panel id="panel-b" title="组2" type="info">
                Hello World
            </panel>
        </panel-group>
        <doc-code language="markup">
            <panel-group :active="active">
                <panel id="panel-a" title="组1">
                    Hello World
                </panel>
                <panel id="panel-b" title="组2" type="info">
                    Hello World
                </panel>
            </panel-group>
        </doc-code>
        <doc-options>
            <div>
                <p>active</p>
                <p><code>String</code></p>
                <p>null</p>
                <p>初始化后打开的panel, 默认为第一个panel</p>
            </div>
        </doc-options>
    </doc-section>
</template>

<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'

import Panel from 'components/Panel'
import PanelGroup from 'components/PanelGroup'
export default {
    data () {
        return {
            active: ''
        };
    },
    components: {
        docSection,
        docCode,
        docOptions,
        docCallout,
        Panel,
        PanelGroup
    }
}
</script>
