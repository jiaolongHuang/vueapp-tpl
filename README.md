# vueapp-tpl
a group templates for init a vue project.

* webpack2 + vue2 + babel6

* 其中涉及到的[webpack2优化点](https://imjiaolong.cn/post/webpack2.html)

## 运行

* 开发模式：

```
npm run dev
open http://127.0.0.1:8300
```
* 发布生产版本

```
npm run build
```
* 发布兼容IE<9的生产版本

```
npm run build:ie8
```

## 查看效果：
开发模式下：

* 打开`http://localhost:8300`，可以查看`/` 路由下对应的页面
* 打开`http://localhost:8300/blue`，可以查看`/blue` 路由下对应的页面

## 文件命名规范
| 文件夹 |作用|
| ------| ------ |
| assets | 静态资源| 
| components | 原子组件，如footer,header等|
| config | routers.js, 以及项目中用到的常用变量配置等 | 
| helpers | API接口，工具函数，eventHub |
| libs | 引用的第三方的库，通常是不需要webpack再次编译的 |
| views | 不同路由下对应的页面 | 
| index.js | webpack的入口文件 | 
