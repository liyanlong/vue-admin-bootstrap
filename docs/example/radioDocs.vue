<template lang="html">
    <doc-section id="Radio" name="Radio">
        <h4>单选按钮</h4>
        <radio  :checked.sync="radio.sports" name="sports" value="lanq">篮球</radio>
        <radio  :checked.sync="radio.sports" disabled type="info" name="sports" value="zuq">足球(disabled)</radio>
        <radio  :checked.sync="radio.sports" readonly type="warning" name="sports" value="yumq">羽毛球(readonly)</radio>
        <radio  :checked.sync="radio.sports" type="primary" name="sports" value="ppq">乒乓球</radio>
        <h4>内联单选按钮</h4>
        <div class="inline">
            <radio  :checked.sync="radio.sports" name="sports" value="lanq">篮球</radio>
            <radio  :checked.sync="radio.sports" disabled type="info" name="sports" value="zuq">足球(disabled)</radio>
            <radio  :checked.sync="radio.sports" readonly type="warning" name="sports" value="yumq">羽毛球(readonly)</radio>
            <radio  :checked.sync="radio.sports" type="primary" name="sports" value="ppq">乒乓球</radio>
        </div>
        <doc-code language="json"  title="radio数据" :content.sync="content | json"></doc-code>

        <h4>分组单选按钮</h4>
        <button-group :value.sync="value" type="primary" name="sports">
            <radio value="lanq">篮球</radio>
            <radio disabled value="zuq">足球(disabled)</radio>
            <radio readonly value="yumq">羽毛球(readonly)</radio>
            <radio value="ppq">乒乓球</radio>
        </button-group>
        <doc-code language="json"  title="radio数据" :content.sync="value"></doc-code>
    </doc-section>
</template>
<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'
import Radio from 'components/forms/Radio'
import ButtonGroup from 'components/forms/ButtonGroup'
export default {
    data () {
        return {
            radio: {
                sports: null
            },
            value: ''
        };
    },
    computed: {
        content () {
            return this.radio;
        }
    },
    components: {
        docSection,
        docCode,
        docOptions,
        docCallout,
        Radio,
        ButtonGroup
    }
}
</script>
