<template lang="html">
    <dropdown :text="text" class="topbar-left" :show.sync="show">
        <div slot="dropdown-menu" class="dropdown-menu topbar-nav-list">
            <div class="topbar-nav-col" v-for="column in navList">
                <template v-for="(itemIndex ,navItem) in column">
                    <div class="topbar-nav-item">
                        <p class="topbar-nav-item-title">{{navItem.title}}</p>
                        <ul class="topbar-nav-item-list">
                            <li v-for="item in navItem.navList">
                                <a :href="item.href">
                                    <i class="fa" :class="item.icon"></i>
                                    <span>{{item.content}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div v-if="itemIndex < column.length - 1 " class="topbar-nav-gap"></div>
                </template>
            </div>
        </div>
    </dropdown>
</template>

<script>
import coerceBoolean from 'src/utils/coerceBoolean'
import Dropdown from 'components/Dropdown'
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
        show: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        navList: {
            type: Array,
            default: []
        }
    },
    components: {
        Dropdown
    },
    created () {
        this._topbarNav = true;
    }
}
</script>
