<template>
  <div class="app-footer-wrapper">
    <a-descriptions title="" layout="vertical" size="small" style="font-size: 12px">
      <a-descriptions-item label="项目地址">
        <template v-for="rep in repositories">
          <a :key="rep.href" :href="rep.href" style="display: block">{{ rep.name }}</a>
        </template>
      </a-descriptions-item>
      <a-descriptions-item label="友情链接">
        <template v-for="link in links">
          <a :key="link.href" :href="link.href" style="display: block">{{ link.name }}</a>
        </template>
      </a-descriptions-item>
      <a-descriptions-item label="联系我"> clam314@163.com </a-descriptions-item>
    </a-descriptions>
    <div style="padding: 34px 0">
      <span class="app-footer-text"> 转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源。 </span>
      <a-divider style="margin: 10px 0; background: #d2d2d7" />
      <span class="app-footer-text"> Copyright © 2020-2021 clam314 保留所有权利. </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      repositories: [
        { name: '博客web端', href: 'https://github.com/clam314/blog-web' },
        { name: '管理系统web端', href: 'https://github.com/clam314/blog-admin-web' },
        { name: '管理系统后台', href: 'https://github.com/clam314/blog-admin-api' },
      ],
      links: [{ name: 'github', href: 'https://github.com/clam314' }],
    }
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
