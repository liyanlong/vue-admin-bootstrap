<template lang="html">
<doc-section id="Modal" name="Modal">
    <modal :show.sync="normalShow"></modal>
    <modal :show.sync="smallShow" small></modal>
    <modal :show.sync="largeShow" large></modal>
    <modal :show.sync="slotShow">
        <div slot="modal-title">
            自定义标题
        </div>
        <div slot="modal-body">
            <dropdown class="" text="帮助" type="default" >
                <li class="topb·ar-info-btn">
                    <a href="#">列表1</a>
                </li>
                <li class="topbar-info-btn">
                    <a href="#">列表1</a>
                </li>
            </dropdown>
        </div>
        <div slot="modal-footer">
            这里是尾部
        </div>
    </modal>
    <modal :show.sync="animateShow" animate=""></modal>
    <modal :show.sync="backdropShow" backdrop="false"></modal>
    <modal :show.sync="backdropStaticShow" backdrop-static="false"></modal>

    <div class="btn-group" role="group">
        <button type="button" class="btn btn-default" @click="normalShow = true">普通弹窗</button>
        <button type="button" class="btn btn-default" @click="smallShow = true">小弹窗</button>
        <button type="button" class="btn btn-default" @click="largeShow = true">大窗口</button>
        <button type="button" class="btn btn-default" @click="slotShow = true">自定义窗口</button>
        <button type="button" class="btn btn-default" @click="backdropShow = true">无遮罩层</button>
        <button type="button" class="btn btn-default" @click="animateShow = true">无动画层</button>
        <button type="button" class="btn btn-default" @click="backdropStaticShow = true">固定backdrop</button>
        <button type="button" class="btn btn-default" @click="normalShow = true" disabled>禁止弹窗</button>
    </div>
    <doc-code language="markup" title="Component Style">
        <modal :show.sync="normalShow"></modal>
        <modal :show.sync="smallShow" small></modal>
        <modal :show.sync="largeShow" large></modal>
        <modal :show.sync="slotShow">
            <div slot="modal-title">
                自定义标题
            </div>
            <div slot="modal-body">
                <dropdown class="" text="帮助" type="default" >
                    <li class="topb·ar-info-btn">
                        <a href="#">列表1</a>
                    </li>
                    <li class="topbar-info-btn">
                        <a href="#">列表1</a>
                    </li>
                </dropdown>
            </div>
            <div slot="modal-footer">
                这里是尾部
            </div>
        </modal>
        <modal :show.sync="animateShow" animate=""></modal>
        <modal :show.sync="backdropShow" backdrop="false"></modal>
        <modal :show.sync="backdropStaticShow" backdrop-static="false"></modal>
    </doc-code>
    <doc-code language="markup" title="Button Style">
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" @click="normalShow = true">普通弹窗</button>
            <button type="button" class="btn btn-default" @click="smallShow = true">小弹窗</button>
            <button type="button" class="btn btn-default" @click="largeShow = true">大窗口</button>
            <button type="button" class="btn btn-default" @click="slotShow = true">自定义窗口</button>
            <button type="button" class="btn btn-default" @click="backdropShow = true">无遮罩层</button>
            <button type="button" class="btn btn-default" @click="animateShow = true">无动画层</button>
            <button type="button" class="btn btn-default" @click="backdropStaticShow = true">固定backdrop</button>
            <button type="button" class="btn btn-default" @click="normalShow = true" disabled>禁止弹窗</button>
        </div>
    </doc-code>
    <doc-code language="javascript" title="Javascript Code">
        var app = new Vue({
            el: 'body',
            data: {
                normalShow: false,
                smallShow: false,
                largeShow: false,
                slotShow: false,
                backdropShow: false,
                backdropStaticShow: false,
                animateShow: false
            },
            components: {
                modal: VueAdminBootStrap.components.Modal
            }
        });
    </doc-code>
    <doc-options>
      <div>
        <p>show</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>是否打开模态框</p>
      </div>
      <div>
        <p>backdrop</p>
        <p><code>Boolean</code></p>
        <p><code>true</code></p>
        <p>是否有遮罩层</p>
      </div>
      <div>
        <p>backdrop-static</p>
        <p><code>Boolean</code></p>
        <p><code>true</code></p>
        <p>点击遮罩层是否可以关闭</p>
      </div>
      <div>
        <p>animate</p>
        <p><code>String</code></p>
        <p><code>fade</code></p>
        <p>设置弹窗动画, <code>''</code> 无动画</p>
      </div>
      <div>
        <p>large</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>是否为大的模态框</p>
      </div>
      <div>
        <p>small</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>是否为小的模态框</p>
      </div>
    </doc-options>
    <doc-callout type="info">
        <h4>Usage</h4>
        <p>使用的时候如果要自定义modal内容,可以设置slot.<code>modal-title</code>, <code>modal-body</code>, <code>modal-footer</code></p>
    </doc-callout>
</doc-section>
</template>

<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'

import modal from 'components/Modal'
import dropdown from 'components/Dropdown'
export default {
    data: function () {
        return {
            normalShow: false,
            smallShow: false,
            largeShow: false,
            slotShow: false,
            backdropShow: false,
            backdropStaticShow: false,
            animateShow: false
        }
    },
    computed: {},
    ready: function () {},
    attached: function () {},
    methods: {},
    components: {
        docSection,
        docCode,
        docOptions,
        docCallout,
        modal,
        dropdown
    }
}
</script>
