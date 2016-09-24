<template lang="html">
    <doc-section id="Select" name="Select">
        <div class="row">
            <div class="col-md-4">
                <button class="btn">
                    select animal : {{single | json}}
                </button>
            </div>
            <div class="col-md-4">
                <button class="btn">
                    selects animal : {{formSelect | json}}
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <h4>基本的select 组件</h4>
                <bs-select :options="options" :value.sync="single" name="animal" placeholder="请选择动物"></bs-select>
            </div>
            <div class="col-md-4">
                <h4>带有表单的select组件(required)</h4>
                <form action="/docs.html#Select" >
                    <form-group :valid.sync="singleValid" inline>
                        <bs-select :options="options" :value.sync="single" name="animal" required placeholder="请选择动物"></bs-select>
                        <button type="submit"  class="btn btn-default" :disabled="!singleValid">提交</button>
                    </form-group>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <form action="#Select">
                    <h4>混合型 form表单组件</h4>
                    <form-group :valid.sync="validA">
                        <bs-input required error="要求字母开头" name="username" minlength="12" pattern="^[a-zA-z].*" label="用户名"></bs-input>
                        <bs-input required error="请输入有效字符a-zA-Z0-9" name="password" minlength="12" pattern="^[a-zA-z0-9]*" label="密码"></bs-input>
                        <bs-select :options="options" name="favor[]" :value.sync="formSelect" multiple limit="2" required justified></bs-select>
                        <button type="submit"  class="btn btn-default" :disabled="!validA">提交</button>
                    </form-group>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                    <h4>三级联动表单组件</h4>
                    <form action="#Select">
                        <form-group :valid.sync="validB" inline>
                            <bs-select url="./static/data/categories.json" name="categorie"  :value.sync="firstValue" clear-button required></bs-select>
                            <bs-select :url="'./static/data/animals.json?a=' + firstValue" name="animals[]" :value.sync="secondValue" :parent="firstValue" limit="2" multiple required></bs-select>
                            <bs-select :url="'./static/data/color.json?b=' + secondValue" name="color" :parent="secondValue" required></bs-select>
                            <button type="submit"  class="btn btn-default" :disabled="!validB">提交</button>
                        </form-group>
                    </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h4>自带查询过滤的下拉框</h4>
                <bs-select url="/static/data/categories.json" search required></bs-select>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h4>Option 组件</h4>
                <bs-select>
                    <bs-option value="a">A</bs-option>
                    <bs-option value="b">B</bs-option>
                </bs-select>
            </div>
        </div>
        <doc-code language="markup" title="Component Style">
            <h4>基本的select 组件</h4>
            <bs-select :options="options" :value.sync="single" name="animal" placeholder="请选择动物"></bs-select>

            <h4>带有表单的select组件(required)</h4>
            <form action="/docs.html#Select" >
                <form-group :valid.sync="singleValid">
                    <bs-select :options="options" :value.sync="single" name="animal" required placeholder="请选择动物"></bs-select>
                    <button type="submit"  class="btn btn-default" :disabled="!singleValid">提交</button>
                </form-group>
            </form>

            <h4>三级联动表单组件</h4>
            <form action="#Select">
                <form-group :valid.sync="validB" inline>
                    <bs-select url="/static/data/categories.json" name="categorie"  :value.sync="firstValue" clear-button required></bs-select>
                    <bs-select :url="'/static/data/animals.json?a=' + firstValue" name="animals[]" :value.sync="secondValue" :parent="firstValue" limit="2" multiple required></bs-select>
                    <bs-select :url="'/static/data/color.json?b=' + secondValue" name="color" :parent="secondValue" required></bs-select>
                    <button type="submit"  class="btn btn-default" :disabled="!validB">提交</button>
                </form-group>
            </form>

            <h4>自带查询过滤的下拉框</h4>
            <bs-select url="/static/data/categories.json" search required></bs-select>

            <h4>Option 组件</h4>
            <bs-select>
                <bs-option value="a">A</bs-option>
                <bs-option value="b">B</bs-option>
            </bs-select>
        </doc-code>

        <doc-code language="javascript" title="Options Value Code">
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
    <doc-options>
        <div>
          <p>name</p>
          <p><code>String</code></p>
          <p><code>null</code></p>
          <p>select 名称</p>
        </div>
        <div>
          <p>value</p>
          <p><code>String | Array</code></p>
          <p><code>null | []</code></p>
          <p>select 值, 类型由 multiple 决定</p>
        </div>
        <div>
          <p>options</p>
          <p><code>Array</code></p>
          <p><code>[]</code></p>
          <p>option集合,格式要求: {value: '', label: ''}</p>
        </div>
        <div>
          <p>required</p>
          <p><code>Boolean</code></p>
          <p><code>false</code></p>
          <p>是否必填</p>
        </div>
        <div>
          <p>disabled</p>
          <p><code>Boolean</code></p>
          <p><code>false</code></p>
          <p>是否禁用</p>
        </div>
        <div>
          <p>readonly</p>
          <p><code>Boolean</code></p>
          <p><code>false</code></p>
          <p>是否只读</p>
        </div>
        <div>
          <p>placeholder</p>
          <p><code>String</code></p>
          <p><code>null</code></p>
          <p>占位符</p>
        </div>
        <div>
          <p>justified</p>
          <p><code>Boolean</code></p>
          <p><code>false</code></p>
          <p>下拉框样式</p>
        </div>
        <div>
          <p>limit</p>
          <p><code>Number</code></p>
          <p><code>1</code></p>
          <p>限制长度</p>
        </div>
        <div>
          <p>url</p>
          <p><code>String</code></p>
          <p><code>null</code></p>
          <p>远程加载下拉选项地址</p>
        </div>
        <div>
          <p>parent</p>
          <p><code>String | Array</code></p>
          <p><code>true</code></p>
          <p>是否为顶级下拉选项框 下拉联动时有用</p>
        </div>
        <div>
          <p>lang</p>
          <p><code>String</code></p>
          <p><code>navigator.language</code></p>
          <p>组件提示语言</p>
        </div>
        <div>
          <p>closeOnSelect</p>
          <p><code>Boolean</code></p>
          <p><code>false</code></p>
          <p>选中后关闭窗口</p>
        </div>
        <div>
          <p>clearButton</p>
          <p><code>Boolean</code></p>
          <p><code>false</code></p>
          <p>清空按钮</p>
        </div>
        <div>
          <p>search</p>
          <p><code>Boolean</code></p>
          <p><code>false</code></p>
          <p>查询框</p>
        </div>
        <div>
          <p>minSearch</p>
          <p><code>Number</code></p>
          <p><code>0</code></p>
          <p>查询框出现条件</p>
        </div>
        <div>
          <p>searchText</p>
          <p><code>String</code></p>
          <p><code>null</code></p>
          <p>查询文字提示</p>
        </div>
    </doc-options>
</template>

<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'
import FormGroup from 'components/forms/FormGroup'
import Input from 'components/forms/Input'
import Select from 'components/forms/Select'
import Option from 'components/forms/Option'

export default {
    components: {
        docSection,
        docCode,
        docOptions,
        docCallout,
        FormGroup,
        bsSelect: Select,
        bsInput: Input,
        bsOption: Option
    },
    data () {
        return {
            single: null,
            singleValid: null,
            formSelect: [],
            validA: null,
            validB: null,
            firstValue: null,
            secondValue: null,
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
