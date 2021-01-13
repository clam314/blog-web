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
  userInfo: {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdL10sEwZxL-CHCF5179HGJlhCt8vQ7v6_-w&usqp=CAU',
    email: 'clam666@163.com',
    introduction: 'Stay hungry, Stay foolish',
    tags: ['acg', '全粘工程师', '前端', 'Android', 'PS4', '电子产品', '摄影', '动漫', 'python'],
    name: 'Woods',
  },
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdL10sEwZxL-CHCF5179HGJlhCt8vQ7v6_-w&usqp=CAU',
  nickName: 'Woods',
  tags: ['acg', '全粘工程师', '前端', 'Android', 'acg', '摄影', '动漫', 'python'],
})

export default state
