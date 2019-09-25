# o-ui
```
基于vue[2.6.10]的移动端组件库
```

## 使用
```
npm install o-ui-ldf -S
import OUI from 'o-ui-ldf'
Vue.use(OUI)

按需引入
npm i babel-plugin-component -S
.babelrc
{
	"plugins": [
		["component", {
			"libraryName": "o-ui-ldf",
			"styleLibraryName": "~node_modules/o-ui-ldf/static"
		}]
	]
}
import {Pager} from 'o-ui-ldf'
Vue.use(Pager)
```
## 日志
- 0.1.2-4
	- 目录变更 
- 0.1.1
	- 基础搭建 


## 目录
- demo 示例
- public
- lib //组件库
- static // 样式

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### github
See [github](https://gitbub.com/laodifanga/o-ui).
