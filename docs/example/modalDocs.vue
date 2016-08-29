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
                <li class="topbar-info-btn">
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
    <modal :show.sync="backdropStaticShow" backdrop-static="false"></modal>
    <div class="btn-group" role="group" aria-label="...">
        <button type="button" class="btn btn-default" @click="normalShow = true">普通弹窗</button>
        <button type="button" class="btn btn-default" @click="smallShow = true">小弹窗</button>
        <button type="button" class="btn btn-default" @click="largeShow = true">大窗口</button>
        <button type="button" class="btn btn-default" @click="slotShow = true">自定义窗口</button>
        <button type="button" class="btn btn-default" @click="backdropStaticShow = true">固定backdrop</button>
        <button type="button" class="btn btn-default" @click="slotShow = true" disabled>禁止弹窗</button>
    </div>
    <doc-code language="markup" title="Component Style">
      <modal :show.sync="normalShow"></modal>
      <modal :show.sync="smallShow" small></modal>
      <modal :show.sync="largeShow" large></modal>
      <modal :show.sync="slotShow">
          <div slot="title">
              自定义标题
          </div>
          <p>
              这里是内容
          </p>
          <div slot="footer">
              这里是尾部
          </div>
      </modal>
      <modal :show.sync="backdropStaticShow" backdrop-static="false"></modal>
    </doc-code>
    <doc-code language="markup" title="Button Style">
          <div class="btn-group" role="group" aria-label="...">
              <button type="button" class="btn btn-default" @click="normalShow = true">普通弹窗</button>
              <button type="button" class="btn btn-default" @click="smallShow = true">小弹窗</button>
              <button type="button" class="btn btn-default" @click="largeShow = true">大窗口</button>
              <button type="button" class="btn btn-default" @click="slotShow = true">自定义窗口</button>
              <button type="button" class="btn btn-default" @click="backdropStaticShow = true">固定backdrop</button>
              <button type="button" class="btn btn-default" @click="slotShow = true" disabled>禁止弹窗</button>
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
                backdropStaticShow: false
            },
            components: {
                modal: VueAdminBootStrap.components.modal
            }
        });
    </doc-code>
    <doc-options>
      <div>
        <p>show</p>
        <p><code>Boolean</code></p>
        <p></p>
        <p>Whether show the component.</p>
      </div>
      <div>
        <p>class</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p>classes to change the style.</p>
      </div>
      <div>
        <p>disabled</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p></p>
      </div>
      <div>
        <p>text</p>
        <p><code>String</code></p>
        <p></p>
        <p>Dropdown button text.</p>
      </div>
      <div>
        <p>type</p>
        <p><code>String</code>, one of <code>default</code>
        <code>primary</code>
        <code>danger</code>
        <code>info</code>
        <code>warning</code>
        <code>success</code></p>
        <p><code>default</code></p>
        <p></p>
      </div>
    </doc-options>
    <h2>Usage</h2>
    <p>Just like the examples. Can use it as the <a target="_blank" href="http://getbootstrap.com/javascript/#modal">original Bootstrap way</a>.</p>

</doc-section>
</template>

<script>
import modal from 'components/Modal'
import dropdown from 'components/Dropdown'
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
export default {
    data: function () {
        return {
            normalShow: false,
            smallShow: false,
            largeShow: false,
            slotShow: false,
            backdropStaticShow: false
        }
    },
    computed: {},
    ready: function () {},
    attached: function () {},
    methods: {},
    components: {
        modal,
        docSection,
        docCode,
        docOptions,
        dropdown
    }
}
</script>

<style lang="css">
</style>
