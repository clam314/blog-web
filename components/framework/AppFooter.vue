<template>
  <div class="app-footer-wrapper">
    <a-descriptions title="" layout="vertical" size="small" style="font-size: 12px" :column="{ xs: 1, sm: 4 }">
      <a-descriptions-item label="后端地址">
        <template v-for="(be, index) in backend">
          <a :key="index" :href="be.link" target="view_window" style="display: block">{{ be.title }}</a>
        </template>
      </a-descriptions-item>
      <a-descriptions-item label="项目地址">
        <template v-for="(rep, index) in repositories">
          <a :key="index" :href="rep.link" target="view_window" style="display: block">{{ rep.title }}</a>
        </template>
      </a-descriptions-item>
      <a-descriptions-item label="友情链接">
        <template v-for="(link, index) in links">
          <a :key="index" :href="link.link" target="view_window" style="display: block">{{ link.title }}</a>
        </template>
      </a-descriptions-item>
      <a-descriptions-item label="联系我">
        <template>
          <span class="desc">{{ email }}</span>
        </template>
      </a-descriptions-item>
    </a-descriptions>
    <div style="padding: 34px 0">
      <span class="app-footer-text"> 转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源。 </span>
      <a-divider style="margin: 10px 0; background: #d2d2d7" />
      <span class="app-footer-text"> {{ copyright }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    email() {
      return this.$store.state.userInfo.email
    },
    backend() {
      return this.$store.state.links.filter((item) => {
        return item.type === 'backend'
      })
    },
    links() {
      return this.$store.state.links.filter((item) => {
        return item.type === 'link'
      })
    },
    repositories() {
      return this.$store.state.links.filter((item) => {
        return item.type === 'repositories'
      })
    },
    copyright() {
      const year = new Date().getFullYear()
      return `Copyright © ${year} Woods 保留所有权利.`
    },
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/config.less';
.app-footer-wrapper {
  margin: 0 auto;
  max-width: @app-max-content-width;

  @footer-table-font-size: 12px;
  a {
    color: inherit;
    font-size: @footer-table-font-size;
    margin-bottom: 7px;
  }

  .desc {
    font-size: @footer-table-font-size;
  }

  /deep/ .ant-descriptions-item {
    vertical-align: top;
    font-size: @footer-table-font-size;
  }

  /deep/ .ant-descriptions-item-label {
    font-weight: 600;
    font-size: @footer-table-font-size;
  }
}

.app-footer-text {
  font-size: 12px;
  display: block;
}
</style>
