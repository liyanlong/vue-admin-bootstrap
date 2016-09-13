<template lang="html">
    <doc-section id="ButtonGroup" name="ButtonGroup">
        <h4>分组多选按钮</h4>
        <button-group :value.sync="value" type="info">
            <checkbox name="sports" value="lanq">篮球</checkbox>
            <checkbox disabled name="sports" value="zuq">足球(disabled)</checkbox>
            <checkbox readonly name="sports" value="yumq">羽毛球(readonly)</checkbox>
            <checkbox name="sports" value="ppq">乒乓球</checkbox>
        </button-group>
        <h4>分组 非button 多选按钮</h4>
        <button-group :value.sync="value" type="warning" buttons="false">
            <checkbox name="sports" value="lanq">篮球</checkbox>
            <checkbox disabled name="sports" value="zuq">足球(disabled)</checkbox>
            <checkbox readonly name="sports" value="yumq">羽毛球(readonly)</checkbox>
            <checkbox name="sports" value="ppq">乒乓球</checkbox>
        </button-group>
        <h4>分组 非button 多选内联按钮</h4>
        <button-group :value.sync="value" type="primary" buttons="false" inline>
            <checkbox name="sports" value="lanq">篮球</checkbox>
            <checkbox disabled name="sports" value="zuq">足球(disabled)</checkbox>
            <checkbox readonly name="sports" value="yumq">羽毛球(readonly)</checkbox>
            <checkbox name="sports" value="ppq">乒乓球</checkbox>
        </button-group>
        <doc-code language="json"  title="checkbox group 数据" :content.sync="value | json"></doc-code>

        <doc-code language="markup"  title="Component Style">
            <h4>分组多选按钮</h4>
            <button-group :value.sync="value" type="info">
                <checkbox name="sports" value="lanq">篮球</checkbox>
                <checkbox disabled name="sports" value="zuq">足球(disabled)</checkbox>
                <checkbox readonly name="sports" value="yumq">羽毛球(readonly)</checkbox>
                <checkbox name="sports" value="ppq">乒乓球</checkbox>
            </button-group>
            <h4>分组 非button 多选按钮</h4>
            <button-group :value.sync="value" type="info" buttons="false">
                <checkbox name="sports" value="lanq">篮球</checkbox>
                <checkbox disabled name="sports" value="zuq">足球(disabled)</checkbox>
                <checkbox readonly name="sports" value="yumq">羽毛球(readonly)</checkbox>
                <checkbox name="sports" value="ppq">乒乓球</checkbox>
            </button-group>
            <h4>分组 非button 内联按钮</h4>
            <button-group :value.sync="value" type="info" buttons="false"  inline>
                <checkbox name="sports" value="lanq">篮球</checkbox>
                <checkbox disabled name="sports" value="zuq">足球(disabled)</checkbox>
                <checkbox readonly name="sports" value="yumq">羽毛球(readonly)</checkbox>
                <checkbox name="sports" value="ppq">乒乓球</checkbox>
            </button-group>
        </doc-code>

        <h4>分组单选按钮</h4>
        <button-group :value.sync="value" type="primary" name="sports">
            <radio value="lanq">篮球</radio>
            <radio disabled value="zuq">足球(disabled)</radio>
            <radio readonly value="yumq">羽毛球(readonly)</radio>
            <radio value="ppq">乒乓球</radio>
        </button-group>
        <h4>分组 非button 单选按钮</h4>
        <button-group :value.sync="value" type="primary" name="sports" buttons="false">
            <radio value="lanq">篮球</radio>
            <radio disabled value="zuq">足球(disabled)</radio>
            <radio readonly value="yumq">羽毛球(readonly)</radio>
            <radio value="ppq">乒乓球</radio>
        </button-group>
        <h4>分组 非button 内联按钮</h4>
        <button-group :value.sync="value" type="primary" name="sports" buttons="false" inline>
            <radio value="lanq">篮球</radio>
            <radio disabled value="zuq">足球(disabled)</radio>
            <radio readonly value="yumq">羽毛球(readonly)</radio>
            <radio value="ppq">乒乓球</radio>
        </button-group>

        <doc-code language="json"  title="分组radio数据" :content.sync="radio | json"></doc-code>

        <doc-code language="html" title="Component Style">
            <h4>分组单选按钮</h4>
            <button-group :value.sync="value" type="primary" name="sports">
                <radio value="lanq">篮球</radio>
                <radio disabled value="zuq">足球(disabled)</radio>
                <radio readonly value="yumq">羽毛球(readonly)</radio>
                <radio value="ppq">乒乓球</radio>
            </button-group>
            <h4>分组 非button 按钮</h4>
            <button-group :value.sync="value" type="primary" name="sports" buttons="false">
                <radio value="lanq">篮球</radio>
                <radio disabled value="zuq">足球(disabled)</radio>
                <radio readonly value="yumq">羽毛球(readonly)</radio>
                <radio value="ppq">乒乓球</radio>
            </button-group>
            <h4>分组 非button 内联按钮</h4>
            <button-group :value.sync="value" type="primary" name="sports" buttons="false" inline>
                <radio value="lanq">篮球</radio>
                <radio disabled value="zuq">足球(disabled)</radio>
                <radio readonly value="yumq">羽毛球(readonly)</radio>
                <radio value="ppq">乒乓球</radio>
            </button-group>
        </doc-code>
        <doc-options>
            <div>
              <p>value</p>
              <p><code>String</code> | <code>Array</code></p>
              <p><code>null</code></p>
              <p>分组数据</p>
            </div>
            <div>
              <p>buttons</p>
              <p><code>Boolean</code></p>
              <p><code>true</code></p>
              <p>是否为组样式</p>
            </div>
            <div>
              <p>type</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>样式颜色</p>
            </div>
            <div>
              <p>name</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>组名</p>
            </div>
            <div>
              <p>inline</p>
              <p><code>Boolean</code></p>
              <p><code>false</code></p>
              <p>是否为内联元素</p>
            </div>
        </doc-options>
    </doc-section>
</template>

<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'
import Checkbox from 'components/forms/Checkbox'
import Radio from 'components/forms/Radio'
import ButtonGroup from 'components/forms/ButtonGroup'
export default {
    data () {
        return {
            value: [],
            radio: {
                sports: null
            }
        };
    },
    computed: {
        content () {
            return JSON.stringify(this.checkbox, undefined, 2);
        }
    },
    components: {
        docSection,
        docCode,
        docOptions,
        docCallout,
        Checkbox,
        Radio,
        ButtonGroup
    }
}
</script>
