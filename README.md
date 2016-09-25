# vue-admin-bootstrap

> 基于 Vue jQuery Bootstrap的组件框架
> 外部依赖于jquery.js
> 运用于 vue组件

## Build Setup

```bash
# install dependencies
npm install

# 开发环境
npm run dev

# 生成vue-admin-bootstrap
npm run build

# 生成文档
npm run build-docs

```

## Documentation

详细的介绍, 请看[docs](https://liyanlong.github.io/vue-admin-bootstrap)


## How To Use


### Browser globals
``` html
<script src="http://cdn.bootcss.com/vue/1.0.26/vue.min.js"></script>
<script src="http://cdn.bootcss.com/jquery/3.1.0/jquery.min.js"></script>
<script type="text/javascript" src="dist/js/vue-admin-bootstrap.js"></script>
<script>
var app = new Vue({
    el: 'body',
    data: {
    },
    components: {
        modal: VueAdminBootStrap.components.Modal
    }
});
</script>
```

## LINCENSE
vue-admin-bootstrap is licensed under [The MIT License](LICENSE).
