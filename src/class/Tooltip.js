
// TOOLTIP PUBLIC CLASS DEFINITION
// ===============================
// 是否已经附加到文档中
var isAttached = function (element) {
    var currentNode = element.parentNode;
    while (currentNode) {
        if (currentNode.tagName === 'HTML') {
            return true;
        }
        if (currentNode.nodeType === 11) {
            return false;
        }
        currentNode = currentNode.parentNode;
    }
    return false;
};

var getOffset = function (element) {
    var offset = {
        left: 0,
        top: 0
    };
    var currentNode = element;
    while (currentNode) {
        if (currentNode.tagName === 'BODY') {
            return offset;
        }
        offset.top += currentNode.offsetTop;
        offset.left += currentNode.offsetLeft;
        currentNode = currentNode.parentNode;
    };
    return offset;
}

var insertAfter = function (newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild === targetElement) {
        // 如果最后的节点是目标元素，则直接添加。因为默认是最后
        parent.appendChild(newElement);
    } else {
        // 如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
        console.log(newElement);
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
};

var Tooltip = function (element, options) {
    this.type = null;
    this.options = null;
    this.enabled = null;
    this.timeout = null;
    this.hoverState = null;
    this.element = null;
    this.inState = null;
    this.viewport = null;
    this.init('tooltip', element, options);
}

Tooltip.VERSION = '0.1.0';

Tooltip.TRANSITION_DURATION = 150;

Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
        selector: 'body',
        padding: 0
    }
}

Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
}

Tooltip.prototype.getOptions = function (options) {
    var defaults = this.getDefaults();
    var opt = {
        animation: options.tooltipAnimation ? options.tooltipAnimation : defaults.animation,
        template: options.tooltipTemplate ? options.tooltipTemplate : defaults.template,
        trigger: options.tooltipTrigger ? options.tooltipTrigger : defaults.trigger,
        title: options.tooltipTitle ? options.tooltipTitle : defaults.title,
        container: options.tooltipContainer && options.tooltipContainer !== true ? options.tooltipContainer : defaults.container,
        viewport: options.tooltipViewport ? options.tooltipViewport : defaults.viewport,
        delay: options.tooltipDelay ? options.tooltipDelay : defaults.delay
    };
    if (opt.delay && typeof opt.delay === 'number') {
        opt.delay = {
            show: opt.delay,
            hide: opt.delay
        };
    }
    return opt;
}

Tooltip.prototype.init = function (type, element, options) {
    this.enabled = true;
    this.type = type;
    this.element = element;
    this.options = this.getOptions(options);
    this.viewport = document.querySelector(this.options.viewport.selector || this.options.viewport);
    this.inState = { click: false, hover: false, focus: false };

    // 检查绑定在dom中
    if (this.element instanceof document.constructor) {
        throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ');
    for (var i = triggers.length; i--;) {
        var trigger = triggers[i];
        if (trigger === 'click') {
            this.element.addEventListener('click', (e) => { this.toggle(e); });
        } else if (trigger !== 'manual') {
            var eventIn = trigger === 'hover' ? 'mouseenter' : 'focusin';
            var eventOut = trigger === 'hover' ? 'mouseleave' : 'focusout';
            this.element.addEventListener(eventIn, (e) => { this.enter(e); });
            this.element.addEventListener(eventOut, (e) => { this.leave(e); });
        }
    }

    // 将原有的title设置为 original-title
    this.fixTitle();
};

Tooltip.prototype.fixTitle = function () {
    var el = this.element;
    if (el.getAttribute('title') || typeof el.getAttribute('tooltip-original-title') !== 'string') {
        el.setAttribute('tooltip-original-title', el.getAttribute('title') || '');
        el.setAttribute('title', '');
    }
};

Tooltip.prototype.getTitle = function () {
    var el = this.element;
    var o = this.options;
    var title = el.getAttribute('tooltip-original-title') || o.title;
    return title;
};

Tooltip.prototype.hasContent = function () {
    return !!this.getTitle();
};

Tooltip.prototype.setContent = function () {
    var tip = this.tip();
    var title = this.getTitle();
    tip.querySelector('.tooltip-inner').innerText = title;
    tip.classList.remove('fade', 'in', 'top', 'bottom', 'left', 'right');
}

// 随机生成一个id
Tooltip.prototype.getUID = function (prefix) {
    do {
        prefix += ~~(Math.random() * 1000000);
    } while (document.getElementById(prefix));
    return prefix;
};

// 弹出层
Tooltip.prototype.tip = function () {
    if (!this._tip) {
        var parentNode = document.createElement('div');
        parentNode.innerHTML = this.options.template;
        this._tip = parentNode.firstChild;
    }
    return this._tip;
}

Tooltip.prototype.enable = function () {
    this.enabled = true;
};

Tooltip.prototype.disable = function () {
    this.enabled = false;
};

Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
};

