<template>
 <div class="form-group" @click="focus()"
 :class="{'has-feedback': icon, 'validate': !noValidate, 'has-error':hasError, 'has-success': hasSuccess}">
     <slot name="input-label"><label v-if="label" class="control-label" :class="{
            'col-sm-2': _parent && _parent.horizontal
         }">{{label}}</label></slot>
     <div v-if="_parent && _parent.horizontal" class="col-sm-10">
         <textarea v-if="type=='textarea'" class="form-control"
         v-el:input
         v-model="value"
         :cols="cols"
         :rows="rows"
         :name="name"
         :readonly="readonly"
         :required="required"
         :disabled="disabled"
         :maxlength="maxlength || null"
         :placeholder="placeholder"
         :style="{'resize': resize ? 'auto': 'none'}"></textarea>
         <template v-else>
             <div v-if="slots['input-before'] || slots['input-after']" class="input-group">
                 <slot name="input-before"></slot>
                 <input v-else class="form-control"
                    v-el:input
                    v-model="value"
                    :name="name"
                    :type="type"
                    :title="title"
                    :readonly="readonly"
                    :required="required"
                    :disabled="disabled"
                    :maxlength="maxlength || null"
                    :placeholder="placeholder"
                    :pattern="textPattern"
                    @keyup.enter="enterSubmit&&submit()"
                 />
               <slot name="input-after"></slot>
             </div>
             <input v-else class="form-control"
                v-el:input
                v-model="value"
                :name="name"
                :type="type"
                :title="title"
                :readonly="readonly"
                :required="required"
                :disabled="disabled"
                :maxlength="maxlength || null"
                :placeholder="placeholder"
                :pattern="textPattern"
                @keyup.enter="enterSubmit&&submit()"
             />
             <span v-if="clearButton && value" class="close" @click="value = ''">&times;</span>
             <span v-if="icon&&valid!==null" class="glyphicon form-control-feedback" :class="validIcon" aria-hidden="true"></span>
             <div v-if="showHelp" class="help-block">{{help}}</div>
             <div v-if="showError" class="help-block with-errors">{{errorText}}</div>
         </template>
     </div>
     <template v-else>
         <textarea v-if="type=='textarea'" class="form-control"
         v-el:input
         v-model="value"
         :cols="cols"
         :rows="rows"
         :name="name"
         :readonly="readonly"
         :required="required"
         :disabled="disabled"
         :maxlength="maxlength || null"
         :placeholder="placeholder"
         :style="{'resize': resize ? 'auto': 'none'}"></textarea>
         <template v-else>
             <div v-if="slots['input-before'] || slots['input-after']" class="input-group">
                 <slot name="input-before"></slot>
                 <input v-else class="form-control"
                    v-el:input
                    v-model="value"
                    :name="name"
                    :type="type"
                    :title="title"
                    :readonly="readonly"
                    :required="required"
                    :disabled="disabled"
                    :maxlength="maxlength || null"
                    :placeholder="placeholder"
                    :pattern="textPattern"
                    @keyup.enter="enterSubmit&&submit()"
                 />
               <slot name="input-after"></slot>
             </div>
             <input v-else class="form-control"
                v-el:input
                v-model="value"
                :name="name"
                :type="type"
                :title="title"
                :readonly="readonly"
                :required="required"
                :disabled="disabled"
                :maxlength="maxlength || null"
                :placeholder="placeholder"
                :pattern="textPattern"
                @keyup.enter="enterSubmit&&submit()"
             />
             <span v-if="clearButton && value" class="close" @click="value = ''">&times;</span>
             <span v-if="icon&&valid!==null" class="glyphicon form-control-feedback" :class="validIcon" aria-hidden="true"></span>
             <div v-if="showHelp" class="help-block">{{help}}</div>
             <div v-if="showError" class="help-block with-errors">{{errorText}}</div>
         </template>
     </template>
  </div>
</template>

