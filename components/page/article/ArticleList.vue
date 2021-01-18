<template>
  <a-list size="large" rowKey="tid" :loading="loading" itemLayout="vertical" :dataSource="articles">
    <a-list-item :key="item.tid" slot="renderItem" slot-scope="item">
      <template slot="actions">
        <icon-text type="eye" :text="item.reads" />
        <icon-text type="like-o" :text="item.like" />
        <icon-text type="message" :text="item.comments" />
      </template>
      <a-list-item-meta>
        <a slot="title" class="article-title" @click="handleTitleClick(item.tid)">{{ item.title }}</a>
        <template slot="description">
          <icon-text type="tags" :text="item.tags.length === 0 ? '未分类' : ''" />
          <template v-for="(tag, index) in item.tags">
            <a-tooltip v-if="tag.length > 20" :key="index" :title="tag">
              <a-tag :key="index" :closable="false">{{ `${tag.slice(0, 20)}...` }}</a-tag>
            </a-tooltip>
            <a-tag v-else :key="index" :closable="false">{{ tag }}</a-tag>
          </template>
        </template>
      </a-list-item-meta>
      <img v-if="item.des_image !== ''" slot="extra" class="article-img" alt="logo" :src="item.des_image" />
      <article-list-content
        :description="item.description"
        :owner="item.user.name"
        :avatar="item.user.avatar"
        :category="item.category"
        :updateAt="Number(item.publishedTime)"
      />
    </a-list-item>
    <div v-if="articles.length > 0" slot="footer" style="text-align: center; margin-top: 16px">
      <a-button>加载更多</a-button>
    </div>
  </a-list>
</template>

<script>
import ArticleListContent from '@/components/page/article/ArticleListContent'
import IconText from '@/components/basic/IconText'

export default {
  components: {
    IconText,
    ArticleListContent,
  },
  props: {
    articles: {
      type: Array,
      default: () => {
        return []
      },
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      loadingMore: false,
      noMore: false,
    }
  },
  methods: {
    handleTitleClick(tid) {
      this.$router.push({
        path: 'article/details',
        query: {
          tid,
        },
      })
    },
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/variables.less';
@import '~assets/style/config.less';

// 修复 antv list组件 actions插槽莫名其妙多了空li元素的问题
/deep/ .ant-list-item-action > li:nth-child(even) {
  display: none;
}

.article-title {
  color: @article-title-color !important;
}

@img-width: 278px;
.article-img {
  width: @img-width;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  @media only screen and (max-width: @screen-sm) {
    width: 100%;
    height: 180px;
  }
}
</style>
