## github展示页面

-------

在git 创建仓库，按照 GitHub Pages 的规定，名称为 `username.github.io` 的项目的`master `分支，或者其它名称的项目的 `gh-pages` 分支可以自动生成 `G`itHub Pages` 页面；这里我们利用gh-pages展示。

### vue-cli创建一个简单的个人简历页面
使用到的技术：
- Node
- webpack
- Vue/Vue-router/Vue-cli
- Echarts
- ElementUI

**步骤**：
- 首先在远程仓库创建一个`RaiyenXiao`仓库，拉去仓库到本地
- 利用Vue-cli快速构建一个项目 方法查看 [Vue-cli快速构建规范的VUE项目骨架](http://maxiang.info/client_zh)
- 在项目中安装`ECharts`依赖，使用`requrie`按需引用图表组件:
```
cnpm i echarts -S
```
- 安装`ElementUI` :
  1. 安装 `E`lementUI`：
  ```
  npm i element-ui -S
  ```
  2. 安装 `babel-plugin-component`：
  ```
  npm i babel-plugin-component -D
  ```
  3. 修改` .babelrc`：
  ```
  {
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": [
    "transform-vue-jsx", 
    "transform-runtime",
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
  }
  ```
  4. 按需引入 Row 与 Col：

  **main.js**:
  ```
  import Vue from 'vue'
  import App from './App'
  import router from './router'
  
  Vue.config.productionTip = false
  
  // 引入样式重置
  import '../static/css/reset.css'
  
  // 引入及使用 ElementUI
  import {Row, Col} from 'element-ui';
  Vue.use(Row).use(Col);
  
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
  ```
- 完成项目模块内容
- 执行`cnpm run build`打包项目

此命令完成后，目录下会多出一个`dist`文件夹，包含一个static文件夹和indexe.html；tatic文件下包括项目打包后的css、js、img、fonts(字体图标)。

点击index.html,浏览器显示该页面是空白的，发现项目资源无法加载

**解决方案**：
- 打开项目根目录`config`下的`index.js`文件，将`assetsPublicPath: '/'`,改为`assetsPublicPath: './'
`,
- 字体图标无法加载 ,打开`build中`的　`utils.js`　文件，在控制build样式文件代码中添加　`publicPath: '../../' `

```
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath: '../../'
      })
    }
```
- 生成gh-pages分支

创建`gh-pages`分支，分支下存放dist文件夹下的内容，其余都删除，讲gh-pages分支推送到远程仓库

- 点击项目仓库的`setting`,找到`source`,切换到`gh-pages branch`,点击保存

访问 https://raiyenxiao.github.io/RaiyenXiao/#/  
