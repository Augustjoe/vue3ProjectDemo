import { defineConfig, loadEnv } from "vite";
import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";

// 策略模式
const envResolver = {
    "build" : ()=>{
        console.log("生产环境")
        return {...viteBaseConfig,...viteProdConfig}
    },
    "serve" : ()=>{
        console.log("开发环境")
        return {...viteBaseConfig,...viteDevConfig}
    }
}

export default defineConfig(({command,mode})=>{
    /* 
        使用；loadEnv 设置全局变量文件
        process.cwd() : 当前服务启动的地址
        最后一个参数是文件的后缀
    */
   const env = loadEnv(mode,process.cwd(),"")
   console.log(mode,"mode")
   console.log(env,"env")
    // command 是build 还是 serve 主要取决于输入的命令是开发环境还是生产环境
   return envResolver[command]()
})