<template>
  <div class="main-content">
    <div class="main-content-wrapper">
      <a-row :gutter="{ sm: 0, md: 12, lg: 18 }">
        <a-col :sm="24" :lg="6">
          <user-info />
          <article-categories
            class="card-category"
            title="文章类别"
            :categories="categories"
            :selected="selectedCategory"
          />
        </a-col>
        <a-col :sm="24" :lg="18">
          <a-card class="card-background" :bordered="false"> </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import UserInfo from '@/components/page/article/UserInfo'
import ArticleCategories from '@/components/page/article/ArticleCategories'

export default {
  components: {
    UserInfo,
    ArticleCategories,
  },
  data() {
    return {
      selectedCategory: ['全部'],
      categories: ['全部', 'Android', 'CSS', 'HTML', 'Docker', '前端', '随笔'],
    }
  },
}
</script>

<style lang="less" scoped>
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
  }

  @media only screen and (max-width: 576px) {
    &-wrapper {
      padding-left: 0;
      padding-right: 0;
      margin-top: 0;
    }
  }

  .card-category {
    margin-top: 18px;
  }

  @media only screen and (max-width: 992px) {
    .card-category {
      margin-top: 0;
    }
  }
}
</style>
