<template>
  <a-card :bordered="false" class="card-background">
    <div class="user-info">
      <div class="avatar">
        <img :src="avatar" :onerror="defaultAvatar" />
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserInfo',
  computed: {
    ...mapGetters(['nickName', 'avatar', 'userInfo', 'tags']),
    defaultAvatar() {
      return `this.src="${require('@/assets/image/avatar.jpg')}"`
    },
  },
}
</script>

<style lang="less" scoped>
.card-background {
  backdrop-filter: saturate(180%) blur(20px);
  background-color: white;

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

    & > .username {
      color: rgba(0, 0, 0, 0.85);
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 4px;
    }
  }

  .user-tags {
    .ant-tag {
      margin-bottom: 8px;
    }

    & > .tags-title {
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      margin-bottom: 12px;
    }
  }
}
</style>
