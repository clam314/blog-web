import createUserApi from '@/api/user.js'
import createArticleApi from '@/api/article.js'

export default (ctx, inject) => {
  const repositories = {
    user: createUserApi(ctx.$axios)(),
    article: createArticleApi(ctx.$axios)(),
  }
  inject('Api', repositories)
}
