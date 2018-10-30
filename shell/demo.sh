#!/usr/bin/env bash

cd ~/Desktop
if [ -d $1 ]; then
    echo "Error: 该目录已经存在，请重新创建"
    exit 1
else
    mkdir $1
    cd $1

    mkdir css js
    echo "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>" > index.html
    echo "h1{color: red;}" > ./css/style.css
    echo "var string = \"Hello World\"\nalert(string)" > ./js/main.js
    echo "Success：创建完成，程序已退出"

    exit 0
fi
