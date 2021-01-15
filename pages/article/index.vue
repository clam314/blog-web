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
          <a-card
            class="card-background"
            :bordered="false"
            :tabList="tabListNoTitle"
            :activeTabKey="noTitleKey"
            @tabChange="(key) => handleTabChange(key, 'noTitleKey')"
          >
            <article-list />
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleCategories from '@/components/page/article/ArticleCategories'
import UserInfo from '@/components/page/article/UserInfo'
import ArticleList from '~/components/page/article/ArticleList'

export default {
  components: {
    ArticleList,
    ArticleCategories,
    UserInfo,
  },
  data() {
    return {
      selectedCategory: ['全部'],
      categories: ['全部', 'Android', 'CSS', 'HTML', 'Docker', '前端', '随笔'],
      noTitleKey: 'article',
      tabListNoTitle: [
        {
          key: 'article',
          tab: '文章(8)',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['nickName', 'avatar', 'userInfo', 'tags']),
  },
  methods: {
    handleTabChange(key, type) {
      this[type] = key
    },
    onMenuClick(item) {
      this.selectedCategory = [item.key]
    },
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
