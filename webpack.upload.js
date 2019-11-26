const fs = require('fs')
const path = require('path')
const resolve = (...file) => path.resolve(__dirname, ...file)
const dir = resolve('./dist')

let files = fs.readdirSync(dir)
files.forEach(file => {
  console.log(resolve(file))
  // let stat = fs.statSync(resolve(file))
  // console.log(stat)
  return
  if(stat.isDirectory()) {
    console.log(file, '文件夹')
  } else {
    console.log(file)
  }
})