<template>
  <div class="antd-pro-components-article-list-content-index-listContent">
    <div class="description" style="word-wrap: break-word">
      <slot>
        {{ description }}
      </slot>
    </div>
    <div class="extra">
      <img class="avatar" :src="avatar" :onerror="defaultAvatar" />
      <span class="owner">{{ owner }}</span> 发布在 <span class="category">{{ category }}</span>
      <em>{{ updateAt | dayjs }}</em>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: '',
    },
    owner: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    updateAt: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    defaultAvatar() {
      return `this.src="${require('@/assets/image/avatar.jpg')}"`
    },
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/config.less';
@import '~assets/style/variables.less';
.antd-pro-components-article-list-content-index-listContent {
  .description {
    max-width: 720px;
    line-height: 22px;
  }
  .extra {
    margin-top: 16px;
    color: @text-color-secondary;
    line-height: 22px;

    & .avatar {
      position: relative;
      top: 1px;
      width: 20px;
      height: 20px;
      margin-right: 8px;
      vertical-align: top;
      border-radius: 50%;
      overflow: hidden;
    }

    & .owner,
    & .category {
      color: @article-category-color;
    }

    & > em {
      margin-left: 16px;
      color: @disabled-color;
      font-style: normal;
    }
  }
}

@media screen and (max-width: @screen-sm) {
  .antd-pro-components-article-list-content-index-listContent {
    .extra {
      & > em {
        display: block;
        margin-top: 8px;
        margin-left: 0;
      }
    }
  }
}
</style>
