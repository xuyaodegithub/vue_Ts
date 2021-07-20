import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/less/marOrpadd.less'
import '@/assets/less/cssReset.less'
import {
  Button,
  Tag,
  Select,
  Message,
  Popover,
  Table,
  Dialog,
  TableColumn,
  Pagination,
  Loading,
  Steps,
  Step,
  InputNumber,
  Option,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  MessageBox,
  // @ts-ignore
  Scrollbar,
  InfiniteScroll,
  RadioGroup,
  Radio,
  DatePicker,
  Tooltip,
  Form,
  FormItem,
  Image,
} from 'element-ui'
Vue.config.productionTip = false
Vue.config.productionTip = false

Vue.component(Scrollbar.name, Scrollbar)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Popover.name, Popover)
Vue.component(Table.name, Table)
Vue.component(Dialog.name, Dialog)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Pagination.name, Pagination)
Vue.component(Steps.name, Steps)
Vue.component(Step.name, Step)
Vue.component(InputNumber.name, InputNumber)
Vue.component(Option.name, Option)
Vue.component(Input.name, Input)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(DropdownItem.name, DropdownItem)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Radio.name, Radio)
Vue.component(Image.name, Image)
Vue.component(Tag.name, Tag)
Vue.use(Loading.directive)
Vue.use(InfiniteScroll)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$ELEMENT = { size: 'small' }
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
