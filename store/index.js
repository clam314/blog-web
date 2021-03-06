import { createUUID } from '@/utils/utils'

export const state = () => ({
  navs: [
    { name: '站点主页', type: 'smile', path: '/' },
    { name: '个人文章', type: 'read', path: '/article' },
  ],
  selectedNavs: [],
  uuid: '',
  token: '',
  userInfo: '',
  avatar: '',
  nickName: '',
  tags: [],
  categories: [],
  links: [],
})

export const getters = {
  navs: (state) => state.navs,
  selectedNavs: (state) => state.selectedNavs,
  uuid: (state) => state.uuid,
  userInfo: (state) => state.userInfo,
  avatar: (state) => state.avatar,
  nickName: (state) => state.nickName,
  tags: (state) => state.tags,
  categories: (state) => state.categories,
  links: (state) => state.links,
}

export const mutations = {
  setSelectedNavs(state, navs) {
    state.selectedNavs = navs
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  setAvatar(state, avatar) {
    state.avatar = avatar
  },
  setNickName(state, nickName) {
    state.nickName = nickName
  },
  setTags(state, tags) {
    state.tags = tags
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  setUUID(state, uuid) {
    state.uuid = uuid
  },
  setLinks(state, links) {
    state.links = links
  },
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { app }) {
    let uuid = app.$cookies.get('uuid')
    if (uuid) {
      commit('setUUID', uuid)
    } else {
      uuid = createUUID()
      app.$cookies.set('uuid', uuid, { path: '/', maxAge: 60 * 60 * 24 * 30 * 12 * 10 })
      commit('setUUID', uuid)
    }
    await Promise.all([dispatch('GetLinks'), dispatch('GetUserInfo', process.env.APP_BID)])
  },

  async GetUserInfo({ commit }, bid) {
    const res = await this.$Api.user.getUserInfo({ bid })
    if (res.head && res.head.respCode === 200) {
      const user = res.result
      commit('setUserInfo', user)
      commit('setAvatar', user.avatar)
      commit('setNickName', user.name)
      commit('setTags', user.tags)
    } else {
      console.log(res.head.respMsg)
    }
  },

  async GetCategories({ commit }, bid) {
    const res = await this.$Api.article.getCategories({ bid })
    if (res.head && res.head.respCode === 200) {
      commit('setCategories', [{ name: '全部', fid: '' }, ...res.result])
    } else {
      console.log(res.head.respMsg)
    }
  },

  async GetLinks({ commit }, bid) {
    const res = await this.$Api.myApp.getLinks({ bid })
    if (res.head && res.head.respCode === 200) {
      commit('setLinks', res.result)
    } else {
      console.log(res.head.respMsg)
    }
  },
}
