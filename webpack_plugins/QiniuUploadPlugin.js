const qiniu = require('qiniu')
const path = require('path')
const ora = require('ora')
const chalk = require('chalk')



class QiniuUploadPlugin {
  constructor(config, noUpload) {
    this.noUpload = noUpload
    if (noUpload) return
    let { accessKey, secretKey, bucket, zone } = config,
      mac = new qiniu.auth.digest.Mac(accessKey, secretKey),
      putPolicy = new qiniu.rs.PutPolicy({ scope: bucket }),
      uploadToken = putPolicy.uploadToken(mac),
      _config = new qiniu.conf.Config()
    _config.zone = qiniu.zone[zone]
    this.config = config

    this.qiniuAuthenticationConfig = { // 七牛认证信息
      mac, // 鉴权
      uploadToken,
      formUploader: new qiniu.form_up.FormUploader(_config),
    }
    this.bucketManager = new qiniu.rs.BucketManager(mac, _config)
  }

  apply(compiler, noUpload) {
    if (noUpload) return
    let fn = compiler.hooks ? compiler.hooks.done.tapAsync.bind(compiler.hooks.done, 'QiniuUploadPlugin') : compiler.plugin.bind(compiler, 'done')

    fn(async (data, callback) => {
      callback && callback() // 返回构建结果
      this.absPath = data.compilation.outputOptions.path

      let { compilation } = data,
        promises = [],
        assets = Object.keys(compilation.assets),
        size = assets.length,
        spinner = ora(chalk.blue(`[${size}]个文件准备上传到七牛`)).start()

      assets.forEach((file, key) => {
        if (! /.html$/.test(file)) promises.push(this.uploadFile(file, false, key))
      })

      await Promise.all(promises).catch(err => spinner.stop())
      spinner.succeed(chalk.green('文件上传完毕'))
    })
  }

  uploadFile(filename, coverUploadToken, index) {
    return new Promise((resolve, reject) => {
      const localFile = path.join(this.absPath, filename),
        spinner = ora(`${filename}`).start(),
        uploadToken = coverUploadToken ? coverUploadToken : this.qiniuAuthenticationConfig.uploadToken,
        putExtra = new qiniu.form_up.PutExtra(),
        successFilename = chalk.cyan(`${filename}`) + ' -> ' + chalk.magenta(`${index + 1} `)
      // // css 添加mimeType
      // if (/\.css$/.test(filename)) {
      //   putExtra.mimeType = 'text/css'
      // }
      this.qiniuAuthenticationConfig.formUploader.putFile(uploadToken, filename, localFile, putExtra, (err, body, info) => {
        if (err) throw err
        if (info.statusCode == 200) {
          spinner.succeed(`${successFilename}${putExtra.mimeType}`)
          return resolve(info)
        }
        if (this.config.cover && info.status == 614 || info.statusCode == 614) {
          spinner.fail(`${successFilename}：存在，尝试覆盖上传`)
          return resolve(this.uploadFile(filename, this.coverUploadFile(filename)))
        }
        if (info.status == 614 || info.statusCode == 614) {
          spinner.fail(`${successFilename}：已存在`)
          return resolve(info)
        }
        spinner.fail(`${successFilename}：上传失败`)
        reject(info)
      })
    })
  }

  coverUploadFile(filename) {
    let putPolicy = new qiniu.rs.PutPolicy({
      scope: `${this.config}:${filename}`
    })
    return putPolicy.uploadToken(this.qiniuAuthenticationConfig.mac)
  }
}

module.exports = QiniuUploadPlugin
// 华东	z0	服务器端上传：http(s)://up.qiniup.com
// 客户端上传： http(s)://upload.qiniup.com
// 华北	z1	服务器端上传：http(s)://up-z1.qiniup.com
// 客户端上传：http(s)://upload-z1.qiniup.com
// 华南	z2	服务器端上传：http(s)://up-z2.qiniup.com
// 客户端上传：http(s)://upload-z2.qiniup.com
// 北美	na0	服务器端上传：http(s)://up-na0.qiniup.com
// 客户端上传：http(s)://upload-na0.qiniup.com
// 东南亚	as0	服务器端上传：http(s)://up-as0.qiniup.com
// 客户端上传：http(s)://upload-as0.qiniup.com
module.exports.config = {
  accessKey: 'ayYYnX18rdhkTHrlSOmAICiAgKHara4jb-F8qZGr',
  secretKey: '2nYtS09fMsuZ4DXi0GsUKKJSq81an1oQkSZ5rZi4',
  bucket: 'gsweb', // 存储空间名称
  zone: 'Zone_z0', // 存储地区
  cover: false, // 是否覆盖同名文件
}