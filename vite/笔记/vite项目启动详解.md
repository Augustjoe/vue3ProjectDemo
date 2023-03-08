## 比如我们运行了```yarn create vite```
    1. 首先会帮我们安装一个全局的create vite
    2. 会直接运行create-vite bin目录下的一个执行配置 （ create-vite 内置了vite ）
       - 像 vue-cli 和 create-react-app 不仅会安装好相关依赖还会将所有配置调整到最佳实践
## vite启动项目初体验
    1. 编译 
    在默认情况下，导入esmodule时要么是相对路径，要么是绝对路径，为什么不直接搜索的node_modules获取包呢？
    为了节省网络资源，全部引入node_modules非常消耗性能

    正常引入模块时

    ```js
       import _ from "lodash"
    ```

    会报错找不到文件路径

    ```js
        import __vite__cjsImport0_lodash from "/node_modules/.vite/deps/lodash.js?v=5232cc9a"; const _ = __vite__cjsImport0_lodash.__esModule ? __vite__cjsImport0_lodash.default : __vite__cjsImport0_lodash

    ```

    使用vite后会编译为如上
    找寻依赖的过程是依次向上的过程，直到搜索到根目录或对应依赖为止
    2. 打包 
    当进行生产打包时，vite会全权交给一个叫做rollup的库完成生产的打包，并使用**打包预构建**
    首先vite会找到对应的依赖，然后调用esbuild(对js语法进行处理的库)，将其他规范的代码换成esmodule规范，然后放到当前目录下的node_modules/.vite/deps

    解决了3个问题
    1. 不同的第三方包有不同的导出格式
    2.对路径上的处理可以直接使用.vite/deps,方便路径重写
    3.网络多包传输的性能问题，有了依赖预构建后，无论有多少个export 和 import ，vite都会尽可能的将他们集成最后只生成一个或几个模块


    