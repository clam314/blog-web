import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading'
import Spin from 'ant-design-vue/lib/spin'
import NoMore from '@/components/basic/NoMore'

Vue.use(InfiniteLoading, {
  slots: {
    spinner: Spin,
    noMore: NoMore,
    error: {
      render: (h) => h('div'),
    },
  },
})
