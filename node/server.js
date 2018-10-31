var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2] || 8888

if(!port){
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function(request, response){
    var parsedUrl = url.parse(request.url, true)
    var path = request.url 
    var query = ''
    if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
    var pathNoQuery = parsedUrl.pathname
    var queryObject = parsedUrl.query
    var method = request.method

    /******** 从这里开始看，上面不要看 ************/
    const htmlContent = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><title>首页</title><link rel="stylesheet" href="/style.css"></head><body><h1>首页内容</h1><script src="/script.js"></script></body></html>`
    const cssContent = `body {background: #ccc;} h1 {color: #2577CC;}`
    const jsContent = `alert("这里是首页")`
    switch (path) {
        case '/':
            response.setHeader('Content-Type', 'text/html; charset=utf-8')
            response.write(htmlContent)
            response.end()
            break;

        case '/style.css':
            response.setHeader('Content-Type', 'text/css; charset=utf-8')
            response.write(cssContent)
            response.end()
            break;

        case '/script.js':
            response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
            response.write(jsContent)
            response.end()
            break;
    
        default:
            response.statusCode = 404
            response.setHeader('Content-Type', 'text/html; charset=utf-8')
            response.write('<h1>404 您访问的页面不存在</h1>')
            response.end()
            break;
    }



    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)

