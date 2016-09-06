<template lang="html">
<doc-section id="Dropdown" name="Dropdown">

    <dropdown text="基本下拉列表">
        <li><a href="#1">列表1</a></li>
        <li><a href="#2">列表2</a></li>
    </dropdown>

    <div class="btn-group">
        <button type="button" class="btn btn-primary">按钮A</button>
        <dropdown class="" text="按钮组B">
            <li><a href="#A">列表A</a></li>
            <li><a href="#b">列表B</a></li>
        </dropdown>
    </div>

    <dropdown text="列表上拉" placement="top">
        <li><a href="#ASDS">列表one</a></li>
        <li><a href="#AA">列表two</a></li>
    </dropdown>

    <dropdown text="向右对齐" placement="right">
        <li><a href="#ASDS">列表one</a></li>
        <li><a href="#AA">列表two</a></li>
    </dropdown>

    <dropdown text="禁用下拉"  disabled>
        <li><a href="#ASDS">列表one</a></li>
        <li><a href="#AA">列表two</a></li>
    </dropdown>

    <dropdown text="警告下拉按钮" type="danger">
        <li><a href="#ASDS">列表one</a></li>
        <li><a href="#AA">列表two</a></li>
    </dropdown>


    <dropdown text="默认打开" :show.sync="dropdownShow">
        <li><a href="#ASDS">列表one</a></li>
        <li><a href="#AA">列表two</a></li>
    </dropdown>
    <br />
    <br />
    <dropdown text="自定义下拉框">
        <ul slot="dropdown-menu" class="dropdown-menu">
            <li><a href="#ASDS">列表one</a></li>
            <li><a href="#AA">列表two</a></li>
        </ul>
    </dropdown>
    <doc-code language="markup" title="Component Style">
        <dropdown text="基本下拉列表">
            <li><a href="#1">列表1</a></li>
            <li><a href="#2">列表2</a></li>
        </dropdown>

        <div class="btn-group">
            <button type="button" class="btn btn-primary">按钮A</button>
            <dropdown class="" text="按钮组B">
                <li><a href="#A">列表A</a></li>
                <li><a href="#b">列表B</a></li>
            </dropdown>
        </div>

        <dropdown text="列表上拉" placement="top">
            <li><a href="#ASDS">列表one</a></li>
            <li><a href="#AA">列表two</a></li>
        </dropdown>

        <dropdown text="向右对齐" placement="right">
            <li><a href="#ASDS">列表one</a></li>
            <li><a href="#AA">列表two</a></li>
        </dropdown>

        <dropdown text="禁用下拉"  disabled>
            <li><a href="#ASDS">列表one</a></li>
            <li><a href="#AA">列表two</a></li>
        </dropdown>

        <dropdown text="警告下拉按钮" type="danger">
            <li><a href="#ASDS">列表one</a></li>
            <li><a href="#AA">列表two</a></li>
        </dropdown>
        <dropdown text="默认打开" :show="dropdownShow">
            <li><a href="#ASDS">列表one</a></li>
            <li><a href="#AA">列表two</a></li>
        </dropdown>
        <dropdown text="自定义下拉框">
            <ul slot="dropdown-menu" class="dropdown-menu">
                <li><a href="#ASDS">列表one</a></li>
                <li><a href="#AA">列表two</a></li>
            </ul>
        </dropdown>
    </doc-code>

    <doc-code language="javascript" title="Javascript Code">
        var app = new Vue({
            el: 'body',
            data: {
                dropdownShow: true
            },
            components: {
                dropdown: VueAdminBootStrap.components.Dropdown
            }
        });
    </doc-code>
    <doc-options>
      <div>
        <p>show</p>
        <p><code>Boolean</code></p>
        <p>false</p>
        <p>是否打开下拉框</p>
      </div>
      <div>
        <p>class</p>
        <p><code>String</code></p>
        <p>''</p>
        <p>额外class</p>
      </div>
      <div>
        <p>placement</p>
        <p><code>String</code></p>
        <p><code>left down</code></p>
        <p>可选值:<code>top</code>,<code>right</code>,<code>left</code>,<code>bottom</code>组合位置使用空格分隔</p>
      </div>
      <div>
        <p>text</p>
        <p><code>String</code></p>
        <p><code>''</code></p>
        <p>文本内容</p>
      </div>
      <div>
        <p>type</p>
        <p><code>String</code></p>
        <p><code>'default'</code></p>
        <p>下拉按钮类型 <code>default</code>,<code>info</code>,<code>primary</code>,<code>danger</code>,<code>alert</code></p>
      </div>
      <div>
        <p>disabled</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>是否禁用下拉</p>
      </div>
    </doc-options>
    <doc-callout type="info">
        <h4>Usage</h4>
        <p>默认slot为 <code>ul.dropdown-menu</code>子节点。可以自定义<code>ul slot="dropdown-menu"</code></p>
    </doc-callout>
    </doc-section>
</template>

<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'
import dropdown from 'components/Dropdown'
export default {
    data: function () {
        return {
            dropdownShow: true
        }
    },
    components: {
        docSection,
        docCode,
        docOptions,
        docCallout,
        dropdown
    }
}
</script>
