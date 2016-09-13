<template>
    <div class="viewFramwork" id="viewFrameWork">
        <div class="viewFramework-topbar">
            <slot name="view-framework-topbar"></slot>
        </div>
        <div v-el:body class="viewFrameWork-body" :class="bodyStyle">
            <slot name="view-framework-sidebar"></slot>
            <div class="viewFrameWork-product">
                <div class="viewFramework-product-body">
                    <slot name="view-framework-product"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            bodyStyle: ''
        }
    },
    created () {
        this._viewFrameWrok = true;
    }
}
</script>
