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
                    <form-group :valid.sync="singleValid">
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
                <form action="#Select">
                    <h4>三级联动表单组件</h4>
                    <bs-select :options="options"  :value.sync="firstValue" clear-button required></bs-select>
                    <bs-select :options="options" url="h" :parent="firstValue" required></bs-select>
                </form>
            </div>
        </div>
        <doc-code language="markup" title="Component Style">
            <bs-select :options="options" :value.sync="formSelect" name="animal" placeholder="请选择动物" multiple limit="3"></bs-select>
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
import FormGroup from 'components/forms/FormGroup'
import Input from 'components/forms/Input'
import Select from 'components/forms/Select'

export default {
    components: {
        docSection,
        docCode,
        docOptions,
        docCallout,
        FormGroup,
        bsSelect: Select,
        bsInput: Input
    },
    data () {
        return {
            single: null,
            singleValid: null,
            formSelect: [],
            validA: null,
            firstValue: null,
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
