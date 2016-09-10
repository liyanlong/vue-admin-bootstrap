<template lang="html">
    <div class="panel-group" role="tablist" aria-multiselectable="true">
        <slot></slot>
    </div>
</template>

<script>
import $ from 'jquery'
import transitionEvent from 'src/utils/transitionEvent.js'
const transitionEnd = transitionEvent.end
export default {
    props: {
        active: {
            type: String,
            default: null
        }

    },
    computed: {
        transitioning () {
            var ret = false;
            $.each(this.panels, (index, panel) => {
                if (panel.transitioning) {
                    ret = panel.transitioning;
                    return false;
                }
            });
            return ret;
        }
    },
    data () {
        return {
            panels: [],
            show: null
        };
    },
    created () {
        this._panelGroup = true;
    },
    ready () {
        // 默认展开
        if (!this.active) {
            this.show = this.panels[0] || null;
            return;
        }
        $.each(this.panels, (index, panel) => {
            if (panel.id === this.active) {
                if (panel !== this.show) {
                    this.show = panel;
                }
                return false;
            }
        });
    },
    methods: {
    },
    watch: {
        show (panel, oldPanel) {
            if (oldPanel) {
                oldPanel.transitioning = true;
                this.$nextTick(() => {
                    $(oldPanel.$els.panelContainer).height(0);
                });
                $(oldPanel.$els.panelContainer).one(transitionEnd, () => {
                    oldPanel.transitioning = false;
                });
            }

            // 有panel 正在打开中
            if (panel) {
                panel.transitioning = true;
                this.$nextTick(() => {
                    $(panel.$els.panelContainer).height(panel.$els.panelBody.offsetHeight);
                });
                $(panel.$els.panelContainer).one(transitionEnd, () => {
                    panel.transitioning = false;
                });
            }
        }
    }
};
</script>
