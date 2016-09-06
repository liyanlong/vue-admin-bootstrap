<template lang="html">
<div class="modal" :class="animate"  v-el:modal>
    <div class="modal-dialog" :class="{'modal-lg': large, 'modal-sm': small}" >
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close"  aria-label="Close"  @click="hide"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">
                    <slot name="modal-title">
                        标题
                    </slot>
                </h4>
            </div>
            <div class="modal-body">
                <slot name="modal-body">
                    <p>One fine body&hellip;</p>
                </slot>
            </div>

            <div class="modal-footer">
                <slot name="modal-footer">
                    <button type="button" class="btn btn-default" @click="hide">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </slot>
            </div>
        </div>
    </div>
</div>
<div class="modal-backdrop" :class="animate"  v-el:backdrop></div>
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
            return transitionEnd && this.animate !== '';
        }
    },
    ready () {
        // 设置点击元素 是否关闭弹层
        if (this.backdropStatic) {
            $(this.$els.modal).on('click', (e) => {
                // modal元素
                if (e.target === e.currentTarget) {
                    // 关闭
                    // 不能执行 close 方法
                    this.hide();
                }
            });
        }
        $(this.$els.backdrop).remove();
        $(this.$els.modal).remove();
    },
    beforeDestroy () {
        $(this.$els.modal).off();
    },
    methods: {
        hide () {
            this.show = false;
        },
        _backdrop (callback) {
            var doAnimate = this.doAnimate;
            var $body = $(document.body);
            var backdropEl = this.$els.backdrop;
            var $backdrop = $(backdropEl);

            // 打开背景层
            if (this.show && this.backdrop) {
                // 去掉 body 的 scroll-ball
                $body.addClass('modal-open');

                // 背景层打开
                $(backdropEl)
                .appendTo('body')
                .show();

                // 是否需要有动画css,如果有则强制重绘
                if (doAnimate) {
                    // force reflow
                    backdropEl.offsetWidth;
                }
                // 设置css动画，显示
                $backdrop.addClass('in');

                // 没有回调函数, 不执行回到函数
                if (!callback || typeof callback !== 'function') {
                    return;
                }
                // 打开后执行回调函数
                doAnimate ? $backdrop.one(transitionEnd, callback)
                        : callback();
                return;
            }

            // 关闭背景层
            if (!this.show && this.backdrop) {
                $backdrop.removeClass('in');
                let callbackRemove = () => {
                    this._backdropDestroy();
                    if (callback && typeof callback === 'function') {
                        callback();
                    }
                };
                doAnimate ? $backdrop.one(transitionEnd, callbackRemove) : callbackRemove();
                return;
            }

            // 直接执行回调函数
            if (callback || typeof callback !== 'function') {
                callback();
            }
        },
        _backdropDestroy () {
            $(this.$els.backdrop).remove();
        },
        _close () {
            var modal = this.$els.modal;
            var $modal = $(modal);
            var doAnimate = this.doAnimate;
            $modal
              .removeClass('in');

            // 是否有动画
            if (doAnimate) {
                $modal.one(transitionEnd, () => { this._closeModal(); });
            } else {
                this._closeModal();
            }
        },
        _closeModal () {
            var $body = $(document.body);
            // 隐藏 modal
            $(this.$els.modal)
            .hide()
            .remove();

            // 动画结束后执行 hidden.v.modal 事件
            this._backdrop(() => {
                $body.removeClass('modal-open');
            });
        },
        // elment 打开
        _open () {
            var modal = this.$els.modal;
            var $modal = $(modal);
            var doAnimate = this.doAnimate;
            this._backdrop(() => {
                // this.$appendTo('body');
                // 打开样式
                $modal
                .appendTo('body')
                .show()
                .scrollTop(0);
                if (doAnimate) {
                    // force reflow
                    modal.offsetWidth;
                }
                $modal.addClass('in');
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
