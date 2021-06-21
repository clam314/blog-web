import Vue from 'vue'
import {
  Button,
  Timeline,
  Tag,
  BackTop,
  Icon,
  Divider,
  Descriptions,
  Layout,
  Menu,
  Drawer,
  Card,
  List,
  Tooltip,
  Row,
  Col,
  Result,
  message,
} from 'ant-design-vue'
Vue.prototype.$message = message
message.config({
  top: '100px',
  maxCount: 1,
})

Vue.use(Descriptions)
Vue.use(Button)
Vue.use(Timeline)
Vue.use(Tag)
Vue.use(BackTop)
Vue.use(Icon)
Vue.use(Divider)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Drawer)
Vue.use(Card)
Vue.use(List)
Vue.use(Tooltip)
Vue.use(Row)
Vue.use(Col)
Vue.use(Result)
