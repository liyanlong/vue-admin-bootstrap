<template lang="html">
    <doc-section id="Checkbox" name="Checkbox">
        <h4>多选按钮</h4>
        <checkbox  :checked.sync="checkbox.lanq" name="sports" value="lanq">篮球</checkbox>
        <checkbox  :checked.sync="checkbox.zuq" disabled type="info" name="sports" value="zuq">足球(disabled)</checkbox>
        <checkbox  :checked.sync="checkbox.yumq" readonly type="warning" name="sports" value="yumq">羽毛球(readonly)</checkbox>
        <checkbox  :checked.sync="checkbox.ppq" type="primary" name="sports" value="ppq">乒乓球</checkbox>
        <checkbox  :checked.sync="all" value="true">全选</checkbox>

        <h4>内联多选按钮</h4>
        <checkbox inline :checked.sync="checkbox.lanq" name="sports" value="lanq">篮球</checkbox>
        <checkbox inline :checked.sync="checkbox.zuq" disabled type="info" name="sports" value="zuq">足球(disabled)</checkbox>
        <checkbox inline :checked.sync="checkbox.yumq" readonly type="warning" name="sports" value="yumq">羽毛球(readonly)</checkbox>
        <checkbox inline :checked.sync="checkbox.ppq" type="primary" name="sports" value="ppq">乒乓球</checkbox>
        <doc-code language="json"  title="checkbox数据" :content.sync="content"></doc-code>

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
