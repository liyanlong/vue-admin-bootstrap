import $ from 'jquery'
export default function (Vue) {
    console.log($.fn);
    // 是否已经附加到文档中
    // var isAttached = function (element) {
    //     var currentNode = element.parentNode;
    //         while (currentNode) {
    //             if (currentNode.tagName === 'HTML') {
    //               return true;
    //             }
    //             if (currentNode.nodeType === 11) {
    //               return false;
    //             }
    //             currentNode = currentNode.parentNode;
    //         }
    //     return false;
    // };

    var Tooltip = function (element, options) {

    };
    // Tooltip 默认值
    Tooltip.DEFAULTS = {
        animation: true,
        placement: 'top',
        selector: false, // 如果提供了一个选择器，提示工具对象将被委派到指定的目标。
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        container: false, // 容器  Appends the tooltip to a specific element
        viewport: { // Keeps the tooltip within the bounds of this element. Example
            selector: 'body',
            padding: 0
        }
    };

    Vue.directive('tooltip', {
        params: [
            'tooltip-trigger'
        ],
        bind: function () {
            var directive = this;
            // var element = directive.el;
            var options = {
                trigger: this.params.tooltipTrigger ? this.params.tooltipTrigger : Tooltip.DEFAULTS.trigger
            };
            var triggers = options.trigger && options.trigger.split(' ') || [];
            for (var i = triggers.length; i--;) {
                var trigger = triggers[i];
                if (trigger === 'click') {
                    // directive.vm.$on('tooltip:show', this.el);
                    // element.addEventListener('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
                } else if (trigger !== 'manual') {
                    // var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
                    // var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'
                    //
                    // this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                    // this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
                }
            }

            // 生成自定义的配置
            console.log(directive.vm.$root);

            // directive.el.addEventListener('click');

            // 准备工作
            // 例如，添加事件处理器或只需要运行一次的高耗任务
        },
        update: function (newValue, oldValue) {
            // 值更新时的工作
            // 也会以初始值为参数调用一次
            console.log(newValue);
        },
        unbind: function () {
            // 清理工作
            // 例如，删除 bind() 添加的事件监听器
        },
        onClick: function (e) {
            console.log(e);
        }
    });
}
