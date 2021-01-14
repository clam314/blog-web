import Vue from 'vue'
import moment from 'moment'
import { zhCn } from '@/plugins/filter/zh-cn'
zhCn(moment) // 初始化moment
moment.locale('zh-cn')

Vue.filter('NumberFormat', function (value) {
  if (!value) {
    return '0'
  }
  return value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
})

Vue.filter('dayjs', function (dataStr, pattern = 'YYYY年MM月DD日') {
  return moment(dataStr).format(pattern)
})

Vue.filter('moment', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})
