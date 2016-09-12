import coerceBoolean from 'src/utils/coerceBoolean.js'
export default {
    props: {
        name: {
            type: String,
            default: null
        },
        checked: {
            twoWay: true
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
        button: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        value: {
            default: true
        },
        type: {
            type: String,
            default: null
        }
    }
}
