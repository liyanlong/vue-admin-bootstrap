export default function (Vue) {
    const DEFAULTS = {
        animation: true,
        placement: 'top',
        selector: false, // 如果提供了一个选择器，提示工具对象将被委派到指定的目标。
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        container: false, // 容器  Appends the tooltip to a specific element
        viewport: { // Keeps the tooltip within the bounds of this element. Example
            selector: 'body',
            padding: 0
        }
    };
    console.log(DEFAULTS);

    Vue.directive('tooltip', {
        params: [
            'tooltip-placement', // top right bottom left
            'tooltip-html', //
            'tooltip-animation', // bool
            'tooltip-trigger',
            'tooltip-title', // text
            'tooltip-delay' // timeout
        ],
        bind: function () {
            var directive = this;
            directive.vm.$on('hook:ready', function () {
            });
            // 准备工作
            // 例如，添加事件处理器或只需要运行一次的高耗任务
        },
        update: function (newValue, oldValue) {
            console.log(newValue);
            // 值更新时的工作
            // 也会以初始值为参数调用一次
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
