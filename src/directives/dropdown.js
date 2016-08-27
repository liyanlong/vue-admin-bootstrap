import $ from 'jquery'

export default {
    install: function (Vue, options) {
        factory(Vue, options);
    }
}

function factory (Vue, options) {
    var openClass = 'open';
    var dropdownList = [];
    // 关闭其它下拉菜单
    function clearMenus (e) {
        if (e && e.which === 3) {
            return;
        }
        // 所有下拉列表
        $(dropdownList).each(function (index, directive) {
            var el = directive.el;
            var $parent = directive.$parent;
            var relatedTarget = {
                relatedTarget: directive.$dropdownToggle[0]
            };
            if (!$parent.hasClass('open')) {
                return;
            }
            if (e && e.type === 'click' && /input|textarea/i.test(e.target.tagName) && $.contains(el, e.target)) {
                return;
            }
            directive.vm.$emit('dropdown-hide', e = $.Event('hide.bs.dropdown', relatedTarget));

            if (e.isDefaultPrevented()) {
                return;
            }

            if (directive.modifiers.sync) {
                directive.set(false);
            }

            $parent.removeClass('open');
            directive.vm.$emit($.Event('hidden.bs.dropdown', relatedTarget));
        });
    };

    Vue.directive('dropdown', {
        $el: null,
        twoWay: true,
        open () {
            var isActive = this.$parent.hasClass(openClass);
            if (isActive) {
                return;
            }
            this.$dropdownToggle.trigger('click.v.dropdown');
        },
        close () {
            var isActive = this.$parent.hasClass(openClass);
            if (!isActive) {
                return;
            }
            this.$dropdownToggle.trigger('click.v.dropdown');
        },
        bind () {
            // 下拉根元素
            this.$parent = $(this.el);
            this.$dropdownToggle = this.$parent.find('.dropdown-toggle');
            dropdownList.push(this);
            // 注册打开事件
            this.$dropdownToggle.on('click.v.dropdown', (e) => {
                console.log('toggle');
                // 如果拥有disabled属性
                if (this.$dropdownToggle.is('.disabled, :disabled')) {
                    // 允许事件冒泡 这样可以触发 document 的 click.v.dropdown.data-api 等事件,
                    // 关闭其它下拉框
                    return;
                }
                var relatedTarget = {
                    relatedTarget: this.$dropdownToggle[0]
                };
                var isActive = this.$parent.hasClass(openClass);
                // 先关闭所有的下拉窗口
                clearMenus();
                // 如果之前是关闭的窗口, 打开该窗口
                if (!isActive) {
                    // 已关闭, 准备打开
                    this.vm.$emit('dropdown-show', e = $.Event('show.bs.dropdown', relatedTarget));
                    if (e.isDefaultPrevented()) {
                        return;
                    }
                    if (this.modifiers.sync) {
                        this.set(true);
                    }
                    this.$parent.addClass(openClass);

                    // 已打开下拉菜单
                    this.vm.$emit('dropdown-shown', e = $.Event('shown.bs.dropdown'), relatedTarget);
                }
                return false;
            });
        },
        update (val, oldValue) {
            if (val) {
                this.open();
            } else {
                this.close();
            }
        },
        unbind () {
            var index = -1;
            this.$dropdownToggle.off('.v.dropdown');
            this.$parent = null;
            this.$dropdownToggle = null;

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
