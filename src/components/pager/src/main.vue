<template>
	<div class="o-pager">
      <slot></slot>
      
      <div v-if="isOpenNext" class="o-pager__next">
        <template v-if="isDone">
          <slot name="done">{{text.done}}</slot>
        </template>
        <template v-else>
          <slot name="loading" v-bind="{busy: isBusy, scrolled}">
            <span v-if="isBusy" >
              <span loading="s"></span>
              {{text.loading}}
            </span>
            <span color="desc" v-else-if="scrolled">{{text.preload}}</span>
          </slot>
        </template>
      </div>
	</div>
</template>

<script>
	import {version, prefix} from '../../../../package.json'

	import {getScrollEventTarget, getScrollRect} from '../../../utils/dom.js'
	export default {
		name: `${prefix}Pager`,

		props: {
			data: '',
      
      threshold: { // 距离底部
        type: [Number, String],
        default: 1
			},
			
      autoScrollToBottom: {
        default: false
      },

      text: {
        type: Object,
        default() {
          return {
            preload: '上拉显示更多',
            loading: '正在加载…',
            done: '─ 没有更多数据了 ─',
          }
        }
      }
		},
		
    computed: {
      isOpenNext() { // 是否开启加载更多
        return this.$listeners && this.$listeners.next
      },

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
        if(this.busy || this.lock) return

        let {isBottom} = getScrollRect(this.page, this.threshold)
        if(isBottom) {
          this.busy = true
          this.autoScrollToBottom && this.scrollToBottom(this.page)
          this.$emit('next', this.done)
        }
      },

      scrollTo(x = 0, y = 0) {
        this.page.scrollTo(x, y)
      }
    }
	}
</script>

<style src="../style.styl" lang="stylus" />