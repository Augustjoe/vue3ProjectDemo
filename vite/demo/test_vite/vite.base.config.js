import { defineConfig } from "vite";

export default defineConfig({
    optimizeDeps:{
        exclude:[], //将数组中的依赖不进行预构建
    },
    envPrefix:"env",
    css:{ //对css进行配置
        modules:{ // 是对css模块化的默认行为进行覆盖
            localsConvention:"camelCaseOnly",
            scopeBehaviour:"local",
            // generateScopedName:(name,filename,css)=>{
            //     // name 文件中的类名
            //     // fileName 当前css文件的绝对路径
            //     // css 就是当前的样式
            //     return `${name}_${Math.random( )}`

            // }
            // hashPrefix:"hello",
            globalModulePaths:[]
        },
        preprocessorOptions:{
            less:{
                math:'always',
                globalVars:{ // 设置
                    mainColor:"red",
                }
            }
        },
        devSourcemap:true // 可以方便的看到原文件是怎么写的

    }
})