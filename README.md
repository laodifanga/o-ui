![npm](https://img.shields.io/npm/v/o-ui-ldf)
# o-ui
```
- 基于vue[2.6.10]的移动端组件库
- 使用vw适配移动端[750为设计稿]
- vue-cli3.x脚手架
```

示例[demo](https://oui.29mn.com)


## 适配 postcss-px-to-viewport .postcssrc设置
```js
"postcss-px-to-viewport": {
	viewportWidth: 750,      // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
	viewportHeight: 1334,    // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
	unitPrecision: 3,        // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
	viewportUnit: 'vw',      // 指定需要转换成的视窗单位，建议使用vw
	selectorBlackList: ['ignore', 'ig'],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
	minPixelValue: 1,       // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
	exclude: /(node_modules)/,
	mediaQuery: false       // 允许在媒体查询中转换`px`
}
```

## 全量加载[基于vuecli3.x]
```js
npm install o-ui-ldf -S
import OUI from 'o-ui-ldf'
import 'o-ui-ldf/lib/index.css'
Vue.use(OUI)
```
## 按需引入-无须引入css
``` js
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
import {modal} from 'o-ui-ldf'
Vue.use(modal)

// OR

Vue.component(modal.name, modal)

// directive
import {directive_pager} from 'o-ui-ldf/lib/directive.js'
Vue.directive('pager', directive_pager)

```
## template
```html
<o-pager>
	...
</o-pager>
```

## 日志
- 0.2.7
	- 固定内置组件，样式，体积恒定
- 0.2.6
	- 新增内置服务$pop[toast,loading,alert]
	- 重新调整样式颜色等
	- 新增表单组件[rule, form, form-item]
	- 新增组件modal
- 0.2.5
	- 按照黄金分割思想微调css
	- 更换图标字体42个，天然对齐文本
- 0.2.4
	- 新增組件swiper
	- 新增css size
	- 新增字体图标24个
- 0.2.3
	- 新增directive[pager]
	- 基础css完成
- 0.2.2
	- 新增 css[avatar, broder, btn, color, gap]
	- 新增组件 pager
- 0.2.1
	- 按需引入
	- 目录变更
	- 新增命令添加组件和示例页面
- 0.1.2-15
	- 目录变更 解决按需引入问题 
- 0.1.1
	- 基础搭建 


## 目录
- demo 示例
- lib // 使用库
- src // 组件库源码
	- components 基础组件 

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

### lib 库打包
```
npm run lib
```

### 打包组件
```
npm run build:component
```

### gulp方式打包css
```
npm run build:css // 已废弃
```

### github .
See [github](https://gitbub.com/laodifanga/o-ui).



