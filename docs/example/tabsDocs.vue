<template lang="html">
<doc-section id="TabSet" name="TabSet">
    <tab-set>
        <tab header="one" href="#aaa">
            orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </tab>
        <tab header="two" href="#abc">
            内容在这里 two
        </tab>
        <tab-group header="group">
            <tab header="three">
                内容在这里 three
            </tab>
        </tab-group>
    </tab-set>
    <br>
    <br>
    <tab-set class="nav-pills">
        <h4>公共部分</h4>
        <tab header="one">
            orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </tab>
        <tab header="two">
            内容在这里 two
        </tab>
        <tab-group header="group">
            <tab header="three">
                内容在这里 three
            </tab>
        </tab-group>

    </tab-set>
    <doc-code language="markup" title="Component Style">
        <tab-set>
            <tab header="one">
                orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </tab>
            <tab header="two">
                内容在这里 two
            </tab>
            <tab-group header="group">
                <tab header="three">
                    内容在这里 three
                </tab>
            </tab-group>
        </tab-set>
    </doc-code>
    <doc-code language="javascript" title="Javascript Code">
        var app = new Vue({
            el: 'body',
            components: {
                TabSet: VueAdminBootStrap.components.TabSet,
                TabGroup: VueAdminBootStrap.components.TabGroup,
                Tab: VueAdminBootStrap.components.Tab
            }
        });
    </doc-code>
    <doc-options>
      <div>
        <p>active</p>
        <p><code>String</code></p>
        <p><code>''</code></p>
        <p>根据tab的header与active值。设置选中的tab,并加入active样式。如果传入的active 不匹配任何tab的header,则默认显示首个tab</p>
      </div>
      <div>
        <p>class</p>
        <p><code>String</code></p>
        <p><code>nav-tabs</code></p>
        <p>设置该组件的样式</p>
      </div>
    </doc-options>
    </doc-section>
    <doc-section id="Tab" name="Tab">
        <doc-options>
          <div>
            <p>header</p>
            <p><code>String</code></p>
            <p><code>null</code></p>
            <p>该选项卡的名称</p>
          </div>
          <div>
            <p>disabled</p>
            <p><code>Boolean</code></p>
            <p><code>false</code></p>
            <p>是否禁止该选项卡的点击</p>
          </div>
          <div>
            <p>animate</p>
            <p><code>String</code></p>
            <p><code>fade</code></p>
            <p>选项卡显示的动画, 默认为<code>fade</code>. 不显示动画可填入<code>''</code></p>
          </div>
        </doc-options>
        <doc-callout type="warning">
            <h4>警告</h4>
            <ul>
                <li>tab组件必须要求在tabset组件里</li>
                <li>tab组件的header是必填选项</li>
            </ul>
        </doc-callout>
    </doc-section>
    <doc-section id="TabGroup" name="TabGroup">
        <doc-options>
          <div>
            <p>header</p>
            <p><code>String</code></p>
            <p><code>null</code></p>
            <p>该选项卡组的名称</p>
          </div>
          <div>
            <p>disabled</p>
            <p><code>Boolean</code></p>
            <p><code>false</code></p>
            <p>是否禁止该选项卡的点击</p>
          </div>
        </doc-options>
        <doc-callout type="warning">
            <h4>警告</h4>
            <ul>
                <li>tabgroup组件必须要求在tabset组件里</li>
                <li>tabgroup组件不能嵌套tabgroup</li>
            </ul>
        </doc-callout>
    </doc-section>
</template>

<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'
import TabSet from 'components/TabSet'
import TabGroup from 'components/TabGroup'
import Tab from 'components/Tab'
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
        TabSet,
        TabGroup,
        Tab
    }
}
</script>
