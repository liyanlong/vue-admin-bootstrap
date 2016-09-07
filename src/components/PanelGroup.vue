<template lang="html">
    <div class="panel-group" role="tablist" aria-multiselectable="true">
        <slot></slot>
    </div>
</template>

<script>
import coerceNumber from 'src/utils/coerceNumber'

export default {
    props: {
        active: {
            type: Number,
            coerce: coerceNumber,
            default: 0
        }

    },
    computed: {
    },
    data () {
        return {
            panels: [],
            show: null
        };
    },
    created () {
        this._panelGroup = true;
    }
};
</script>
