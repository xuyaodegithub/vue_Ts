import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import cookies from 'js-cookie'
import style from './index.less'
import ScrollBar from '@/components/ScrollSub'

@Component({})
class App extends Vue {
  private tableData: any = [
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      tag: '家',
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄',
      tag: '公司',
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
      tag: '家',
    },
    {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
      tag: '公司',
    },
  ]
  private mounted() {
    const time = new Date(Date.now() + 24 * 60 * 60 * 1000)
    cookies.set('aa', 123, { expires: time })
  }
  protected render(h: any) {
    return (
      <div style={{ height: '100%' }} class={style.home}>
        <el-table ref="filterTable" data={this.tableData} style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180"
            {...{
              scopedSlots: {
                header:(scope: any) => {
                  return (
                    <el-popover placement="bottom" width="400" trigger="click" >
                      <h1>你好</h1>
                      <span slot="reference">{scope.column.label}<i class="el-icon-connection"></i></span>
                    </el-popover>
                  )
                },
              },
            }}
          />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="address" label="地址" />
          <el-table-column
            prop="tag"
            label="标签"
            width="100"
            {...{
              scopedSlots: {
                default:(scope: any) => {
                  return (
                    <el-tag type={scope.row.tag === '家' ? 'primary' : 'success'} disable-transitions>
                      {scope.row.tag}
                    </el-tag>
                  )
                },
              },
            }}
          />
        </el-table>
      </div>
    )
  }
}

export default App

// <template>
//   <div id="app">
//     <div id="nav">
//       <router-link to="/">Home1221</router-link> |
//       <router-link to="/about">About</router-link>
//     </div>
//     <router-view />
//   </div>
// </template>

// <style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
//
// #nav {
//   padding: 30px;
//
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
// </style>
