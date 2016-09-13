<template lang="html">
    <doc-section id="Radio" name="Radio">
        <h4>单选按钮</h4>
        <radio  :checked.sync="radio.sports" name="sports" value="lanq">篮球</radio>
        <radio  :checked.sync="radio.sports" disabled type="info" name="sports" value="zuq">足球(disabled)</radio>
        <radio  :checked.sync="radio.sports" readonly type="warning" name="sports" value="yumq">羽毛球(readonly)</radio>
        <radio  :checked.sync="radio.sports" type="primary" name="sports" value="ppq">乒乓球</radio>
        <h4>内联单选按钮</h4>
        <radio inline :checked.sync="radio.sports" name="sports" value="lanq">篮球</radio>
        <radio inline :checked.sync="radio.sports" disabled type="info" name="sports" value="zuq">足球(disabled)</radio>
        <radio inline :checked.sync="radio.sports" readonly type="warning" name="sports" value="yumq">羽毛球(readonly)</radio>
        <radio inline :checked.sync="radio.sports" type="primary" name="sports" value="ppq">乒乓球</radio>
        <h4>单选按钮 button</h4>
        <radio button :checked.sync="radio.sports" name="sports" value="lanq">篮球</radio>
        <radio button :checked.sync="radio.sports" disabled type="info" name="sports" value="zuq">足球(disabled)</radio>
        <radio button :checked.sync="radio.sports" readonly type="warning" name="sports" value="yumq">羽毛球(readonly)</radio>
        <radio button :checked.sync="radio.sports" type="primary" name="sports" value="ppq">乒乓球</radio>

        <doc-code language="json"  title="未分组 radio数据" :content.sync="content | json"></doc-code>

        <doc-code language="html" title="Component Style">
            <h4>单选按钮</h4>
            <radio  :checked.sync="radio.sports" name="sports" value="lanq">篮球</radio>
            <radio  :checked.sync="radio.sports" disabled type="info" name="sports" value="zuq">足球(disabled)</radio>
            <radio  :checked.sync="radio.sports" readonly type="warning" name="sports" value="yumq">羽毛球(readonly)</radio>
            <radio  :checked.sync="radio.sports" type="primary" name="sports" value="ppq">乒乓球</radio>
            <h4>内联单选按钮</h4>
            <radio inline :checked.sync="radio.sports" name="sports" value="lanq">篮球</radio>
            <radio inline :checked.sync="radio.sports" disabled type="info" name="sports" value="zuq">足球(disabled)</radio>
            <radio inline :checked.sync="radio.sports" readonly type="warning" name="sports" value="yumq">羽毛球(readonly)</radio>
            <radio inline :checked.sync="radio.sports" type="primary" name="sports" value="ppq">乒乓球</radio>
            <h4>单选按钮 button</h4>
            <radio button :checked.sync="radio.sports" name="sports" value="lanq">篮球</radio>
            <radio button :checked.sync="radio.sports" disabled type="info" name="sports" value="zuq">足球(disabled)</radio>
            <radio button :checked.sync="radio.sports" readonly type="warning" name="sports" value="yumq">羽毛球(readonly)</radio>
            <radio button :checked.sync="radio.sports" type="primary" name="sports" value="ppq">乒乓球</radio>
        </doc-code>
        <doc-options>
            <div>
              <p>name</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>表单控件名称</p>
            </div>
            <div>
              <p>checked</p>
              <p><code>String</code> <code>twoWay</code></p>
              <p><code>null</code></p>
              <p>选中后<code>checked</code>与<code>value</code>一致</p>
            </div>
            <div>
              <p>disabled</p>
              <p><code>Boolean</code></p>
              <p><code>false</code></p>
              <p>是否禁用表单控件</p>
            </div>
            <div>
              <p>readonly</p>
              <p><code>Boolean</code></p>
              <p><code>false</code></p>
              <p>是否只读</p>
            </div>
            <div>
              <p>button</p>
              <p><code>Boolean</code></p>
              <p><code>false</code></p>
              <p>按钮类型是否为button</p>
            </div>
            <div>
              <p>inline</p>
              <p><code>Boolean</code></p>
              <p><code>false</code></p>
              <p>是否为内联元素</p>
            </div>
            <div>
              <p>value</p>
              <p><code>String | Boolean</code></p>
              <p><code>true</code></p>
              <p>表单控件默认值</p>
            </div>
            <div>
              <p>type</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>默认的类型</p>
            </div>
        </doc-options>
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
            return this.radio.sports || '';
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
