## modal
---

> props

参数 | 类型 | 默认值 | 说明
--- | --- | --- | ---
transName | String | o-zoom | 动画名称，可选值：o-zoom,o-fade,o-move-left,o-move-top,o-move-bottom,o-move-right
type | String | center | 弹出方式，可选值：,top center bottom left right
show | Boolean | false | 显示弹窗
custom | Boolean | false | 是否自定义
maskBackground | String | - | 蒙版颜色
maskClick | Boolean | true | 蒙版点击是否关闭弹窗


> slot

名称 | scope | 说明
--- | --- | ---
default | - | -

> emit

事件名称 | 说明
--- | --- |
open | 打开
close | 关闭

