## pager
---

> props

参数 | 类型 | 默认值 | 说明
--- | --- | --- | ---
data | String,Object,Number,Boolean | - | 数据
threshold | Number | 1 | 距离底部
autoScrollToBottom | Boolean | false | 自动滚动到底部
text | Object | { preload: '上拉显示更多', loading: '正在加载…',done: '─ 没有更多数据了 ─'} | 底部文字


> slot

名称 | scope | 说明
--- | --- | ---
done | - | 完成
loading | {busy, scrolled} | 加载中


> emit

事件名称 | 说明
--- | --- |
scroll | 滚动时
next | 到底部时
