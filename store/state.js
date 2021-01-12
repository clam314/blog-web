const state = () => ({
  navs: [
    {
      name: '站点首页',
      path: '/',
    },
    {
      name: '个人文章',
      path: '/article',
    },
  ],
  token: '',
  userInfo: null,
  avatar: '',
  nickName: '',
})

export default state
