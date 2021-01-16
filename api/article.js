const articleApi = {
  GetArticles: '/blog/list',
  GetArticleDetail: '/blog/details',
}

export default ($axios) => () => {
  return {
    getArticles(parameter) {
      return $axios.$post(articleApi.GetArticles, parameter)
    },

    getArticleDetail(parameter) {
      return $axios.$post(articleApi.GetArticleDetail, parameter)
    },
  }
}
