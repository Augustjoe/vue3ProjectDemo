// 不能用esmodel 只能用commonjs
const Koa = require('koa')
// node 的原生模块 直接从原生node中引入
const fs = require('fs')
const path = require('path')


const app = new Koa()

// node 最频繁做的事情是处理请求和操作文件

// 当请求来临时会直接进入到use函数中
// context 上下文 request -> 请求信息 响应信息 get请求
app.use(async (ctx)=>{
    if(ctx.request.url === '/'){
        // 读取html文件
        const indexContent = await  fs.promises.readFile(path.resolve(__dirname,'./index.html'))
        console.log(indexContent,"indexContent")
        // 讲html文件作为主题发送给请求的人
        ctx.response.body = indexContent;
        // 告诉浏览器应该用什么方式解析拿到的文件
        ctx.response.set("Content-type","text/html")
    }
})

app.listen("5173",()=>{
    console.log('vite dev server on 5173node')
})
