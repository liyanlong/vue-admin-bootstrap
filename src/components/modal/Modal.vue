<template lang="html">
<div class="modal" :class="{'fade': animate}" >
    <div class="modal-dialog" :class="{'modal-lg': large, 'modal-sm': small}" >
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
import transitionEvent from 'src/utils/transitionEvent.js'
import coerceBoolean from 'src/utils/coerceBoolean'
const transitionEnd = transitionEvent.end
export default {
    props: {
        show: {
            type: Boolean,
            twoWay: true,
            require: true
        },
        backdrop: {
            type: Boolean,
            coerce: coerceBoolean,
            default: true
        },
        // 点击遮罩层是否关闭
        backdropStatic: {
            type: Boolean,
            coerce: coerceBoolean,
            default: true
        },
        animate: {
            type: String,
            default: 'fade'
        },
        large: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        small: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        }
    },
    data () {
        return {};
    },
    computed: {
        modalSize () {
            return {
                large: 'modal-lg',
                small: 'modal-sm'
            }[this.type] || '';
        },
        doAnimate () {
            return transitionEnd && this.animate !== '';
        }
    },
    attached () {
        console.log('attached');
    },
    detached () {
        console.log('detach');
    },
    destroyed () {
        this._backdropDestroy();
    },
    methods: {
        hide () {
            this.show = false;
        },
        _backdrop (callback) {
            var doAnimate = this.doAnimate;
            var $body = $(document.body);
            console.log(callback.toString(), this.show, this.backdrop);
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
                        // modal元素
                        if (e.target === e.currentTarget) {
                            // 关闭
                            // 不能执行 close 方法
                            this.hide();
                        }
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
                doAnimate ? this.$backdrop.one(transitionEnd, callback)
                        : callback();
                return;
            }

            // 关闭背景层
            if (!this.show && this.backdrop) {
                this.$backdrop.removeClass('in');
                let callbackRemove = () => {
                    this._backdropDestroy();
                    if (callback && typeof callback === 'function') {
                        callback();
                    }
                };
                doAnimate ? this.$backdrop.one(transitionEnd, callbackRemove) : callbackRemove();
                return;
            }

            // 直接执行回调函数
            if (!callback || typeof callback !== 'function') {
                callback();
            }
        },
        _backdropDestroy () {
            this.$backdrop && this.$backdrop.remove();
            this.$backdrop = null;
        },
        _close () {
            var el = this.$el;
            var $el = $(el);
            var doAnimate = this.doAnimate;
            var e;
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
                $el.one(transitionEnd, () => { this._closeModal(); });
            } else {
                this._closeModal();
            }
        },
        _closeModal () {
            var $body = $(document.body);
            // 隐藏 modal
            $(this.$el).hide();

            // 移除modal
            this.$remove();

            // 动画结束后执行 hidden.v.modal 事件
            this._backdrop(() => {
                $body.removeClass('modal-open');
                this.$emit('hidden-modal', $.Event('hidden.v.modal'));
            });
        },
        // elment 打开
        _open () {
            var el = this.$el;
            var $el = $(el);
            var doAnimate = this.doAnimate;
            this._backdrop(() => {
                this.$appendTo('body');
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
                this._open();
            } else {
                this._close();
            }
        }
    }
};
</script>
