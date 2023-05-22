# node处理文件时
  如果使用了相对路径，则会用process.cwd()进行拼接
  因此要用 __dirname 去进行拼接
    例如 ： const result = fs.readFileSync(__dirname + '/文件名')
  但不同系统，获取到的绝对路径并不相同，要用path去转换
    const path = require("path")
    将代码修改成  const result = fs.readFileSync(path.resolve(__dirname + './文件名'))