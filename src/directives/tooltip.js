import $ from 'jquery'
export default function (Vue) {
    Vue.directive('tooltip', {
        deep: true,
        params: [
            'tooltip-show'
        ],
        paramWatchers: {
            'tooltipShow': function (val, oldValue) {
                // 更新加入队列
                this.$el.timeout = setTimeout(() => {
                    if (val) {
                        this.$el.tooltip('show');
                        return;
                    }
                    this.$el.tooltip('hide');
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
        bind: function () {
            var name;
            var options = {};
            this.$el = $(this.el);
            for (name in this.events) {
                options[name] = (e) => {
                    this.vm.$emit(this.events[name], e, this);
                };
            }
            // 注册事件
            this.$el.on(options);
        },
        update: function (newValue, oldValue) {
            var tooltip = this.$el.data('bs.tooltip');

            // 重新
            if (tooltip) {
                // 删除原有的节点
                // 清空计时器
                tooltip.init('tooltip', this.el, newValue);
            } else {
                this.$el.tooltip(newValue);
            }
        },
        unbind: function () {
            // 删除节点
            this.$el.tooltip('destroy');
        }
    });
}
