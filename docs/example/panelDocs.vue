<template lang="html">
    <doc-section id="Panel" name="Panel">
        <panel-group>
            <panel title="标题">
                Hello World
            </panel>
        </panel-group>
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
