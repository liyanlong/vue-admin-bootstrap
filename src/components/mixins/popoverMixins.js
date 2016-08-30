import $ from 'jquery'
import coerceBoolean from 'src/utils/coerceBoolean.js'
function caculatePosition (trigger, popover, placement) {
    let position = {}
    // 要求设置为
    placement = placement && ~['top', 'left', 'right', 'bottom'].indexOf(placement) ? placement : 'right'
    switch (placement) {
    case 'top' :
        position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2
        position.top = trigger.offsetTop - popover.offsetHeight
        break
    case 'left':
        position.left = trigger.offsetLeft - popover.offsetWidth
        position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2
        break
    case 'right':
        // 检查trigger 是否为 为 popover的 父元素
        position.left = trigger.offsetLeft + (popover.parentNode === trigger ? trigger.offsetWidth : popover.offsetWidth)
        position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2
        break
    case 'bottom':
        position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2
        position.top = trigger.offsetTop + trigger.offsetHeight
        break
    default:
        console.warn('Wrong placement prop')
    }
    return position
}

export default {
    props: {
        // 触发类型
        // hover, click, focus
        trigger: {
            type: String
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

        // 是否有标题
        header: {
            type: Boolean,
            coerce: coerceBoolean,
            default: true
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
            displayShow: false
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
        // 只传入文本绑定 父元素事件
        const el = this.$el
        this.$els.trigger = el.nodeType === 3 ? el.parentNode : el

        let events = this.trigger === 'contextmenu' ? 'contextmenu'
      : this.trigger === 'hover' ? ['mouseleave', 'mouseenter']
      : this.trigger === 'focus' ? ['blur', 'focus'] : ['click']
        $(this.$els.trigger).on(events.join(' '), (e) => {
            if ($(e.target).closest(this.$els.trigger).length) {
                this.toggle();
            }
        })
    },
    beforeDestroy () {
        $(this.$els.trigger).off()
    },
    watch: {
        show (val) {
            if (val) {
                this.inShow = true;
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