Tooltip.prototype.toggle = function (e) {
    console.log(this, this.constructor);
    console.log(e);
};

Tooltip.prototype.enter = function (e) {
    var self = this;
    if (e instanceof window.Event) {
        self.inState[e.type === 'focusin' ? 'focus' : 'hover'] = true;
    }

    // 正在进入的状态 让动画继续
    if (self.tip().classList.contains('in') || self.hoverState === 'in') {
        self.hoverState = 'in'
        return;
    }

    // 清空计数器
    clearTimeout(self.timeout);

    // 设置为正在进入状态
    self.hoverState = 'in';

    if (!self.options.delay || !self.options.delay.show) {
        return self.show();
    }

    // 延时 show
    self.timeout = setTimeout(function () {
        if (self.hoverState === 'in') {
            self.show();
        }
    }, self.options.delay.show);
};

Tooltip.prototype.leave = function (e) {

};
Tooltip.prototype.show = function () {
    var element = this.element;
    var inDom = isAttached(element);
    var tip = this.tip();

    // 不含文本和内容，不必显示
    if (!this.hasContent() || !this.enabled) {
        return;
    }

    if (!inDom) {
        return;
    }
    var tipId = this.getUID(this.type);

    this.setContent();
    tip.setAttribute('id', tipId);
    element.setAttribute('aria-describedby', tipId);

    // 动画
    if (this.options.animation) {
        tip.classList.add('fade');
    }

    var placement = this.options.placement;
    var autoToken = /\s?auto?\s?/i;
    var autoPlace = autoToken.test(placement);
    if (autoPlace) {
        placement = placement.replace(autoToken, '') || 'top';
    }

    // 插入dom
    this.options.container ? document.querySelector(this.options.container).appendChild(tip) : insertAfter(tip, element);
    var pos = this.getPosition()
    var actualWidth = tip.offsetWidth
    var actualHeight = tip.offsetHeight

    if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.viewport)

        placement = placement === 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'
            : placement === 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom'
            : placement === 'right' && pos.right + actualWidth > viewportDim.width ? 'left'
            : placement === 'left' && pos.left - actualWidth < viewportDim.left ? 'right'
            : placement

        tip.classList.remove(orgPlacement)
        tip.classList.addClass(placement)
    }
    tip.style.top = 0;
    tip.style.left = 0;
    tip.style.display = 'block';
};

Tooltip.prototype.getPosition = function (element) {
    var el = element || this.element;
    var isBody = el.tagName === 'BODY';
    var elRect = el.getBoundingClientRect();
    if (elRect.width === null) {
        elRect.width = elRect.right - elRect.left;
        elRect.height = elRect.bottom - elRect.top;
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement;
    var elOffset = isBody ? { top: 0, left: 0 } : (isSvg ? {} : getOffset(el));
    var scroll = isBody ? document.documentElement.scrollTop || document.body.scrollTop : el.scrollTop;
    var outerDims = isBody ? {width: window.innerWidth, height: window.innerHeight} : {};
    return {
        width: outerDims.width ? outerDims.width : elRect.width,
        height: outerDims.height ? outerDims.height : elRect.height,
        scroll: scroll,
        top: elOffset.top ? elOffset.top : elRect.top,
        left: elOffset.left ? elOffset.left : elRect.left
    };
};

Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement === 'bottom' ? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 }
    : placement === 'top' ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 }
    : placement === 'left' ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth }
    : { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }
};

module.exports = Tooltip;
