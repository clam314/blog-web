<template>
  <div class="main-content">
    <div class="main-content-wrapper">
      <a-row :gutter="{ sm: 0, md: 12, lg: 18 }">
        <a-col :sm="24" :lg="6">
          <a-card :bordered="false" class="card-background">
            <div class="user-info">
              <div class="avatar">
                <img :src="avatar" />
              </div>
              <div class="username">{{ nickName }}</div>
              <div v-if="userInfo.introduction" class="bio">{{ userInfo.introduction }}</div>
            </div>
            <a-divider />

            <div class="user-tags">
              <div class="tags-title">标签</div>
              <template v-for="(tag, index) in tags">
                <a-tooltip v-if="tag.length > 20" :key="index" :title="tag">
                  <a-tag :key="index" :closable="false">{{ `${tag.slice(0, 20)}...` }}</a-tag>
                </a-tooltip>
                <a-tag v-else :key="index" :closable="false">{{ tag }}</a-tag>
              </template>
            </div>
          </a-card>
          <a-card class="card-background card-category" :bordered="false">
            <div class="article-category">
              <a-divider class="category-title">文章类别</a-divider>
              <a-menu
                v-model="selectedCategory"
                class="categories"
                theme="light"
                mode="inline"
                :defaultSelectedKeys="['全部']"
                @click="onMenuClick"
              >
                <template v-for="(item, index) in categories">
                  <a-menu-item :key="index" class="category-wrapper">
                    <span class="category">{{ item }}</span>
                  </a-menu-item>
                </template>
              </a-menu>
            </div>
          </a-card>
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
import ArticleList from '~/components/page/article/ArticleList'

export default {
  components: {
    ArticleList,
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

    .user-info {
      text-align: center;
      margin-bottom: 24px;

      & > .avatar {
        width: 104px;
        height: 104px;
        margin: 0 auto 20px;
        border-radius: 50%;
        overflow: hidden;
        img {
          height: 100%;
          width: 100%;
        }
      }

      .username {
        color: rgba(0, 0, 0, 0.85);
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        margin-bottom: 4px;
      }
    }

    .user-details {
      p {
        margin-bottom: 8px;
        padding-left: 26px;
        position: relative;
      }

      i {
        position: absolute;
        height: 14px;
        width: 14px;
        left: 0;
        top: 4px;
      }
    }

    .user-tags {
      .ant-tag {
        margin-bottom: 8px;
      }
    }

    .tags-title {
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      margin-bottom: 12px;
    }

    .article-category {
      .category-title {
        padding-right: 24px;
        padding-left: 24px;
      }

      .categories {
        //.category-wrapper {
        //  padding: 0;
        //  width: 100%;
        //  //.category {
        //  //  font-size: 14px;
        //  //  color: rgba(0, 0, 0, 0.65);
        //  //  line-height: 24px;
        //  //  max-width: 100px;
        //  //  vertical-align: top;
        //  //  margin-left: 24px;
        //  //  transition: all 0.3s;
        //  //  display: inline-block;
        //  //}
        //
        //  &:hover {
        //    span {
        //      color: #1890ff;
        //    }
        //  }
        //}
      }
    }
  }

  .card-background {
    backdrop-filter: saturate(180%) blur(20px);
    background-color: white;
  }

  .card-category {
    margin-top: 18px;

    /deep/ .ant-card-body {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media only screen and (max-width: 576px) {
    &-wrapper {
      padding-left: 0;
      padding-right: 0;
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 992px) {
    .card-category {
      margin-top: 0;
    }
  }
}
</style>
