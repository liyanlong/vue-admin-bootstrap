<template lang="html">
    <doc-section id="Input" name="Input">
        <div class="row">
            <form action="#Input">
                <div class="col-md-6 col-lg-6">
                    <bs-input
                    name="username"
                    :label="label"
                    :value.sync="value"
                    :pattern="pattern"
                    :clear-button="clearButton"
                    :help="help"
                    :placeholder="placeholder"
                    :readonly="readonly"
                    :disabled="disabled"
                    :required="required"
                    :error="error"
                    :minlength="minLength"
                    :maxlength="maxLength"
                    :icon="icon"
                    :enter-submit="enterSubmit"
                    ></bs-input>
                </div>
                <div class="col-md-6 col-lg-6">
                        <bs-input
                        label="Match Username"
                        :pattern="pattern"
                        :clear-button="clearButton"
                        :help="help"
                        :required="required"
                        error="与原 Username匹配"
                        :icon="icon"
                        :match="value"
                        :no-validate="noValidate"
                        ></bs-input>
                </div>
            </form>
        </div>
        <div class="row">
            <div class="col-md-12 col-lg-12">
                <bs-input label="TextArea" type="textarea" value="a"></bs-input>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <checkbox :checked.sync="label" type="primary" value="姓名">label提示</checkbox>
                <checkbox :checked.sync="clearButton" type="primary" value="true">清空按钮</checkbox>
                <checkbox :checked.sync="help" type="primary" value="这是文档help">help内容</checkbox>
                <checkbox :checked.sync="placeholder" type="primary" value="这是placeholder 内容">开启placeholder</checkbox>
                <checkbox :checked.sync="readonly" type="primary" value="true">只读</checkbox>
                <checkbox :checked.sync="disabled" type="primary" value="true">禁用</checkbox>
                <checkbox :checked.sync="required" type="primary" value="true">required</checkbox>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <checkbox :checked.sync="error" type="primary" value="姓名输入错误">error文本</checkbox>
                <checkbox :checked.sync="pattern" type="primary" value="[a-z]{0,5}">pattern: [a-z]{0,5}</checkbox>
                <checkbox :checked.sync="minLength" type="primary" value="2">minLength 2</checkbox>
                <checkbox :checked.sync="maxLength" type="primary" value="5">maxLength 5</checkbox>
                <checkbox :checked.sync="icon" type="primary" value="true">开启icon</checkbox>
                <checkbox :checked.sync="enterSubmit" type="primary" value="true">enterSubmit</checkbox>
                <checkbox :checked.sync="noValidate" type="primary" value="true">noValidate</checkbox>
            </div>
        </div>

        <doc-code language="html" title="Component Style">
            <bs-input
            :label="label"
            :value.sync="value"
            :pattern="pattern"
            :clear-button="clearButton"
            :help="help"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :required="required"
            :error="error"
            :minlength="minLength"
            :maxlength="maxLength"
            :icon="icon"
            :enter-submit="enterSubmit"
            ></bs-input>
            <bs-input
            label="Match Username"
            :pattern="pattern"
            :clear-button="clearButton"
            :help="help"
            :required="required"
            error="与原 Username匹配"
            :icon="icon"
            :match="value"
            ></bs-input>
            <bs-input label="TextArea" type="textarea" value="a"></bs-input>
        </doc-code>
        <doc-options>
            <div>
              <p>label</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>表单控件label</p>
            </div>
            <div>
              <p>name</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>表单控件名称</p>
            </div>
            <div>
              <p>value</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>表单控件 value,双向绑定</p>
            </div>
            <div>
              <p>type</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>表单控件 类型，如 text, password, textarea</p>
            </div>
            <div>
              <p>disabled</p>
              <p><code>Boolean</code></p>
              <p><code>false</code></p>
              <p>禁止填写</p>
            </div>
            <div>
              <p>readonly</p>
              <p><code>Boolean</code></p>
              <p><code>false</code></p>
              <p>只读</p>
            </div>
            <div>
              <p>required</p>
              <p><code>Boolean</code></p>
              <p><code>false</code></p>
              <p>必须填写</p>
            </div>
            <div>
              <p>placeholder</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>占位符</p>
            </div>
            <div>
              <p>clearButton</p>
              <p><code>Boolean</code></p>
              <p><code>false</code></p>
              <p>清除按钮</p>
            </div>
            <div>
              <p>enterSubmit</p>
              <p><code>Boolean</code></p>
              <p><code>false</code></p>
              <p>回车提交表单</p>
            </div>
            <div>
              <p>help</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>提示内容</p>
            </div>
            <div>
              <p>icon</p>
              <p><code>Boolean</code></p>
              <p><code>false</code></p>
              <p>表单状态图标</p>
            </div>
            <div>
              <p>maxlength</p>
              <p><code>Number</code></p>
              <p><code>0</code></p>
              <p>表单文本最大长度, 0 为不限制</p>
            </div>
            <div>
              <p>minlength</p>
              <p><code>Number</code></p>
              <p><code>0</code></p>
              <p>表单文本最小长度</p>
            </div>
            <div>
              <p>onfocus</p>
              <p><code>Function</code></p>
              <p><code>null</code></p>
              <p>聚焦函数</p>
            </div>
            <div>
              <p>pattern</p>
              <p><code>String</code>|<code>Function</code></p>
              <p><code>null</code></p>
              <p>表达式</p>
            </div>
            <div>
              <p>noValidate</p>
              <p><code>Boolean</code></p>
              <p><code>false</code></p>
              <p>不要验证</p>
            </div>
            <div>
              <p>validateDelay</p>
              <p><code>Number</code></p>
              <p><code>0</code></p>
              <p>延时验证</p>
            </div>
            <div>
              <p>hideHelp</p>
              <p><code>Boolean</code></p>
              <p><code>false</code></p>
              <p>隐藏 help block</p>
            </div>
            <div>
              <p>match</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>匹配值</p>
            </div>
            <div>
              <p>error</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>错误现实文本</p>
            </div>
        </doc-options>
    </doc-section>
</template>
<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'
import Input from 'components/forms/Input'
import Checkbox from 'components/forms/Checkbox'
export default {
    data () {
        return {
            label: '姓名',
            value: null,
            clearButton: null,
            help: null,
            placeholder: null,
            readonly: null,
            disabled: null,
            required: null,
            error: null,
            pattern: null,
            minLength: null,
            maxLength: null,
            icon: null,
            enterSubmit: null,
            noValidate: null
        };
    },
    computed: {
    },
    components: {
        docSection,
        docCode,
        docOptions,
        docCallout,
        bsInput: Input,
        Checkbox
    }
}
</script>
