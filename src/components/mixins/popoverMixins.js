import $ from 'jquery'
import coerceBoolean from 'src/utils/coerceBoolean.js'
import getPosition from 'src/utils/getPosition.js'
function caculatePosition (trigger, popover, placement) {
    placement = placement && ~['top', 'left', 'right', 'bottom'].indexOf(placement) ? placement : 'right'
    return getCalculatedOffset(getPosition(trigger), popover, placement)
}

function getCalculatedOffset (pos, popover, placement) {
    var actualWidth = popover.offsetWidth
    var actualHeight = popover.offsetHeight
    switch (placement) {
    case 'bottom':
        return { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 }
    case 'top':
        return { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 }
    case 'left':
        return { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth }
    }
    return { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
}
export default {
    props: {
        // 触发类型
        // hover, click, focus
        trigger: {
            type: String
        },
        'class': {
            type: String,
            defualt: ''
        },
        // 效果
        effect: {
            type: String,
            default: 'fade'
        },

        // 标题名称
        title: {
            type: String
        },

        // 内容
        content: {
            type: String
        },

        // 弹出位置
        placement: {
            type: String,
            default: 'right'
        },
        animate: {
            type: Boolean,
            coerce: coerceBoolean,
            default: true
        },
        disabled: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        }
    },
    data () {
        return {
            position: {
                top: 0,
                left: 0
            },

            // 是否关闭
            show: false,

            //  animate class 'in'
            inShow: false,

            // display block | none
            displayShow: false,

            // 挂载目标元素
            selector: 'body'
        }
    },
    methods: {
        toggle (val) {
            var show = val instanceof Boolean ? val : !this.show;
            if (show) {
                this.displayShow = true;
            }
            this.show = show;
        }
    },
    ready () {
        // 设置触发的元素
        const el = this.$els.trigger;
        this.$els.trigger = el.parentNode.nodeName === 'BUTTON' ? el.parentNode : el
        let events = this.trigger === 'contextmenu' ? 'contextmenu'
      : this.trigger === 'hover' ? ['mouseleave', 'mouseenter']
      : this.trigger === 'focus' ? ['blur', 'focus'] : ['click'];
        $(this.$els.trigger).on(events.join(' '), (e) => {
            if (this.disabled || (!this.content && !this._slotContents['content'])) {
                return false;
            }

            if ($(e.target).closest(this.$els.trigger).length) {
                this.toggle();
            }
            return false;
        });
    },
    beforeDestroy () {
        $(this.$els.trigger).off()
    },
    watch: {
        show (val) {
            if (val) {
                this.inShow = true;
                $(this.$els.popover).appendTo(this.selector)
                this.position = caculatePosition(this.$els.trigger, this.$els.popover, this.placement);
            } else {
                $(this.$els.popover).one('transitionend', () => {
                    this.displayShow = false;
                });
                // 先执行过渡动画
                this.inShow = false;
            }
        }
    }
}
