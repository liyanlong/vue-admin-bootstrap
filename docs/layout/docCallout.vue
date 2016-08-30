<template lang="html">
    <div class="bs-callout" :class="{
            'bs-callout-default': type === 'default' || type === '',
            'bs-callout-info': type === 'info',
            'bs-callout-warning': type === 'warning',
            'bs-callout-danger': type === 'danger'
        }" :id="id">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        }
    }
};
</script>
