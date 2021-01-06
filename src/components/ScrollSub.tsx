import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import style from './index.less'
@Component({})
class ScrollBar extends Vue {
  @Prop({ default: 500 }) private height?: string | number | undefined

  @Emit()
  reset(): number {
    return 22
  }

  get subHeight(): any {
    return Object.prototype.toString.call(this.height).includes('Number') ? `${this.height}px` : this.height
  }

  private initScroll(e: any): any {
    const refs: any = this.$refs
    const [oScroll, oBar, oP] = [refs.scrollCon, refs.scrollBar, refs.scroll]
    const scroll = e.target.scrollTop,
      h = oScroll.scrollHeight
    const pece = scroll / (h - oP.offsetHeight) // 移动的百分比
    oBar.style.top = `${(oP.offsetHeight - oBar.offsetHeight) * pece}px`
  }

  private initmouseDown(e: any): any {
    const refs: any = this.$refs
    const [oScroll, oBar, oP] = [refs.scrollCon, refs.scrollBar, refs.scroll]
    const e1 = e || window.event
    const downxy = { x: e1.clientX, y: e1.clientY }
    const otop = oBar.offsetTop
    document.onmousemove = function(eu) {
      const movexy = { x: eu.clientX, y: eu.clientY }
      const cy = movexy.y - downxy.y,
        allY = oP.offsetHeight - oBar.offsetHeight
      const rtop = cy + otop
      let t: any
      if (rtop > allY) t = oP.offsetHeight - oBar.offsetHeight
      else if (rtop < 0) t = 0
      else t = rtop
      oBar.style.top = `${t}px`
      oScroll.scrollTo(0, (t / allY) * (oScroll.scrollHeight - oP.offsetHeight))
      console.log((t / allY) * (oScroll.scrollHeight - oP.offsetHeight), oScroll.scrollHeight)
      // oScroll.documentElement.scrollTop=t/allY*oScroll.scrollHeight;
    }
    document.onmouseup = function(ev) {
      document.onmousemove = null
      document.onmouseup = null
    }
  }

  private mounted() {
    console.log(this.$slots, this.$scopedSlots.others)
  }
  protected render(h: any) {
    return (
      <div class={style.scl_scroll} style={{ height: this.subHeight }} ref="scroll">
        <div class={style.scl_content} ref="scrollCon" onscroll={() => this.initScroll(event)}>
          {this.$slots.default}
          {this.$slots.others}
        </div>
        <div class={style.scl_bar} ref="scrollBar" onmousedown={() => this.initmouseDown(event)} />
      </div>
    )
  }
}

export default ScrollBar
