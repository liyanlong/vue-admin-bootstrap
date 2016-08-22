import $ from 'jquery'
import 'bootstrap'

export default {
    init () {
        this.initTooltip();
    },
    initTooltip () {
        // 重置默认参数
        $.extend($.fn.tooltip.Constructor.DEFAULTS, {
            template: '<div class="admin-sidebar-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            container: 'body'
        });
    }
}
