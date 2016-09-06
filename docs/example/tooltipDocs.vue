<template lang="html">
<doc-section id="Tooltip" name="Tooltip">
    <p>
        这是一个文本内容
        <code>
            <tooltip trigger="hover" content="hello world">移动此处显示提示</tooltip>
        </code>
        ，
        <tooltip trigger="click" content="hello world" placement="top">
            <code>点击此处提示</code>
        </tooltip>
        ,
        <tooltip trigger="focus" content="hello world" class="btn btn-default">
            按钮聚焦
        </tooltip>
        <tooltip trigger="click" class="btn btn-info" placement="bottom">
            自定义tooltip
            <span slot="content">
                Hello World
            </span>
        </tooltip>
        <tooltip trigger="click" class="btn btn-primary" tooltip-class="admin-tooltip" content="abc">
            自定义tooltip Class
        </tooltip>
    </p>
    <doc-code language="markup" title="Component Style">
        <p>
            这是一个文本内容
            <code>
                <tooltip trigger="hover" content="hello world">移动此处显示提示</tooltip>
            </code>
            ，
            <tooltip trigger="click" content="hello world" placement="top">
                <code>点击此处提示</code>
            </tooltip>
            ,
            <tooltip trigger="focus" content="hello world" class="btn btn-default">
                按钮聚焦
            </tooltip>
            <tooltip trigger="click" class="btn btn-info" placement="bottom">
                自定义tooltip
                <span slot="content">
                    Hello World
                </span>
            </tooltip>
            <tooltip trigger="click" class="btn btn-primary" tooltip-class="admin-tooltip" content="abc">
                自定义tooltip Class
            </tooltip>
        </p>
    </doc-code>
    <doc-code language="javascript" title="Javascript Code">
        var app = new Vue({
            el: 'body',
            components: {
                tooltip: VueAdminBootStrap.components.Tooltip
            }
        });
    </doc-code>
    <doc-options>
      <div>
        <p>trigger</p>
        <p><code>String</code></p>
        <p><code>click</code></p>
        <p>触发显示的方式。可选值<code>hover</code>, <code>click</code>, <code>focus</code></p>
      </div>
      <div>
        <p>class</p>
        <p><code>String</code></p>
        <p><code>''</code></p>
        <p>tooltip标签会转化为span标签, 附加的class 样式会附在 span标签上</p>
      </div>
      <div>
        <p>tooltip-class</p>
        <p><code>String</code></p>
        <p><code>tooltip</code></p>
        <p>工具提示样式，此外已经实现的另一种样式名为<code>tooltip-class</code></p>
      </div>
      <div>
        <p>content</p>
        <p><code>String</code></p>
        <p><code>''</code></p>
        <p>tooltip内容,可为html格式</p>
      </div>
      <div>
        <p>placement</p>
        <p><code>String</code></p>
        <p><code>right</code></p>
        <p>弹窗放置相对位置. <code>left</code>,<code>top</code>,<code>right</code>,<code>bottom</code></p>
      </div>
      <div>
        <p>disabled</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>是否禁用</p>
      </div>
    </doc-options>
    </doc-section>
</template>

<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'
import Tooltip from 'components/Tooltip'
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
        Tooltip
    }
}
</script>
