import { createRequestId } from '@/utils/utils'

export default function (ctx) {
  // eslint-disable-next-line no-unused-vars
  const { $axios, store, app, redirect } = ctx

  $axios.defaults.timeout = 6 * 1000

  $axios.onRequest((config) => {
    const headers = {
      requestId: createRequestId(),
      uuid: store.getters.uuid,
    }
    Object.assign(config.headers, headers)
    // console.log('request: ', config)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    console.log(code, error)
  })

  $axios.onResponse((res) => {
    // console.log('onResponse', res.data)
    return res
  })
}
