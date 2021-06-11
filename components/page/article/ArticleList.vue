<template>
  <a-list size="large" rowKey="tid" itemLayout="vertical" :dataSource="articleList.list">
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
    <infinite-loading v-if="showInfinite" :identifier="infiniteId" @infinite="infiniteHandler" />
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
  model: {
    prop: 'articleList',
    event: 'more',
  },
  props: {
    articleList: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      noMore: false,
      infiniteId: +new Date(),
      showInfinite: true,
      autoLoadDisabled: false,
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
    infiniteHandler($state) {
      console.log('onLoadMore')
      const param = {
        bid: process.env.APP_BID,
        pageNum: this.articleList.pageNum,
        pageCount: this.articleList.pageCount,
      }
      if (this.articleList.selectedCategory) {
        param.fid = this.articleList.selectedCategory
      }
      this.$Api.article
        .getArticles(param)
        .then((data) => {
          if (data.head && data.head.respCode === 200) {
            this.articleList.pageNum = data.result.pageNum + 1
            this.articleList.total = data.result.total
            this.articleList.list.push.apply(this.articleList.list, data.result.list)
            this.noMore = this.articleList.list.length >= this.articleList.total - 1
            this.$emit('more', this.articleList)
          } else {
            this.$message.error(data.head.respMsg)
          }
          console.log('loaded')
          $state.loaded()
          if (this.noMore) {
            $state.complete()
            if (this.articleList.list.length === 0) {
              console.log('loaded:' + this.showInfinite)
              this.showInfinite = false
            }
          }
        })
        .catch((e) => {
          console.log(e)
          $state.loaded()
        })
    },
    refreshData(fid) {
      this.articleList.list = []
      this.articleList.pageNum = 0
      this.articleList.total = 0
      this.articleList.selectedCategory = fid
      this.noMore = false
      this.showInfinite = true
      this.infiniteId += 1
      this.$emit('more', this.articleList)
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
