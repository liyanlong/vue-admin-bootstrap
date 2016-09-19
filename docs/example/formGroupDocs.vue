<template>
    <doc-section id="FormGroup" name="FormGroup">
        <form action="#submit" method="get">
            <form-group :valid.sync="valid">
                <tab-set>
                    <tab :header="headerA" >
                        <form-group :valid.sync="validA" horizontal>
                            <bs-input label="username" name="username" pattern="[\w]{6,}" error="用户名为有效字符,用户名长度至少大于6"></bs-input>
                            <bs-input label="password" name="password" type="password" pattern="[\w]{6,20}" error="密码长度要求为6~20"></bs-input>
                        </form-group>
                    </tab>
                    <tab :header="headerB" :disabled="!validA">
                        <form-group :valid.sync="validB" inline>
                            <bs-input label="telephone" name="phone" pattern="^[131|135|170][\d]{10}" error="请输入合法的手机号码"></bs-input>
                        </form-group>
                    </tab>
                    <tab header="step 3" :disabled="!validB">
                        <bs-input  type="textarea" name="desc" minlength="10"></bs-input>
                        <button type="submit" class="btn btn-primary" :disabled="!valid">提交</button>
                    </tab>
                </tab-set>
            </form-group>
        </form>

        <doc-code language="markup" title="Component Style">
            <form action="#submit" method="get">
                <form-group :valid.sync="valid">
                    <tab-set>
                        <tab :header="headerA" >
                            <form-group :valid.sync="validA">
                                <bs-input label="username" pattern="[\w]{6,}" error="用户名为有效字符,用户名长度至少大于6"></bs-input>
                                <bs-input label="password" type="password" pattern="[\w]{6,20}" error="密码长度要求为6~20"></bs-input>
                            </form-group>
                        </tab>
                        <tab :header="headerB" :disabled="!validA">
                            <form-group :valid.sync="validB">
                                <bs-input label="telephone" pattern="^[131|135|170][\d]{10}" error="请输入合法的手机号码"></bs-input>
                            </form-group>
                        </tab>
                        <tab header="step 3" :disabled="!validB">
                            <bs-input  type="textarea" minlength="10"></bs-input>
                            <button type="submit" class="btn btn-primary" :disabled="!valid">提交</button>
                        </tab>
                    </tab-set>
                </form-group>
            </form>
        </doc-code>
        <doc-options>
            <div>
              <p>valid.sync</p>
              <p><code>Boolean</code></p>
              <p><code>null</code></p>
              <p>form group 验证结果</p>
            </div>
        </doc-options>
    </doc-section>
</template>
<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'
import TabSet from 'components/TabSet'
import Tab from 'components/Tab'
import Input from 'components/forms/Input'
import Checkbox from 'components/forms/Checkbox'
import FormGroup from 'components/forms/FormGroup'

export default {
    data () {
        return {
            noValidate: false,
            validA: null,
            validB: null,
            valid: null
        }
    },
    computed: {
        headerA () {
            return 'step 1 valid:' + this.validA;
        },
        headerB () {
            return 'step 2 valid:' + this.validB;
        },
        headerC () {
            return 'step 3 valid:' + this.validC;
        }
    },
    components: {
        docSection,
        docCode,
        docOptions,
        docCallout,
        bsInput: Input,
        FormGroup,
        Checkbox,
        TabSet,
        Tab
    }
}

</script>
