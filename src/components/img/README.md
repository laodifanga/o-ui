## img
---

> props

参数 | 类型 | 默认值 | 说明
--- | --- | --- | ---
src | String | - | 图片地址
errorSrc | String | - | 加载失败默认图
lazy | Boolean | false | 懒加载
width | String | - | 图片宽度
height | String | - | 图片高度
fit | String | - | 模式[fill, contain, cover, none, scale-down]



> slot

名称 | scope | 说明
--- | --- | ---
loading | - | 自定义加载

> emit

事件名称 | 说明
--- | --- |
loaded | 开启lazy后，图片加载完成时
