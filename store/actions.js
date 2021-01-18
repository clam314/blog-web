const actions = {
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
}

export default actions
