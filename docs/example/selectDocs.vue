<template lang="html">
    <doc-section id="Select" name="Select">
        <div class="row">
            <div class="col-md-4">
                <button class="btn">
                    select animal : {{single | json}}
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <h4>基本的select 组件</h4>
                <bs-select :options="options" :value.sync="single" name="animal" placeholder="请选择动物"></bs-select>
            </div>
            <div class="col-md-4">
                <h4>带有表单的select组件</h4>
                <form action="/docs.html#Select" disabled>
                    <bs-select :options="options" :value.sync="single" name="animal" placeholder="请选择动物"></bs-select>
                    <button type="submit"  class="btn btn-default">提交</button>
                </form>
            </div>
        </div>
        <doc-code language="markup" title="Component Style">
            <bs-select :options="options" :value.sync="formSelect" name="animal" placeholder="请选择动物"></bs-select>
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
            single: null,
            formSelect: null,
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
