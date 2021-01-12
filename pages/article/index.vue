<template>
  <div class="main-content">
    <div class="main-content-wrapper">
      <a-row :gutter="24">
        <a-col :md="24" :lg="7">
          <a-card :bordered="false">
            <div class="account-center-avatarHolder">
              <div class="avatar">
                <img :src="avatar" />
              </div>
              <div class="username">{{ nickName }}</div>
              <div v-if="userInfo.introduction" class="bio">{{ userInfo.introduction }}</div>
            </div>
            <div class="account-center-detail">
              <p v-if="userInfo.email"><a-icon type="mail" />{{ userInfo.email }}</p>
              <!--            <p v-if="userInfo.lastLoginIp"><a-icon type="global" />{{ userInfo.lastLoginIp }}</p>-->
              <!--            <p v-if="userInfo.lastLoginTime"><a-icon type="history" />{{ Number(userInfo.lastLoginTime) | moment }}</p>-->
            </div>
            <a-divider />

            <div class="account-center-tags">
              <div class="tagsTitle">标签</div>
              <template v-for="(tag, index) in tags">
                <a-tooltip v-if="tag.length > 20" :key="index" :title="tag">
                  <a-tag :key="index" :closable="false">{{ `${tag.slice(0, 20)}...` }}</a-tag>
                </a-tooltip>
                <a-tag v-else :key="index" :closable="false">{{ tag }}</a-tag>
              </template>
            </div>
            <a-divider :dashed="true" />
            <div class="account-center-team">
              <div class="teamTitle">团队</div>
              <div class="members">
                <a-row>
                  <a-col v-for="(item, index) in teams" :key="index" :span="12">
                    <a>
                      <span class="member">{{ item }}</span>
                    </a>
                  </a-col>
                </a-row>
              </div>
            </div>
          </a-card>
        </a-col>
        <a-col :md="24" :lg="17">
          <a-card
            style="width: 100%"
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
      teams: ['很有想法的', '专注设计', '辣~', '大长腿', '川妹子', '海纳百川'],
      noTitleKey: 'app',
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
    margin: 0 auto;

    .account-center-avatarHolder {
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

    .account-center-detail {
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

      .title {
        background-position: 0 0;
      }
      .group {
        background-position: 0 -22px;
      }
      .address {
        background-position: 0 -44px;
      }
    }

    .account-center-tags {
      .ant-tag {
        margin-bottom: 8px;
      }
    }

    .tagsTitle {
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      margin-bottom: 12px;
    }

    .account-center-team {
      .members {
        a {
          display: block;
          margin: 12px 0;
          line-height: 24px;
          height: 24px;

          .member {
            font-size: 14px;
            color: rgba(0, 0, 0, 0.65);
            line-height: 24px;
            max-width: 100px;
            vertical-align: top;
            margin-left: 12px;
            transition: all 0.3s;
            display: inline-block;
          }

          &:hover {
            span {
              color: #1890ff;
            }
          }
        }
      }
    }
  }
}
</style>
