export default function (ctx) {
  // eslint-disable-next-line no-unused-vars
  const { $axios, store, app, redirect } = ctx

  $axios.onRequest((config) => {
    console.log('Making request to ' + config.baseURL)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    console.log(code, error)
  })

  $axios.onResponse((res) => {
    console.log('onResponse', res.data)
    return res
  })
}