<script>
import $ from 'jquery'
import coerceBoolean from 'src/utils/coerceBoolean'
import coerceNumber from 'src/utils/coerceNumber'
import translations from 'src/utils/translations'
export default {
    props: {
        label: {
            type: String,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        value: {
            twoWay: true,
            default: null
        },
        type: {
            type: String,
            default: 'text'
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
        required: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        placeholder: {
            type: String,
            default: null
        },
        clearButton: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        // 回车提交
        enterSubmit: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        // 帮助内容
        help: {
            type: String,
            default: null
        },
        // 是否需要图标显示
        icon: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        // 校验最大长度
        maxlength: {
            type: Number,
            coerce: coerceNumber,
            default: null
        },
        minlength: {
            type: Number,
            coerce: coerceNumber,
            default: 0
        },
        onfocus: null,

        // 校验 函数 或者校验表达式
        pattern: null,
        // 是否不验证
        noValidate: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        validateDelay: {
            type: Number,
            coerce: coerceNumber,
            default: 0
        },

        // hide when have error
        hideHelp: {
            type: Boolean,
            coerce: coerceBoolean,
            default: true
        },
        // 匹配
        match: {
            type: String,
            default: null
        },
        error: {
            type: String,
            default: null
        },
        lang: {
            type: String,
            default: 'zh'
        },
        cols: {
            type: Number,
            coerce: coerceNumber,
            default: 25
        },
        rows: {
            type: Number,
            coerce: coerceNumber,
            default: 3
        },
        resize: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        }
    },
    data () {
        return {
            valid: null,
            timeout: null
        }
    },
    computed: {
        text () {
            return translations(this.lang)
        },
        validIcon () {
            return this.valid === null ? '' : 'glyphicon-' + (this.valid ? 'ok' : 'remove');
        },
        hasError () {
            return this.valid === false;
        },
        hasSuccess () {
            return this.valid === true;
        },
        slots () {
            return this._slotContent || {};
        },
        textPattern () {
            return typeof this.pattern === 'string' ? this.pattern : null;
        },
        // help有内容 并且 没有显示错误 或者 没有关闭帮助
        showHelp () {
            return this.help && (!this.showError || !this.hideHelp);
        },
        // 显示错误，开启错误 并且 校验为false
        showError () {
            return this.error && this.valid === false;
        },
        errorText () {
            let value = this.value
            let text = this.text
            let error = [this.error]

            // 如果value 为空 并且要求不为空
            if (!value && this.required) {
                error.push('(' + text.required.toLowerCase() + ')');
            }

            // 是否小于长度
            if (value && (value.length < this.minlength)) {
                error.push('(' + text.minLength.toLowerCase() +
                ': ' + this.minlength + ')')
            }

            if (value && this.maxlength && (value.length > this.maxlength)) {
                error.push('(' + text.maxLength.toLowerCase() +
                ': ' + this.maxlength + ')')
            }
            return error.join(' ')
        },
        title () {
            return this.errorText || this.help || ''
        }
    },
    methods: {
        submit () {
            // 如果为一个 form group
            // 交给组验证
            if (this.$parent._formGroup) {
                return this.$parent.validate()
            }
            // 表单提交
            if (this.$els.input.form) {
                const invalids = $(this.$els.input.form).find('.form-group.validate:not(.has-success)')
                if (invalids.length) {
                    invalids.find('input, textarea, select')[0].focus()
                } else {
                    this.$els.input.form.submit()
                }
            }
        },
        validate () {
            let value = $.trim(this.value || '');

            // 去掉两边空格 如果为空,并且要求必填 则返回 false
            if (!value && this.required) {
                return false;
            }

            // 检查 match 是否成功
            if (this.match !== null && this.match !== value) {
                return false;
            }

            // 小于最小长度
            if (value.length < this.minlength) {
                return false;
            }

            // 大于最大长度
            if (this.maxlength && value.length > this.maxlength) {
                return false;
            }

            // H5 新特性,验证表单
            if (this.$els.input.checkValidity && !this.$els.input.checkValidity()) {
                return false;
            }

            let valid = true;
            if (this.pattern instanceof Function) {
                valid = this.pattern(this.value)
            } else if (typeof this.pattern === 'string') {
                let regexp = new RegExp(this.pattern);

                valid = regexp.test(this.value);
            }

            return valid;
        },
        eval () {
            // 清除计时器
            if (this.timeout) {
                clearTimeout(this.timeout);
            }

            // 不需要检查 value
            if (this.noValidate) {
                // 如果不为 null 则 设置为 null
                if (this.valid !== null) {
                    this.valid = null
                }
            } else {
                this.timeout = setTimeout(() => {
                    let value = this.value || '';

                    // 处理 value
                    if (this.mask instanceof Function) {
                        value = this.mask(value);
                    }

                    // 处理的结果 与 原 value不一致
                    if (this.value !== value) {
                        this.value = value;
                    }
                    this.valid = this.validate();
                    this.timeout = null;
                }, this.validateDelay);
            }
        },
        focus () {
            this.$els.input.focus()
        }
    },
    created () {
        let parent = this.$parent;
        while (parent && !parent._formGroup) { parent = parent.$parent; }

        // 存在 formgroup 作为 父组件
        if (parent) {
            if (!this.noValidate) {
                parent.children.push(this);
            }

            this._parent = parent;
        }
    },
    ready () {
        $(this.$els.input).on('change keypress keydown keyup', (e) => {
            this.eval();
        })
        .on('blur', () => {
            // 要求需要验证
            if (!this.noValidate) {
                this.valid = this.validate()
            }
        })
        .on('focus', e => {
            var onfocus = this.onfocus;
            if (onfocus instanceof Function) {
                onfocus.call(this, e)
            }
        })
    },
    watch: {
        match (val) {
            // 重新判断validate
            this.eval();
        },
        valid (val, old) {
            // 如果和原来的value 一样,则不用检查parent
            if (val === old) { return }
            // 启动父节点验证
            this._parent && this._parent.validate();
        },
        noValidate: {
            handler (val) {
                if (this._parent) {
                    // 如果 不需要检查 并且已经存在于父group
                    if (val && ~this.$parent.children.indexOf(this)) {
                        this.$parent.children.$remove(this)
                    }
                    // 如果需要检查, 并且不存在雨父group
                    if (!val && !~this.$parent.children.indexOf(this)) {
                        this.$parent.children.push(this)
                    }
                }
                // 重新检查组件
                this.eval();
            }
        }
    },
    beforeDestroy () {
        // 存在 form-group
        if (this._parent) {
            this._parent.children.$remove(this)
        }
        // 解除事件
        $(this.$els.input).off()
    }
}
</script>
<style lang="less">
.form-group {
    position: relative;
    label~.close {
        top: 25px;
    }
    .close {
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
    .has-feedback.has-success button.close,
    .has-feedback.has-error button.close {
      right:20px;
    }
}

</style>
