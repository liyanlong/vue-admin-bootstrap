<template lang="html">
    <doc-section id="Checkbox" name="Checkbox">
        <h4>多选按钮</h4>
        <checkbox  :checked.sync="checkbox.lanq" name="sports" value="lanq">篮球</checkbox>
        <checkbox  :checked.sync="checkbox.zuq" disabled type="info" name="sports" value="zuq">足球(disabled)</checkbox>
        <checkbox  :checked.sync="checkbox.yumq" readonly type="warning" name="sports" value="yumq">羽毛球(readonly)</checkbox>
        <checkbox  :checked.sync="checkbox.ppq" type="primary" name="sports" value="ppq">乒乓球</checkbox>
        <checkbox  :checked.sync="all" value="true">全选</checkbox>
        <h4>内联多选按钮</h4>
        <div class="inline">
            <checkbox  :checked.sync="checkbox.lanq" name="sports" value="lanq">篮球</checkbox>
            <checkbox  :checked.sync="checkbox.zuq" disabled type="info" name="sports" value="zuq">足球(disabled)</checkbox>
            <checkbox  :checked.sync="checkbox.yumq" readonly type="warning" name="sports" value="yumq">羽毛球(readonly)</checkbox>
            <checkbox  :checked.sync="checkbox.ppq" type="primary" name="sports" value="ppq">乒乓球</checkbox>
        </div>
        <doc-code language="json"  title="checkbox数据" :content.sync="content"></doc-code>

        <h4>分组多选按钮</h4>
        <button-group :value.sync="value" type="info">
            <checkbox name="sports" value="lanq">篮球</checkbox>
            <checkbox disabled name="sports" value="zuq">足球(disabled)</checkbox>
            <checkbox readonly name="sports" value="yumq">羽毛球(readonly)</checkbox>
            <checkbox name="sports" value="ppq">乒乓球</checkbox>
        </button-group>
        <doc-code language="json"  title="checkbox数据" :content.sync="value | json"></doc-code>
    </doc-section>
</template>
<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'
import Checkbox from 'components/forms/Checkbox'
import ButtonGroup from 'components/forms/ButtonGroup'
export default {
    data () {
        return {
            checkbox: {
                lanq: null,
                zuq: null,
                yumq: null,
                ppq: null
            },
            all: null,
            value: ['lanq', 'ppq']
        };
    },
    computed: {
        content () {
            return JSON.stringify(this.checkbox, undefined, 2);
        }
    },
    methods: {
    },
    components: {
        docSection,
        docCode,
        docOptions,
        docCallout,
        Checkbox,
        ButtonGroup
    },
    watch: {
        all (val) {
            let name;
            if (typeof val === 'boolean' && val || val === 'true') {
                for (name in this.checkbox) {
                    this.checkbox[name] = name;
                }
            } else {
                for (name in this.checkbox) {
                    this.checkbox[name] = null;
                }
            }
            console.log(this.$log())
        }
    }
}
</script>
