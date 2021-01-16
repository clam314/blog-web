const mutations = {
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
}
export default mutations
