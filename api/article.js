const articleApi = {
  GetCategories: '/blog/categories',
  GetArticles: '/blog/list',
  GetArticleDetail: '/blog/details',
  LikeArticle: '/blog/like',
}

export default ($axios) => () => {
  return {
    getCategories(parameter) {
      return $axios.$post(articleApi.GetCategories, parameter)
    },

    getArticles(parameter) {
      return $axios.$post(articleApi.GetArticles, parameter)
    },

    getArticleDetail(parameter) {
      return $axios.$post(articleApi.GetArticleDetail, parameter)
    },

    likeArticle(parameter) {
      return $axios.$post(articleApi.LikeArticle, parameter)
    },
  }
}
