<template>
  <affix :offset-top="offsetTop" offset-bottom="0">
    <ul class="nav bs-docs-sidenav" id="sidenav">
      <li v-for="s in sections" :class="{active:active==s.id}"><a href="#{{ s.id }}">{{ s.name }}</a></li>
    </ul>
    <a href="#" class="back-to-top">Back to top</a>
    <a href="https://github.com/yuche/vue-strap" class="back-to-top">GitHub</a>
  </affix>
</template>

<script>
import $ from 'jquery'
import affix from 'components/Affix.vue'
export default {
    components: {
        affix
    },
    filters: {
        space (val) {
            return val.replace('-', ' ')
        }
    },
    data () {
        return {
            active: null,
            offsetTop: 50,
            sections: []
        }
    },
    created () {
        $(window).on('scroll load resize', () => this.scrollSpy())
        if (!this.$root.sections) {
            this.$root.sections = []
        }
        this.sections = this.$root.sections
    },
    methods: {
        scrollSpy () {
            // 文档的右侧滚动条
            const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
            let lastId = null;
            for (let s of this.sections) {
                // scrollTop 意思为滚动条已经滚动的高度
                // 获取最后一个 文档的绝对位置高度 与 scrollTop接近的元素
                if ($(s.el).offset().top - this.offsetTop <= scrollPosition) {
                    // 最后一个满足的 为actbve
                    lastId = s.id;
                }
            }
            this.active = lastId;
        }
    }
}
</script>
