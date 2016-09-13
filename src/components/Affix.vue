<template>
  <div class="hidden-print hidden-xs hidden-sm">
    <nav  v-el:affix class="bs-docs-sidebar" :class="{
        'affix':affixed
        }" :style="{top:top}">
      <slot></slot>
    </nav>
  </div>
</template>
<script>
import coerceNumber from 'src/utils/coerceNumber.js'
import $ from 'jquery'
function getElementPosition (el) {
    let rect = el.getBoundingClientRect()
    let scroll = {}
    let element = {};
    for (let type of ['Top', 'Left']) {
        let t = type.toLowerCase()
        let ret = window['page' + (type === 'Top' ? 'Y' : 'X') + 'Offset']
        const method = 'scroll' + type
        if (typeof ret !== 'number') {
            // ie6,7,8 standard mode
            ret = document.documentElement[method]
            if (typeof ret !== 'number') {
                // quirks mode
                ret = document.body[method]
            }
        }
        scroll[t] = ret
        element[t] = scroll[t] + rect[t];
    }
    return element;
}
export default {
    props: {
        //
        offsetTop: {
            type: Number,
            coerce: coerceNumber,
            default: 0
        },
        offsetBottom: {
            type: Number,
            coerce: coerceNumber,
            default: 0
        }
    },
    data () {
        return {
            affixed: false,
            affixedBottom: false
        }
    },
    computed: {
        top () {
            if (this.affixed && !this.affixedBottom) {
                return this.offsetTop > 0 ? this.offsetTop + 'px' : null
            }
            if (this.affixedBottom) {
                return window.pageYOffset - getElementPosition(this.$els.affix).top + 'px';
            }
        }
    },
    methods: {
        checkScroll () {
            // if is hidden don't calculate anything
            if (!(this.$el.offsetWidth || this.$el.offsetHeight || this.$el.getClientRects().length)) { return }
            // get window scroll and element position to detect if have to be normal or affixed
            let scroll = {}
            let element = {}
            const rect = this.$el.getBoundingClientRect()
            for (let type of ['Top', 'Left']) {
                let t = type.toLowerCase()
                let ret = window['page' + (type === 'Top' ? 'Y' : 'X') + 'Offset']
                const method = 'scroll' + type
                if (typeof ret !== 'number') {
                    // ie6,7,8 standard mode
                    ret = document.documentElement[method]
                    if (typeof ret !== 'number') {
                        // quirks mode
                        ret = document.body[method]
                    }
                }
                scroll[t] = ret
                element[t] = scroll[t] + rect[t];
            }
            let fix = scroll.top > element.top - this.offsetTop
            if (this.affixed !== fix) { this.affixed = fix }
        }
    },
    ready () {
        // this.checkScroll()
        $(window).on('scroll resize', () => this.checkScroll())
    },
    beforeDestroy () {
        $(window).off('scroll resize', () => this.checkScroll())
    }
}
</script>
