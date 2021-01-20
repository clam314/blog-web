const appApi = {
  GetLinks: '/blog/links',
}

export default ($axios) => () => {
  return {
    getLinks(parameter) {
      return $axios.$post(appApi.GetLinks, parameter)
    },
  }
}
