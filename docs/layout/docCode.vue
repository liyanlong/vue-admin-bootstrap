<template>
  <pre v-if="!language" v-el:container></pre>
  <template v-else>
    <h3 v-if="title" class="bs-code-title">
        {{title}}
    </h3>
    <pre v-if="language=='markup'"><code class="language-markup"><script v-el:container type="language-mark-up"></script></code></pre>
    <pre v-else><code class="language-{{language}}"><script v-el:container type="language-{{language}}"></script></code></pre>
  </template>
</template>

<script>
import $ from 'jquery'
export default {
    props: {
        language: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: ''
        }
    },
    // 未插入 编译完成
    compiled () {
        let content = ''

        // fragment
        $.each(this._slotContents.default.childNodes, (index, el) => {
            content += el.outerHTML || el.nodeValue
        });

        // 如果语言属于 html 和 markup 类型
        // 将元素的空属性去除
        if (~['html', 'markup'].indexOf(this.language)) {
            content = content.replace(/(\w+)=""/g, '$1')
        }
        // 捕获匹配换行回车符号 作为 $1
        // \S 匹配任何可见字符。等价于[^ \f\n\r\t\v]
        let matches = content.match(/(\n|\r)[ ]*\S/g)
        if (matches) {
            let values = matches.map((el) => { return el.length - 2 })
            // 缩进 空格 和换行
            let min = Math.min.apply(Math, values)

            // $1 换行回车符
            // $2 任意非空非换行符号
            // str 匹配字符
            // nr 回车或换行
            // s 下一段字符串
            content = content.replace(/(\n|\r)([^\n\S]*)/g, (str, nr, s) => {
                return nr + s.substr(min)
            })
        }
        // 重置 页面脚本
        this.$els.container.innerHTML = content.replace(/^\s+|\s+$/g, '')
    }
}
</script>
