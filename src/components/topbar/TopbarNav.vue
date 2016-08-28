<template lang="html">
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
</template>

<script>
export default {
    props: {
        navList: {
            type: Array,
            default: []
        }
    },
    methods: {
    }
}
</script>
