const chalk = require('chalk')

const log = msg => console.log(chalk.yellow(msg))
const err = msg => console.log(chalk.red(msg))
const success = msg => console.log(chalk.green(msg))

const path = require('path')
const fs = require('fs')
const resolve = (...file) => path.resolve(__dirname, ...file)
// 递归创建目录
function mkdirs(directory, callback) {
	var exists = fs.existsSync(directory)
	if (exists) {
		callback()
	} else {
		mkdirs(path.dirname(directory), function () {
			fs.mkdirSync(directory)
			callback()
		})
	}
}

// 创建目录
function createDir(directory) {
	return new Promise((resolve) => {
		mkdirs(directory, function () {
			resolve(true)
		})
	})
}

const createFile = (path, data) => {
	if (fs.existsSync(path)) {
		return err(`${path} 文件已存在`)
	}
	return new Promise((resolve, reject) => {
		fs.writeFile(path, data, error => {
			if (error) {
				err(error.message)
				return reject(error)
			}
			resolve(true)
		})
	})
}

const checkDir = (dir) => fs.existsSync(dir)

module.exports = {
	mkdirs, createDir, createFile, resolve, checkDir, log, err, success
}