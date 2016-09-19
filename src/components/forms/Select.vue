<template>
<div  v-el:select :class="{'btn-group btn-group-justified': justified, 'btn-select': !justified}">
    <slot name="select-before"></slot>
    <div :class="{
        'open': show,
        'dropdown': !justified
        }">
        <select
            v-el:select
            v-model="value"
            v-show="show"
            :name="name"
            class="secret"
            :multiple="multiple"
            :required="required"
            :readonly="readonly"
            :disabled="disabled">
           <option v-if="required" value=""></option>
           <option v-for="option in options" :value="option.value||option">{{ option.label||option }}</option>
       </select>
       <button type="button" class="form-control dropdown-toggle"
            :disabled="disabled || !hasParent"
            :readonly="readonly"
            @click="toggle()"
            @keyup.esc="show = false">
            <span class="btn-content">{{loading ? text.loading : showPlaceholder || selectedItems}}</span>
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
            <template v-if="options.length">
              <li v-if="required&&!clearButton"><a @mousedown.prevent="clear() && blur()">{{ placeholder || text.notSelected }}</a></li>
              <li v-for="option in options | filterBy searchValue" :id="option.value||option">
                <a @mousedown.prevent="select(option.value||option)">
                  <span v-html="option.label||option"></span>
                </a>
              </li>
            </template>
            <slot></slot>
        </ul>
    </div>
    <slot name="select-after"></slot>
</div>
</template>
<script>
import translations from 'src/utils/translations'
import coerceBoolean from 'src/utils/coerceBoolean'
export default {
    props: {
        name: {
            type: String,
            default: null
        },
        value: {
            twoWay: true
        },
        options: {
            type: Array,
            default () { return [] }
        },
        disabled: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        readonly: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        placeholder: {
            type: String,
            default: null
        },
        justified: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        multiple: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        parent: {
            default: true
        },
        lang: {
            default: 'zh'
        }
    },
    computed: {
        selectedItems () {
            if (this.options.length === 0) { return '' }
            let foundItems = []
            for (var item of this.values) {
                if (~['number', 'string'].indexOf(typeof item)) {
                    let option = null;
                    if (this.options.some(o => {
                        if (o instanceof Object ? o.value === item : o === item) {
                            option = o;
                            return true
                        }
                    })) {
                        console.log(option);
                        foundItems.push(option.label || option);
                    }
                }
            }
            return foundItems.join(', ')
        },
        hasParent () {
            return this.parent instanceof Array ? this.parent.length : this.parent;
        },
        showPlaceholder () {
            console.log(this.values, !this.hasParent);
            return (this.values.length === 0 || !this.hasParent) ? (this.placeholder || this.text.notSelected) : null
        },
        text () {
            return translations(this.lang)
        },
        values () {
            return this.value instanceof Array ? this.value : this.value !== null && this.value !== undefined ? [this.value] : []
        }
    },
    data () {
        return {
            show: false,
            loading: false
        }
    },
    methods: {
        toggle () {
            this.show = !this.show;
        },
        select (v) {
            if (this.value instanceof Array) {
                if (~this.value.indexOf(v)) {
                    this.value.$remove(v)
                } else {
                    this.value.push(v)
                }
                if (this.closeOnSelect) {
                    this.toggle()
                }
            } else {
                this.value = v
                this.toggle()
            }
        }
    }

}
</script>

<style lang="less">
.btn-select { display: inline-block; }
.btn-select>.btn-group>.dropdown-menu>li { position:relative; }
.btn-select>.btn-group>.dropdown-menu>li>a { cursor:pointer; }
.bs-searchbox {
  position: relative;
  margin: 4px 8px;
}
.bs-searchbox .close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
}
button>.close { margin-left: 5px;}
.notify.out { position: relative; }
.notify.in,
.notify>div {
  position: absolute;
  width: 96%;
  margin: 0 2%;
  min-height: 26px;
  padding: 3px 5px;
  background: #f5f5f5;
  border: 1px solid #e3e3e3;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  pointer-events: none;
}
.notify>div {
  top: 5px;
  z-index: 1;
}
.notify.in {
  opacity: .9;
  bottom: 5px;
}
.btn-group.btn-group-justified .dropdown-menu { width: 100%; }
span.caret {
  float: right;
  margin-top: 9px;
  margin-left: 5px;
}
.secret {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.bs-searchbox input:focus,
.secret:focus + button {
  outline: 0;
  border-color: #66afe9 !important;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
}
</style>
