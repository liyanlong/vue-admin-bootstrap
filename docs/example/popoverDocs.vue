<template lang="html">
<doc-section id="Popover" name="Popover">

    <popover title="自定义slot"  placement="right" trigger="click">
        <button type="button" class="btn btn-default">自定义slot</button>
        <form slot="content">
              <input type="text" name="name" value="" />
              <br>
              <input type="text" name="name" value="" />
              <br>
              <input type="button" name="button" value="提交"/>
        </form>
    </popover>

    <button type="button" class="btn btn-default">
        <popover title="弹窗"  placement="right" trigger="click" content="简单的内容">只有内容</popover>
    </button>

    <button type="button" class="btn btn-default">
        <popover placement="top" trigger="click" content="left top right bottom">设置方位</popover>
    </button>

    <button type="button" class="btn btn-default">
        <popover placement="top" trigger="hover" content="hello world">移动此处显示</popover>
    </button>

    <button type="button" class="btn btn-default">
        <popover placement="left" trigger="focus" content="hello world">聚焦显示</popover>
    </button>
    <button type="button" class="btn btn-default">
        <popover placement="left" trigger="focus" content="hello world" disabled>禁用</popover>
    </button>
    <popover placement="left" trigger="click" content="hello world">
        <a href="#">单独文本</a>
    </popover>

    <doc-code language="markup" title="Component Style">
        <popover title="自定义slot"  placement="right" trigger="click">
            <button type="button" class="btn btn-default">自定义slot</button>
            <form slot="content">
                  <input type="text" name="name" value="" />
                  <br>
                  <input type="text" name="name" value="" />
                  <br>
                  <input type="button" name="button" value="提交"/>
            </form>
        </popover>

        <button type="button" class="btn btn-default">
            <popover title="弹窗"  placement="right" trigger="click" content="简单的内容">只有内容</popover>
        </button>

        <button type="button" class="btn btn-default">
            <popover placement="top" trigger="click" content="left top right bottom">设置方位</popover>
        </button>

        <button type="button" class="btn btn-default">
            <popover placement="top" trigger="hover" content="hello world">移动此处显示</popover>
        </button>

        <button type="button" class="btn btn-default">
            <popover placement="left" trigger="focus" content="hello world">聚焦显示</popover>
        </button>
        <button type="button" class="btn btn-default">
            <popover placement="left" trigger="focus" content="hello world" disabled>禁用</popover>
        </button>
        <popover placement="left" trigger="click" content="hello world">
            <a href="#">单独文本</a>
        </popover>
    </doc-code>
    <doc-code language="javascript" title="Javascript Code">
        var app = new Vue({
            el: 'body',
            components: {
                popover: VueAdminBootStrap.components.Popover
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
        <p>title</p>
        <p><code>String</code></p>
        <p>''</p>
        <p>弹窗标题,如果为空则不显示</p>
      </div>
      <div>
        <p>content</p>
        <p><code>String</code></p>
        <p><code>''</code></p>
        <p>弹窗内容,可为html格式</p>
      </div>
      <div>
        <p>placement</p>
        <p><code>String</code></p>
        <p><code>right</code></p>
        <p>弹窗放置相对位置. <code>left</code>,<code>top</code>,<code>right</code>,<code>bottom</code></p>
      </div>
      <div>
        <p>class</p>
        <p><code>String</code></p>
        <p><code>''</code></p>
        <p>覆盖的元素的样式</p>
      </div>
      <div>
        <p>disabled</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>是否禁用</p>
      </div>
    </doc-options>
    <doc-callout type="info">
        <h4>Usage</h4>
        <p>popover元素会被span元素替换</p>
    </doc-callout>
    </doc-section>
</template>

<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'
import Popover from 'components/Popover'
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
        Popover
    }
}
</script>
