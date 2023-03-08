import { defineConfig } from "vite";
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

export default defineConfig(({command})=>{
    // command 是build 还是 serve 主要取决于输入的命令是开发环境还是生产环境
   return envResolver[command]()
})