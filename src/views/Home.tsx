import { Vue, Component } from 'vue-property-decorator'
// import { Getter } from 'vuex-class'
import cookies from 'js-cookie'
// import style from './index.less'
import { ShareDialog } from '@esign-component/sign-h5-ui'
// import ScrollBar from '@/components/ScrollSub'

@Component({
  components: {
    ShareDialog,
  },
})
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
  private dialogVis = true
  private shareInitData = {
    qrCode:
      'https://esignoss.esign.cn/3438757422/8804d02c-6d57-40ac-b4bb-a478eb72b756/%E5%88%86%E4%BA%AB%E4%BA%8C%E7%BB%B4%E7%A0%81.png?Expires=1626092654&OSSAccessKeyId=LTAI4G23YViiKnxTC28ygQzF&Signature=R8M3fsCGhJKrVmAzAuS9oLdIapU%3D',
    resourceShareId: 'b753c05866dd46beb83e60630692f455',
    shareCode: 'Xvg0E9ieYa8BgwWx',
    shareUrl: 'https://miniapp-test.tsign.cn/share-guide/resource/urging?resourceShareId=b753c05866dd46beb83e60630692f455',
    shareEndTime: null,
    processId: 'd789e21eac5b4e87a8e0555e352d1bc1',
    processBizType: 3,
    appName: 'e签宝标准签',
    title: '额鹅鹅鹅',
    processCreateTime: 1625123221011,
    processUpdateTime: 1625123221011,
    completeTime: null,
    contractValidity: null,
    source: 5,
    processDesc: null,
    processStatus: 2,
    processStatusDesc: '签署中',
    processAccountList: [
      {
        person: {
          gid: 'e3a17a38f88a49b5b055e0a933099c4c',
          oid: '7b7680e2e16d493799d9e70f4fcc20c4',
          rid: null,
          uid: '6e57aaa66bd74c5c9cca9a57408dcd20',
          name: '许耀',
          mobile: null,
          email: 'shisan@tsign.cn',
          organ: false,
          nickname: '',
          deleted: null,
        },
        subject: {
          gid: '48d2d78b4f20434cb359b6a9c32312d3',
          oid: '6380f4f7f8124c15bb8750328d111e66',
          rid: null,
          uid: 'c8ead33f671845609b86192e39a2a4ff',
          name: 'esigntest006筠下测试企业',
          mobile: null,
          email: null,
          organ: true,
          nickname: null,
          deleted: null,
        },
        type: 1,
        hidden: false,
        currentUser: false,
      },
    ],
    participantAccountList: [
      {
        person: {
          gid: 'e3a17a38f88a49b5b055e0a933099c4c',
          oid: '7b7680e2e16d493799d9e70f4fcc20c4',
          rid: null,
          uid: '6e57aaa66bd74c5c9cca9a57408dcd20',
          name: '许耀',
          mobile: null,
          email: 'shisan@tsign.cn',
          organ: false,
          nickname: null,
          deleted: null,
        },
        subject: {
          gid: '48d2d78b4f20434cb359b6a9c32312d3',
          oid: '6380f4f7f8124c15bb8750328d111e66',
          rid: null,
          uid: 'c8ead33f671845609b86192e39a2a4ff',
          name: 'esigntest006筠下测试企业',
          mobile: null,
          email: null,
          organ: true,
          nickname: null,
          deleted: null,
        },
        type: 5,
        hidden: null,
        currentUser: true,
      },
      {
        person: {
          gid: 'b083fb5f29d7455682fc601ddcf4ee89',
          oid: '2b4746777f6c468e87873c511f09d5f2',
          rid: null,
          uid: '18afc916455c40859b85dc3731a8bd96',
          name: '吴波',
          mobile: '15158191407',
          email: null,
          organ: false,
          nickname: null,
          deleted: null,
        },
        subject: {
          gid: 'b083fb5f29d7455682fc601ddcf4ee89',
          oid: '2b4746777f6c468e87873c511f09d5f2',
          rid: null,
          uid: '18afc916455c40859b85dc3731a8bd96',
          name: '吴波',
          mobile: '15158191407',
          email: null,
          organ: false,
          nickname: null,
          deleted: null,
        },
        type: 5,
        hidden: null,
        currentUser: false,
      },
    ],
    currentOperatorList: [
      {
        person: {
          gid: 'e3a17a38f88a49b5b055e0a933099c4c',
          oid: '7b7680e2e16d493799d9e70f4fcc20c4',
          rid: null,
          uid: '6e57aaa66bd74c5c9cca9a57408dcd20',
          name: '许耀',
          mobile: null,
          email: 'shisan@tsign.cn',
          organ: false,
          nickname: null,
          deleted: null,
        },
        subject: {
          gid: '48d2d78b4f20434cb359b6a9c32312d3',
          oid: '6380f4f7f8124c15bb8750328d111e66',
          rid: null,
          uid: 'c8ead33f671845609b86192e39a2a4ff',
          name: 'esigntest006筠下测试企业',
          mobile: null,
          email: null,
          organ: true,
          nickname: null,
          deleted: null,
        },
        type: 5,
        hidden: null,
        currentUser: true,
      },
    ],
    operable: true,
    signFailed: false,
    flowId: '128e441890af431f84e4b4e593cbe81c',
    processType: 1,
    withFillProcess: 0,
    renewable: false,
    renewStatus: null,
  }
  private sendMessage = () => {
    console.log(22222222)
  }
  private downloadQrcode = () => {}
  private mounted() {
    const time = new Date(Date.now() + 24 * 60 * 60 * 1000)
    cookies.set('aa', 123, { expires: time })
  }

  protected render(h: any) {
    return (
      <div>
        <ShareDialog
          shareInitData={this.shareInitData}
          visible={this.dialogVis}
          ondownloadQrcode={this.downloadQrcode}
          sendMessage={this.sendMessage}
        />
      </div>
      // <div style={{ height: '100%' }} class={style.home}>
      //   <el-table ref="filterTable" data={this.tableData} style={{ width: '100%' }}>
      //     <el-table-column
      //       prop="date"
      //       label="日期"
      //       width="180"
      //       {...{
      //         scopedSlots: {
      //           header(scope: any) {
      //             return (
      //               <el-popover placement="bottom" trigger="click">
      //                 <i>你好</i>
      //                 <span class="cu" slot="reference">
      //                   {scope.column.label}
      //                   <i class="el-icon-connection" />
      //                 </span>
      //               </el-popover>
      //             )
      //           },
      //         },
      //       }}
      //     />
      //     <el-table-column prop="name" label="姓名" width="180" />
      //     <el-table-column prop="address" label="地址" />
      //     <el-table-column
      //       prop="tag"
      //       label="标签"
      //       width="100"
      //       {...{
      //         scopedSlots: {
      //           default(scope: any) {
      //             return (
      //               <el-tag type={scope.row.tag === '家' ? 'primary' : 'success'} disable-transitions>
      //                 {scope.row.tag}
      //               </el-tag>
      //             )
      //           },
      //         },
      //       }}
      //     />
      //   </el-table>
      // </div>
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
