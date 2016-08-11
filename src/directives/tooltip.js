import Tooltip from '../class/Tooltip'
export default function (Vue) {
    Vue.directive('tooltip', {
        params: [
            'tooltip-trigger',
            'tooltip-selector',
            'tooltip-viewport',
            'tooltip-container',
            'tooltip-title'
        ],
        bind: function () {
            var directive = this;
            var options = this.params;

            // 插入文档后调用
            directive.vm.$on('hook:ready', () => {
                // $.tooltip(this.el, options);
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
            // this.tooltip.destroy();
            // 删除节点
        }

    });
}
