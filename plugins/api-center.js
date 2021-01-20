import createUserApi from '@/api/user.js'
import createArticleApi from '@/api/article.js'
import createAppApi from '@/api/app.js'

export default (ctx, inject) => {
  const repositories = {
    myApp: createAppApi(ctx.$axios)(),
    user: createUserApi(ctx.$axios)(),
    article: createArticleApi(ctx.$axios)(),
  }
  inject('Api', repositories)
}
