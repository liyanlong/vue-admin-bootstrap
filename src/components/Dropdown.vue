<template lang="html">
    <div v-if="$parent._navbar||$parent._topbar||$parent._topbarNav" :class="classes">
        <a v-if="text" v-el:dropdown-toggle href="#" class="dropdown-toggle"
            :class="{
                'topbar-btn': $parent._topbar||$parent._topbarNav,
                'topbar-nav-btn': $parent._topbarNav
            }"
            @keydown.esc="hide"
            @click="toggle"
            :disabled="disabled">
        {{ text }}
        <span class="caret"></span>
        </a>
      <slot v-else name="button"></slot>
      <slot v-if="slots['dropdown-menu']" name="dropdown-menu"></slot>
      <ul v-else class="dropdown-menu" :class="{
            'topbar-clearfix': $parent._topbar||$parent._topbarNav
          }">
        <slot></slot>
      </ul>
    </div>
    <div v-else class="btn-group" :class="classes" :disabled="disabled">
      <button v-if="text"  v-el:dropdown-toggle type="button"
            :class="['btn', btnType, 'dropdown-toggle']"
            @keydown.esc="hide"
            @click="toggle"
            :disabled="disabled">
        {{ text }}
        <span class="caret"></span>
      </button>
      <slot v-else name="button"></slot>
      <slot v-if="slots['dropdown-menu']" name="dropdown-menu"></slot>
      <ul v-else class="dropdown-menu" :class="{
            'pull-right': ~placement.indexOf('right')
          }">
          <slot>这里唯恐</slot>
      </ul>
  </div>
</template>

<script>
// topbar-nav topbar-info
import $ from 'jquery'
import coerceBoolean from 'src/utils/coerceBoolean.js'
const dropdownList = [];
// 关闭其它下拉菜单
function clearMenus (e) {
    if (e && e.which === 3) {
        return;
    }
    // 所有下拉列表
    $(dropdownList).each(function (index, vm) {
        var el = vm.$el;
        if (!vm.show) {
            return;
        }
        if (e && e.type === 'click' && /input|textarea/i.test(e.target.tagName) && $.contains(el, e.target)) {
            return;
        }
        vm.show = false;
    });
};

// 文档注册关闭菜单事件
$(document).on('click.v.dropdown.data-api', clearMenus);

export default {
    props: {
        show: {
            twoWay: true,
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        'class': null,
        disabled: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        text: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: null
        },
        placement: {
            coerce: function (val) {
                if (typeof val === 'string') {
                    return val.split(' ');
                }
                return ['left', 'down'];
            }
        }
    },
    data: function () {
        return {

        };
    },
    computed: {
        classes () {
            return [{
                'topbar-nav': this.$parent._topbarNav,
                'disabled': this.disabled,
                'dropup': ~this.placement.indexOf('top'),
                'open': this.show
            },
            this.class,
            'dropdown']
        },
        slots () {
            return this._slotContents || {};
        },
        btnType () {
            return 'btn-' + (this.type || 'default');
        }
    },
    ready () {
        dropdownList.push(this);
    },
    attached () {},
    beforeDestroy () {
        var index = -1;

        // 从下拉列表队列中移除
        $.each(dropdownList, (dropdownVM, offset) => {
            if (dropdownVM === this) {
                index = offset;
            }
        });
        if (index >= 0) {
            dropdownList.splice(index, 1);
        }
    },
    methods: {
        toggle (e) {
            let isActive = this.show;
            if (this.disabled) {
                // 允许事件冒泡 这样可以触发 document 的 click.v.dropdown.data-api 等事件,
                // 关闭其它下拉框
                e.preventDefault();
                return;
            }
            clearMenus();
            if (!isActive) {
                this.show = true;
            }
            e.preventDefault();
            e.stopPropagation();
        },
        hide (e) {
            this.show = false;
            e.preventDefault();
            e.stopPropagation();
            if (this.disabled) {
                return;
            }
        }
    },
    components: {},
    watch: {
    }
}
</script>
