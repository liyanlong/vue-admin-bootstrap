<template>
    <div :class="{
            'form-horizontal': horizontal,
            'form-inline': inline
        }">
        <slot></slot>
    </div>
</template>

<script>
import coerceBoolean from 'src/utils/coerceBoolean'
export default {
    props: {
        valid: {
            twoWay: true,
            default: null
        },
        horizontal: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        inline: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        }
    },
    data () {
        return {
            children: [],
            timeout: null
        };
    },
    watch: {
        // 传递给父 group
        valid (val, old) {
            if (val === old) { return }
            this._parent && this._parent.validate()
        }
    },
    methods: {
        focus () {
            this.$els.input.focus()
        },
        validate () {
            let valid = true
            this.children.some(el => {
                let v = el.validate ? el.validate() : el.valid !== undefined ? el.valid : el.required && !~['', null, undefined].indexOf(el.value)

                // 验证失败, 设置为 false
                if (!v) {
                    valid = false
                }
                // 如果valid 为 false, !valid 为true 退出其它检查
                return !valid
            })
            this.valid = valid
            return valid === true
        }
    },
    created () {
        this._formGroup = true
        let parent = this.$parent
        // 检查是否存在父group
        while (parent && !parent._formGroup) { parent = parent.$parent }

        // 如果存在,则设置父group 为 _parent
        if (parent && parent._formGroup) {
            parent.children.push(this)
            this._parent = parent
        }
    },
    ready () {
        // 检查子 input组件的正确性
        this.validate()
    },
    beforeDestroy () {
        if (this._parent) this._parent.children.$remove(this)
    }
}
</script>
