<template lang="html">
<div class="modal" :class="{'fade': animate}" >
    <div class="modal-dialog" >
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close"  aria-label="Close"  @click="hide"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">
                    <slot name="title">title</slot>
                </h4>
            </div>
            <div class="modal-body">
                <slot>
                    <p>One fine body&hellip;</p>
                </slot>
            </div>
            <div class="modal-footer">
                <slot name="foot">
                    <button type="button" class="btn btn-default" @click="hide">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </slot>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery'
export default {
    props: {
        show: {
            type: Boolean,
            twoWay: true,
            require: true
        },
        backdrop: {
            type: Boolean,
            default: true
        },
        backdropStatic: {
            type: Boolean,
            default: true
        },
        animate: {
            type: String,
            default: 'fade'
        }
    },
    data () {
        return {
        };
    },
    computed: {
        modalSize () {
            return {
                large: 'modal-lg',
                small: 'modal-sm'
            }[this.type] || '';
        },
        doAnimate () {
            return $.support.transition && this.animate !== '';
        }
    },
    compiled () {
        console.log('compile');
    },
    ready () {

    },
    attached () {
        console.log('attached');
        this.$appendTo('body');
    },
    detached () {
        console.log('detach');
    },
    destroyed () {

    },
    methods: {
        backdrop (callback) {
            var doAnimate = this.doAnimate;
            var $body = $(document.body);
            console.log(this.show, this.backdrop);

            // 打开背景层
            if (this.show && this.backdrop) {
                // 去掉 body 的 scroll-ball
                $body.addClass('modal-open');

                // 新建 背景层
                this.$backdrop = $(document.createElement('div'))
                    .addClass('modal-backdrop ' + this.animate)
                    .appendTo('body');
                // 设置点击元素 是否关闭弹层
                if (this.backdropStatic) {
                    $(this.$el).on('click.v.close.modal', (e) => {
                        // 不为 modal元素
                        if (e.target !== e.currentTarget) {
                            return;
                        }
                        this.close();
                    });
                }
                // 是否需要有动画css,如果有则强制重绘
                if (doAnimate) {
                    // force reflow
                    this.$backdrop[0].offsetWidth;
                }
                // 设置css动画
                this.$backdrop.addClass('in');

                // 没有回调函数, 不执行回到函数
                if (!callback || typeof callback !== 'function') {
                    return;
                }
                // 打开后执行回调函数
                doAnimate ? this.$backdrop.one('bsTransitionEnd', callback)
                        : callback();
                return;
            }

            // 关闭背景层
            if (!this.show && this.backdrop) {
                console.log(this.$backdrop);
                this.$backdrop.removeClass('in');
                let callbackRemove = () => {
                    this.$backdrop && this.$backdrop.remove()
                    this.$backdrop = null;
                    if (!callback || typeof callback !== 'function') {
                        callback();
                    }
                };
                doAnimate ? this.$backdrop.one('bsTransitionEnd', callbackRemove) : callbackRemove();
                $body.removeClass('modal-open');
                return;
            }

            // 直接执行回调函数
            if (!callback || typeof callback !== 'function') {
                callback();
            }
        },
        hide () {
            this.show = false;
        },
        close (e) {
            var el = this.$el;
            var $el = $(el);
            var doAnimate = this.doAnimate;
            if (e) {
                e.preventDefault();
            }
            this.$emit('hide-modal', e = $.Event('hide.v.modal'));
            // modal没有打开 或者阻止了 事件
            if (e.isDefaultPrevented()) {
                return;
            }
            // 取消事件
            $el
              .removeClass('in')
              .off('click.v.close.modal');

            // 是否有动画
            if (doAnimate) {
                $el.one('bsTransitionEnd', () => { this.closeModal(); });
            } else {
                this.closeModal();
            }
        },
        closeModal () {
            var $body = $(document.body);
            // 隐藏 modal
            $(this.$el).hide();
            // 动画结束后执行 hidden.v.modal 事件
            this.backdrop(() => {
                $body.removeClass('modal-open');
                this.$emit('hidden-modal', $.Event('hidden.v.modal'));
            });
        },
        // elment 打开
        open () {
            var el = this.$el;
            var $el = $(el);
            var doAnimate = this.doAnimate;
            this.backdrop(() => {
                // 打开样式
                $el
                  .show()
                  .scrollTop(0);
                if (doAnimate) {
                    // force reflow
                    el.offsetWidth;
                }
                $el.addClass('in');
            });
        }
    },
    components: {},
    watch: {
        show (val, oldValue) {
            if (val) {
                // 需要打开
                this.open();
            } else {
                this.close();
            }
        }
    }
};
</script>
