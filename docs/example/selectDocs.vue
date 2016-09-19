<template lang="html">
    <doc-section id="Select" name="Select">
        <bs-select :options="options" :value.sync="values" placeholder="请选择动物"></bs-select>
        <doc-code language="markup" title="Component Style">
            <bs-select ></bs-select>
        </doc-code>

        <doc-code language="javascript" title="Javascript Code">
            options: [
              {value: 1, label: 'Cat'},
              {value: 2, label: 'Cow'},
              {value: 3, label: 'Dog'},
              {value: 4, label: 'Elephant'},
              {value: 5, label: 'Fish'},
              {value: 6, label: 'Lion'},
              {value: 7, label: 'Tiger'},
              {value: 8, label: 'Turtle'}
            ]
        </doc-code>
    </doc-section>

</template>

<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'

import Select from 'components/forms/Select'

export default {
    components: {
        docSection,
        docCode,
        docOptions,
        docCallout,
        bsSelect: Select
    },
    data () {
        return {
            values: null,
            options: [
                {value: 1, label: 'Cat'},
                {value: 2, label: 'Cow'},
                {value: 3, label: 'Dog'},
                {value: 4, label: 'Elephant'},
                {value: 5, label: 'Fish'},
                {value: 6, label: 'Lion'},
                {value: 7, label: 'Tiger'},
                {value: 8, label: 'Turtle'}
            ]
        };
    }
};
</script>
