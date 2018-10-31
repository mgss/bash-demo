# shell-demo
一堆基于Node或Shell开发的DEMO

## 功能1 - 自动项目并生成目录和文件
**目录**
* [x] [./shell/demo.sh](https://github.com/mgss/bash-demo/blob/master/shell/demo.sh) 基于shell脚本开发
* [x] [./node/demo.js](https://github.com/mgss/bash-demo/blob/master/node/demo.js) 基于Nodejs开发

**特性**
* demo.sh xxx 可在当前目录下生成目录 xxx，demo.sh yyy 可生成目录 yyy
* 如果要生成的目录已经存在，则直接退出
* 生成的目录结构如下：

```bash
 ├── css
  │   └── style.css
  ├── index.html
  └── js
      └── main.js
```

* index.html 的内容为

```html
 <!DOCTYPE>
 <title>Hello</title>
 <h1>Hi</h1>
```
* css/style.css 的内容为

```css
 h1{color: red;}
```

* js/main.js 的内容为

```javascript
 var string = "Hello World"
 alert(string)
```

## 功能2 - 简单HTTP服务器

**目录**
* [x] [./node/server.js](https://github.com/mgss/bash-demo/blob/master/node/server.js)

**特性**
* 用户请求 / 时，返回 html 内容
* 该 html 内容里面由一个 css link 和一个 script
* css link 会请求 /style.css，返回 css 内容
* script 会请求 /main.js，返回 js 内容
* 请求 / /style.css /main.js 以外的路径，则一律返回 404 状态码

## License

 - [MIT](https://raw.githubusercontent.com/ionic-team/stencil/master/LICENSE)
