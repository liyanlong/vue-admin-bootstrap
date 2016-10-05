<template lang="html">
    <doc-section id="DateTimePicker" name="DateTimePicker">
        <date-picker
        use-icon
        value="2016/10/02 12:00:00"
        format="YYYY-MM-DD HH:mm:ss"
        placement="top right"
        use-am-pm></date-picker>
        <div class="row">
            <div class="col-md-3">
                <date-picker format="YYYY-MM" readonly></date-picker>
            </div>
            <div class="col-md-3">
                <date-picker format="YYYY/MM/DD"></date-picker>
            </div>
        </div>
        <doc-code language="markup" title="Component Style">
            <date-picker
            use-icon
            value="2016/10/02 12:00:00"
            format="YYYY-MM-DD HH:mm:ss"
            placement="top right"
            use-am-pm></date-picker>
            <div class="row">
                <div class="col-md-3">
                    <date-picker format="YYYY-MM" readonly></date-picker>
                </div>
                <div class="col-md-3">
                    <date-picker format="YYYY/MM/DD"></date-picker>
                </div>
            </div>
        </doc-code>
        <doc-options>
            <div>
              <p>value</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>表单控件值</p>
            </div>
            <div>
              <p>name</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>表单名称</p>
            </div>
            <div>
              <p>lang</p>
              <p><code>String</code></p>
              <p><code>navigator.language</code></p>
              <p>语言</p>
            </div>
            <div>
              <p>placeholder</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>占位符</p>
            </div>
            <div>
              <p>format</p>
              <p><code>String</code></p>
              <p><code>null</code></p>
              <p>时间转换成格式</p>
            </div>
            <div>
              <p>readonly</p>
              <p><code>Boolean</code></p>
              <p><code>false</code></p>
              <p>是否只读</p>
            </div>
            <div>
              <p>disabled</p>
              <p><code>Boolean</code></p>
              <p><code>false</code></p>
              <p>是否禁止选择</p>
            </div>
            <div>
              <p>placement</p>
              <p><code>String</code></p>
              <p><code>left bottom</code></p>
              <p>显示位置 <code>left</code> <code>top</code> <code>right</code> <code>bottom</code></p>
            </div>
            <div>
              <p>useIcon</p>
              <p><code>boolean</code></p>
              <p><code>false</code></p>
              <p>显示图标</p>
            </div>
            <div>
              <p>stepping</p>
              <p><code>Number</code></p>
              <p><code>1</code></p>
              <p>分钟的间隔长度</p>
            </div>
        </doc-options>
    </doc-section>
</template>

<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'
import DateTimePicker from 'components/forms/DateTimePicker'
export default {
    components: {
        docSection,
        docCode,
        docOptions,
        docCallout,
        datePicker: DateTimePicker
    }
}
</script>
