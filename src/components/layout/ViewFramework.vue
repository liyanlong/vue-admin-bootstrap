<template>
    <div class="viewFramwork" id="viewFrameWork">
        <div class="viewFramework-topbar">
            <slot name="view-framework-topbar"></slot>
        </div>
        <div :class="['viewFrameWork-body', {
                'viewFrameWork-sidebar-full' : sidebarType === 'full',
                'viewFrameWork-sidebar-mini' : sidebarType === 'mini'
            }]">
            <div class="viewFrameWork-sidebar">
                <slot name="view-framework-sidebar"></slot>                
            </div>
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
    props: {
        sidebarType: {
            type: String,
            default: null
        }
    }
}
</script>
