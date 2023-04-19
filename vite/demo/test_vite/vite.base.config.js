import { defineConfig } from "vite";

export default defineConfig({
    optimizeDeps:{
        exclude:[], //将数组中的依赖不进行预构建
    },
    envPrefix:"env"
})