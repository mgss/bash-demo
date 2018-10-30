#!/usr/bin/env node

const fs = require('fs')
const dirName = process.argv[2]


function fsExistsSync(path) {
    /**
     * 判断该文件夹是否存在
     * path - String
     */
    try{
        fs.accessSync(path,fs.F_OK);
    }catch(e){
        return false;
    }
    return true;
}

function main(dirName) {
    if (!dirName) {
        console.log("Error：请在执行命令后跟要创建的目录名称")
        return
    }
    if(fsExistsSync(dirName)) {
        console.log("Error：该目录已经存在，请重新创建")
        return
    }

    const htmlTpl = '<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>'
    const cssTpl = 'h1{color: red;}'
    const jsTpl = 'var string = \"Hello World\"\nalert(string)'

    fs.mkdirSync("./" + dirName)
    process.chdir("./" + dirName)
    fs.mkdirSync('css')
    fs.mkdirSync('js')
   
    fs.writeFileSync("./index.html", htmlTpl)
    fs.writeFileSync("./css/style.css", cssTpl)
    fs.writeFileSync("./js/main.js", jsTpl)

    console.log("Success：创建完成，程序已退出");
    process.exit(0)
}

main(dirName)
