<template>
	<div class="o-pager">
			<slot></slot>

			<template v-if="isDone">
				<slot name="done" :lock="lock">
					<div v-if="isDone" text="tc" color="desc" class="o-pager-done">
						─ 数据加载完毕 ─
					</div>
				</slot>
			</template>
	
			<template v-else-if="$listeners && $listeners.next">
				<slot name="loading" :busy="{isBusy, scrolled}">
					<div row="aic jcc" class="o-pager-loadingout">
	
						<template v-if="autoLoad">
							<span v-if="isBusy" loading></span>
							<span color="desc" v-else-if="scrolled">上拉加载更多</span>
						</template>
	
						<template v-else>
							<span v-if="isBusy" loading></span>
							<span btn color="bgbg" @click="notAutoLoad" v-else>加载更多</span>
						</template>
					</div>
				</slot>
			</template>
	</div>
</template>

<script>
	import {version, prefix} from '../../../../package.json'

	import {getScrollEventTarget, getScrollRect} from '../../../utils/dom.js'
	export default {
		name: `${prefix}Pager`,

		props: {
			data: '',
			
      autoLoad: { // 是否自动加载
        default: true
      },
      
      threshold: { // 距离底部
        type: [Number, String],
        default: 5
			},
			
      autoScrollToBottom: {
        default: false
      }
		},
		
    computed: {
      isBusy() {
        return !this.disabled && !this.lock && this.busy
			},
			
      isDone() {
        return !this.disabled && this.lock
      }
		},
		
    watch: {
      data() {
        this.busy = false
      }
		},
		
    data(n) {
      return {
        busy: false,
        lock: false,
        disabled: false, // 监听next变为true
        scrolled: false, // 是否可以滚动
      }
		},
		
    mounted() {
      this.page = getScrollEventTarget(this.$el)
      this.isWindow = this.page === window

      if(this.$listeners) {
        if(this.$listeners.scroll || this.$listeners.next) this._listenScroll(this.page)
        if(!this.$listeners.next) this.disabled = true
      }
		},
		
    destoryed() {
      this._destory(this.page)
		},
		
    methods: {
      _destory(dom) {
        dom.onscroll = null
        return this
      },
      _listenScroll(dom) {
        dom.onscroll = this.onScroll
      },
      scrollToBottom(dom) { // 滚动到最底部
        setTimeout(() => {
          let {scrollHeight} = getScrollRect(this.page, this.threshold)
          dom.scrollTo(0, scrollHeight)
        })
      },
      done(status = false) {
        this.lock = status
        if(status) {
          this.busy = false
        }
      },
      reset() {
        this.scrollTo(0, 0)
        this.busy = false
        this.lock = false
        this.disabled = false
        this.scrolled = false
        this._destory(this.page)._listenScroll(this.page)
      },
      onScroll(e) {
        if(!this.scrolled) {
          this.scrolled = true
        }
        this.$emit('scroll', e, getScrollRect(this.page, this.threshold))
        if(this.busy || this.lock || !this.autoLoad) return

        let {isBottom} = getScrollRect(this.page, this.threshold)
        if(isBottom) {
          this.busy = true
          this.autoScrollToBottom && this.scrollToBottom(this.page)
          this.$emit('next', this.done)
        }
      },

      notAutoLoad() {
        if(this.busy || this.lock) return

        this.busy = true
        this.$emit('next', this.done)
      },

      scrollTo(x = 0, y = 0) {
        this.page.scrollTo(x, y)
      }
    }
	}
</script>

<style src="../style.styl" lang="stylus" />