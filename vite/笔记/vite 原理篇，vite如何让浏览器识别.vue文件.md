原理篇 vite是怎么让浏览器可以识别.vue文件的

yarn install vite

yarn create 实际上就等于安装create-vite的脚手架，然后使用脚手架去构置项目

如何实现一个简单的vite的开发服务器

vite 在处理vue文件时会启动一个node服务，将拿到的文件进行解析，替换关键字并给出浏览器的解析方式。