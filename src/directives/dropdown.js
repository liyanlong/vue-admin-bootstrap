import $ from 'jquery'

export default function (Vue) {
    var openClass = 'open';
    var dropdownList = [];
    // 关闭其它下拉菜单
    var clearMenus = function (e) {
        if (e && e.which === 3) {
            return;
        }
        $(dropdownList).each(function (index, directive) {
            var el = directive.el;
            var $el = $(el);
            var relatedTarget = {
                relatedTarget: el
            };
            if (!$el.hasClass('open')) {
                return;
            }
            if (e && e.type === 'click' && /input|textarea/i.test(e.target.tagName) && $.contains(el, e.target)) {
                return;
            }
            directive.vm.$emit('dropdown-hide', e = $.Event('hide.bs.dropdown', relatedTarget));
            if (e.isDefaultPrevented()) {
                return;
            }
            $el.removeClass('open');
            directive.vm.$emit($.Event('hidden.bs.dropdown', relatedTarget));
        });
    };
    Vue.directive('dropdown', {
        $el: false,
        bind () {
            this.$el = $(this.el);
            dropdownList.push(this);

            // 注册打开事件
            this.$el.on('click.v.dropdown', (e) => {
                var relatedTarget = {
                    relatedTarget: this.el
                };
                var isActive = this.$el.hasClass(openClass);
                clearMenus();
                if (!isActive) {
                    // 已关闭, 准备打开
                    this.vm.$emit('dropdown-show', e = $.Event('show.bs.dropdown', relatedTarget));
                    if (e.isDefaultPrevented()) {
                        return;
                    }
                    this.$el.addClass(openClass);
                    // 已打开下拉菜单
                    this.vm.$emit('dropdown-shown', e = $.Event('shown.bs.dropdown'), relatedTarget);
                }
                return false;
            });
        },
        update () {
        },
        unbind () {
            var index = -1;
            this.$el.off('.v.dropdown');
            // 从下拉列表队列中移除
            dropdownList.forEach((dropdown, offset) => {
                if (dropdown === this) {
                    index = offset;
                }
            });
            if (index >= 0) {
                dropdownList.splice(index, 1);
            }
        }
    });
    // 文档注册关闭菜单事件
    $(document).on('click.v.dropdown.data-api', clearMenus);
}
