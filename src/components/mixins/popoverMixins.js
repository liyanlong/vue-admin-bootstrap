import $ from 'jquery'
import coerceBoolean from 'src/utils/coerceBoolean.js'
function caculatePosition (trigger, popover, placement) {
    let position = {}
    // 过滤位置
    placement = placement && ~'top,left,right,bottom'.split(',').indexOf(placement) ? placement : 'right';
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
        position.left = trigger.offsetLeft + popover.offsetWidth
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
        const trigger = this.$els.trigger
        let events = this.trigger === 'contextmenu' ? 'contextmenu'
      : this.trigger === 'hover' ? ['mouseleave', 'mouseenter']
      : this.trigger === 'focus' ? ['blur', 'focus'] : ['click']
        $(trigger).on(events.join(' '), () => this.toggle())
    },
    beforeDestroy () {
        $(this.$els.trigger).off()
    },
    watch: {
        show (val) {
            if (val) {
                this.position = caculatePosition(this.$els.trigger, this.$els.popover, this.placement);
                this.inShow = true;
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
