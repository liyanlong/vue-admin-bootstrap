import $ from 'jquery'
export default function (Vue) {
    Vue.directive('tooltip', {
        deep: true,
        params: [
            'tooltip-toggle'
        ],
        paramWatchers: {
            tooltipToggle (val, oldValue) {
                // 更新加入队列
                this.$el.timeout = setTimeout(() => {
                    this.$el.tooltip('toggle');
                }, 0);
            }
        },
        $el: null,
        events: {
            'show.bs.tooltip': 'tooltip-show',
            'shown.bs.tooltip': 'tooltip-shown',
            'hide.bs.tooltip': 'tooltip-hide',
            'hidden.bs.tooltip': 'tooltip-hidden',
            'inserted.bs.tooltip': 'tooltip-inserted'
        },
        bind () {
            let name;
            let options = {};
            this.$el = $(this.el);
            for (name in this.events) {
                let eventName = name;
                options[eventName] = (e) => {
                    this.vm.$emit(this.events[eventName], e);
                };
            }
            // 注册事件
            this.$el.on(options);
        },
        update (newValue, oldValue) {
            var tooltip = this.$el.data('bs.tooltip');
            if (tooltip) {
                // 初始化 tip
                tooltip.init('tooltip', this.el, newValue);
            } else {
                this.$el.tooltip(newValue);
            }
        },
        unbind () {
            // 删除节点
            this.$el.tooltip('destroy');
        }
    });
}
