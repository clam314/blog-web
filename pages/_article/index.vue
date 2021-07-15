<template>
  <div class="main-content">
    <div class="main-content-wrapper">
      <a-row :gutter="{ sm: 0, md: 12, lg: 18 }">
        <a-col class="show-small-screen" :sm="24" :lg="6">
          <user-info />
          <article-categories class="card-category" @change="handleCategoryChange" />
        </a-col>
        <a-col :sm="24" :lg="18">
          <a-card
            class="card-background"
            :bordered="false"
            :tabList="tabListNoTitle"
            :activeTabKey="noTitleKey"
            @tabChange="(key) => handleTabChange(key, 'noTitleKey')"
          >
            <article-list ref="articles" v-model="articleList" />
          </a-card>
        </a-col>
        <a-col class="show-big-screen" :sm="24" :lg="6">
          <user-info />
          <article-categories ref="categories" class="card-category" @change="handleCategoryChange" />
        </a-col>
      </a-row>
      <back-top />
    </div>
  </div>
</template>

<script>
import ArticleCategories from '@/components/page/article/ArticleCategories'
import UserInfo from '@/components/page/article/UserInfo'
import ArticleList from '~/components/page/article/ArticleList'

export default {
  components: {
    ArticleList,
    ArticleCategories,
    UserInfo,
  },
  async asyncData({ app, store, query }) {
    const parameter = {
      bid: process.env.APP_BID,
      pageNum: 0,
      pageCount: 5,
    }
    if (query.fid) {
      parameter.fid = query.fid
    }
    const [, data] = await Promise.all([
      store.dispatch('GetCategories', process.env.APP_BID),
      app.$Api.article.getArticles(parameter),
    ])
    if (data.head && data.head.respCode === 200) {
      data.result.pageNum = data.result.pageNum + 1
      data.result.selectedCategory = query.fid || ''
      return { articleList: data.result }
    }
  },
  data() {
    return {
      noTitleKey: 'article',
      articleList: {
        pageNum: 0,
        pageCount: 5,
        list: [],
        total: 0,
        selectedCategory: '',
      },
    }
  },
  computed: {
    tabListNoTitle() {
      return [
        {
          key: 'article',
          tab: `文章(${this.articleList.total})`,
        },
      ]
    },
  },
  mounted() {
    if (this.$route.query.fid) {
      this.$refs.categories.changeSelected(this.articleList.selectedCategory)
    }
  },
  methods: {
    handleTabChange(key, type) {
      this[type] = key
    },
    handleCategoryChange(fid) {
      this.$refs.articles.refreshData(fid)
    },
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/config.less';
@import '~assets/style/variables.less';
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
  }

  @media only screen and (max-width: @screen-md) {
    &-wrapper {
      padding-left: 5px;
      padding-right: 5px;
      margin-top: 0;
    }
  }

  .card-background {
    background: @card-bg-color;
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
