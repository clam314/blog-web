<template>
  <a-card class="card-wrapper" :bordered="false">
    <div class="article-category">
      <a-divider class="category-title">文章类别</a-divider>
      <a-menu v-model="selected" class="categories" theme="light" mode="inline" @click="onMenuClick">
        <template v-for="(item, index) in categories">
          <a-menu-item :key="index" class="category-wrapper">
            <span class="category">{{ item }}</span>
          </a-menu-item>
        </template>
      </a-menu>
    </div>
  </a-card>
</template>

<script>
export default {
  name: 'ArticleCategories',
  model: {
    prop: 'selected',
    event: 'change',
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    selected: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onMenuClick() {
      this.$emit('change', this.selected)
    },
  },
}
</script>

<style lang="less" scoped>
.card-wrapper {
  backdrop-filter: saturate(180%) blur(20px);
  background-color: white;

  /deep/ .ant-card-body {
    padding-left: 0;
    padding-right: 0;
  }

  .article-category {
    .categories {
      border: unset;
    }

    .category-title {
      padding-right: 24px;
      padding-left: 24px;
    }
  }
}
</style>
