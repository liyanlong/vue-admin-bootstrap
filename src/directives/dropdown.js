import $ from 'jquery'
export default function (Vue) {
    Vue.directive('dropdown', {
        $el: false,
        bind () {
            this.$el = $(this.el);
            var openClass = 'open';
            // 注册事件
            this.$el.on('click', (e) => {
                var relatedTarget = {
                    relatedTarget: this.el
                };
                if (this.$el.hasClass(openClass)) {
                    // 已打开, 准备关闭
                    this.vm.$emit('dropdown-hide', e = $.Event('hide.bs.dropdown', relatedTarget));
                    if (e.isDefaultPrevented()) {
                        return;
                    }
                    // 已关闭
                    this.$el.removeClass(openClass);
                    this.vm.$emit('dropdown-hidden', e = $.Event('hidden.bs.dropdown', relatedTarget));
                    this.toggle = true;
                    return;
                }

                // 已关闭, 准备打开
                this.vm.$emit('dropdown-show', e = $.Event('show.bs.dropdown', relatedTarget));
                if (e.isDefaultPrevented()) {
                    return;
                }
                this.$el.addClass(openClass);
                // 已开启
                this.vm.$emit('dropdown-shown', e = $.Event('shown.bs.dropdown'), relatedTarget);
            });
        },
        update () {
        },
        unbind () {
            this.$el.off('click');
        }
    });
}
