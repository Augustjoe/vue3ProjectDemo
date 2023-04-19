// 不能用esmodel 只能用commonjs
const Koa = require('koa')

const app = new Koa()

// node 最频繁做的事情是处理请求和操作文件

// 当请求来临时会直接进入到use函数中
// context 上下文 request -> 请求信息 响应信息 get请求
app.use((ctx)=>{
    console.log('ctx',ctx)
})

app.listen("5173",()=>{
    console.log('vite dev server on 5173node')
})
