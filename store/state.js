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
    tags: ['acg', '前端'],
    name: '壹原侑子',
  },
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdL10sEwZxL-CHCF5179HGJlhCt8vQ7v6_-w&usqp=CAU',
  nickName: '壹原侑子',
  tags: ['acg', '前端'],
})

export default state
