<template>
    <div class="admin-topbar">
        <div class="topbar-wrap topbar-clearfix">
            <div class="topbar-head topbar-left">
                <slot name="topbar-logo">
                    <a :href="logoLink" class="topbar-logo topbar-left">
                        <i :class="logoIcon"></i>
                    </a>
                </slot>
                <slot name="topbar-home">
                    <a :href="homeLink" class="topbar-home-link topbar-btn topbar-left">
                        <span>{{{homeName}}}</span>
                    </a>
                </slot>
            </div>
            <slot name="topbar-nav"></slot>
            <slot name="topbar-left"></slot>
            <div class="topbar-info topbar-right topbar-clearfix">
                <slot name="topbar-right"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        logoIcon: {
            type: String,
            default: 'fa fa-desktop'
        },
        logoLink: {
            type: String,
            default: ''
        },
        homeName: {
            type: String,
            default: 'Vue-Admin-Bootstrap'
        },
        homeLink: {
            type: String,
            default: '/home'
        }
    },
    created () {
        this._topbar = true;
    }
}
</script>
