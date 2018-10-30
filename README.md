# shell-demo
shell easy demo

## 功能
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

##　目录

* [x] [./shell/demo.sh](https://github.com/mgss/bash-demo/blob/master/shell/demo.sh) 基于shell脚本开发
* [x] [./node/demo.js](https://github.com/mgss/bash-demo/blob/master/node/demo.js) 基于Nodejs开发

## License

 - [MIT](https://raw.githubusercontent.com/ionic-team/stencil/master/LICENSE)
