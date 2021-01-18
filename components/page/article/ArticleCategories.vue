<template>
  <a-card class="card-wrapper" :bordered="false">
    <div class="article-category">
      <a-divider class="category-title">{{ title }}</a-divider>
      <a-menu v-model="selected" class="categories" theme="light" mode="inline" @click="onMenuClick">
        <template v-for="item in categories">
          <a-menu-item :key="item.fid" class="category-wrapper">
            <span class="category">{{ item.name }}</span>
          </a-menu-item>
        </template>
      </a-menu>
    </div>
  </a-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      default: '文章类别',
    },
  },
  data() {
    return {
      selected: [],
    }
  },
  computed: {
    ...mapGetters(['categories']),
  },
  mounted() {
    this.selected = ['']
  },
  methods: {
    onMenuClick() {
      this.$emit('change', this.selected[0])
    },
    changeSelected(fid) {
      this.selected = [fid]
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
