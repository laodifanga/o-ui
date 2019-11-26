const path = require('path')
const ora = require('ora')

class QiniuUploadPlugin {
  constructor() {
    console.log('constructor ----------')
  }

  apply(compiler, noUpload) {
    if(noUpload) return
    let fn = compiler.hooks ? compiler.hooks.done.tapAsync.bind(compiler.hooks.done, 'QiniuUploadPlugin') : compiler.plugin.bind(compiler, 'done')
    fn((data, callback) => {
      callback && callback() // 返回构建结果

      const spinner = ora('开始上传到七牛').start()

      let {compilation} = data
      setTimeout(() => {
        // console.log(compilation.outputOptions.path, '------',compilation.assets, '---', callback)
        console.log(compilation.outputOptions.path, '---------', callback)
        spinner.succeed('上传完毕！')
      }, 3000)
    })
  }
}

module.exports = QiniuUploadPlugin