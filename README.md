# o-ui
```
- 基于vue[2.6.10]的移动端组件库
- 使用vw适配移动端
```

## 使用[基于vuecli3.x]
```
npm install o-ui-ldf -S
import OUI from 'o-ui-ldf'
import 'o-ui-ldf/lib/index.css'
Vue.use(OUI)

按需引入-无须引入css
npm i babel-plugin-component -S
.babelrc
{
	"plugins": [
		["component", {
			"libraryName": "o-ui-ldf",
			"root": "index.umd",
			"style": "./../index.css"
		}]
	]
}
import OUI, {Pager} from 'o-ui-ldf'
Vue.use(Pager)
```
## 日志
- 0.1.2-15
	- 目录变更 解决按需引入问题 
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
