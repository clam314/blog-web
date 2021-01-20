<template>
  <div class="main-content">
    <div class="main-content-wrapper">
      <a-row :gutter="{ sm: 0, md: 12, lg: 18 }">
        <a-col class="show-small-screen" :sm="24" :lg="6">
          <user-info />
          <article-categories class="card-category" @change="onCategoryItemClick" />
        </a-col>
        <a-col :sm="24" :lg="18">
          <a-card class="card-background" :bordered="false">
            <div class="article-info-wrapper" :style="{ backgroundImage: `url(${cardImg})` }">
              <div class="article-info">
                <span class="article-info-title">{{ article ? article.title : '' }}</span>
                <div style="display: flex; justify-content: center; align-items: center">
                  <icon-text class="article-info-num" type="eye" :text="article ? article.reads : 0" />
                  <a-divider class="article-info-divider" type="vertical" />
                  <icon-text class="article-info-num" type="like-o" :text="article ? article.like : 0" />
                  <a-divider class="article-info-divider" type="vertical" />
                  <icon-text class="article-info-num" type="message" :text="article ? article.comments : 0" />
                </div>
              </div>
            </div>
            <!--            eslint-disable-next-line-->
            <div class="markdown-body"  v-html="article.contentHtml" />
          </a-card>
        </a-col>
        <!--        根据屏幕大小显示不同地方的个人信息-->
        <a-col class="show-big-screen" :sm="24" :lg="6">
          <user-info />
          <article-categories ref="categories" class="card-category" @change="onCategoryItemClick" />
        </a-col>
      </a-row>
      <back-top />
    </div>
  </div>
</template>

<script>
import UserInfo from '@/components/page/article/UserInfo'
import ArticleCategories from '@/components/page/article/ArticleCategories'
import BackTop from '@/components/basic/BackTop'

export default {
  components: {
    BackTop,
    UserInfo,
    ArticleCategories,
  },
  async asyncData({ app, store, query }) {
    const [, , data] = await Promise.all([
      store.dispatch('GetUserInfo', process.env.APP_BID),
      store.dispatch('GetCategories', process.env.APP_BID),
      app.$Api.article.getArticleDetail({ bid: process.env.APP_BID, tid: query.tid }),
    ])
    return { article: data.result }
  },
  data() {
    return {
      article: {},
    }
  },
  computed: {
    cardImg() {
      if (this.article && this.article.des_image) {
        return this.article.des_image
      } else {
        return 'https://acg.yanwz.cn/wallpaper/api.php'
      }
    },
  },
  mounted() {
    this.$refs.categories.changeSelected(this.article.fid)
  },
  methods: {
    onCategoryItemClick(item) {
      console.log('onCategoryItemClick', item)
      this.$router.push({
        path: '/article',
        query: {
          fid: item,
        },
      })
    },
  },
  head() {
    return {
      title: this.article.title || '前端实验室',
      meta: [
        { hid: 'description', name: 'description', content: this.article.description },
        { hid: 'keywords', name: 'keywords', content: this.article.tags.toString() },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css',
        },
        {
          rel: 'stylesheet',
          href: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/paraiso-dark.min.css',
        },
      ],
      script: [{ src: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/highlight.min.js' }],
    }
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/variables.less';
@import '~assets/style/config.less';
.main-content {
  width: 100%;
  height: 100%;
  min-height: 100%;
  transition: 0.3s;

  &-wrapper {
    max-width: @app-max-width;
    padding-left: @app-max-width-margin * 2;
    padding-right: @app-max-width-margin*2;
    margin: 18px auto 18px auto;
    overflow: hidden;

    .article-info-wrapper {
      width: 100%;
      height: 350px;
      position: relative;
      border-radius: 5px;
      overflow: hidden;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      //background-attachment: fixed;
      margin-bottom: 20px;
      @media only screen and (max-width: @screen-sm) {
        height: 180px;
      }

      .article-info {
        height: 100%;
        width: 100%;
        border-radius: 5px;
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        backdrop-filter: saturate(180%) blur(20px);
        background-color: rgba(0, 0, 0, 0.3);

        &-title {
          color: white;
          font-size: 32px;
          margin: 0 50px 20px;
          text-align: center;
        }

        &-num {
          color: white;
          font-size: 18px;
        }
        &-num:not(:last-of-type) {
          margin-right: 20px;
          border-right-color: white;
        }

        &-divider {
          margin-top: 5px;
          margin-right: 20px;
        }

        @media only screen and (max-width: @screen-md) {
          &-title {
            font-size: 24px;
            margin-bottom: 10px;
          }

          &-num {
            color: white;
            font-size: 14px;
          }
          &-num:not(:last-of-type) {
            margin-right: 10px;
            border-right-color: white;
          }

          &-divider {
            margin-top: 2px;
            margin-right: 10px;
          }
        }
      }
    }
  }

  /deep/ .markdown-body pre {
    padding: 0;
  }

  @media only screen and (max-width: @screen-md) {
    &-wrapper {
      padding-left: 1px;
      padding-right: 1px;
      margin-top: 0;
    }
  }

  .card-category {
    margin-top: 18px;
  }
  .show-small-screen {
    display: none;
  }
  .show-big-screen {
    display: unset;
  }

  @media only screen and (max-width: @screen-lg) {
    .card-category {
      margin-top: 0;
    }

    .show-small-screen {
      display: unset;
    }
    .show-big-screen {
      display: none;
    }
  }
}
</style>
