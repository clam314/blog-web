const userApi = {
  GetUserInfo: '/blog/user',
}

export default ($axios) => () => {
  return {
    getUserInfo(parameter) {
      return $axios.$post(userApi.GetUserInfo, parameter)
    },
  }
}
