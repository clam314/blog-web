<template>
  <a-layout style="min-height: 100vh">
    <drawer-menu
      :menus="menus"
      :selected="selectedKeys"
      :visible="drawerVisible"
      @close="onDrawerClose"
      @onItemClick="onMenuItemClick"
    />
    <a-layout-header class="app-header">
      <div class="app-header-wrapper">
        <img class="logo" src="~assets/image/logo1.svg" />
        <app-menu
          v-if="menusVisible"
          class="app-menu"
          :menus="menus"
          them="dark"
          :selected="selectedKeys"
          @onItemClick="onMenuItemClick"
        />
        <div v-if="!menusVisible" class="app-header-wrapper-right">
          <a-icon type="menu-unfold" style="font-size: 20px" @click="openDrawer" />
        </div>
      </div>
    </a-layout-header>
    <a-layout-content class="app-content">
      <div class="app-content-wrapper">
        <slot></slot>
      </div>
    </a-layout-content>
    <a-layout-footer class="app-footer">
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
    </a-layout-footer>
  </a-layout>
</template>
<script>
import DrawerMenu from '~/components/framework/DrawerMenu'
import AppMenu from '~/components/framework/AppMenu'

export default {
  components: { AppMenu, DrawerMenu },
  data() {
    return {
      drawerVisible: false,
      menusVisible: true,
      selectedKeys: ['站点主页'],
      menus: [
        { name: '站点主页', type: 'smile' },
        { name: '个人文章', type: 'read' },
      ],
      repositories: [
        { name: '博客web端', href: 'https://github.com/clam314/blog-web' },
        { name: '管理系统web端', href: 'https://github.com/clam314/blog-admin-web' },
        { name: '管理系统后台', href: 'https://github.com/clam314/blog-admin-api' },
      ],
      links: [{ name: 'github', href: 'https://github.com/clam314' }],
    }
  },
  mounted() {
    const result = window.matchMedia('(max-width: 768px)').matches
    this.drawerVisible = result
    this.menusVisible = !result
    const that = this
    window.onresize = () => {
      const result = window.matchMedia('(max-width: 768px)').matches
      that.drawerVisible = result
      that.menusVisible = !result
    }
  },
  methods: {
    onDrawerClose(visible) {
      this.drawerVisible = false
    },
    openDrawer() {
      this.drawerVisible = true
    },
    go2Github() {
      window.open('https://github.com/clam314')
    },
    onMenuItemClick(item) {
      this.selectedKeys = [item.key]
    },
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/variables.less';
@import 'assets/style/default.less';

@nav-background-color: rgba(0, 0, 0, 0.8);
.app-header {
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: @nav-background-color;
  height: @app-header-height;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0;
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  &-wrapper {
    padding: 0 10px;
    width: @app-max-width;
    display: flex;
    justify-content: space-between;

    .logo {
      padding: 5px;
      height: @app-header-height;
      width: @app-header-height;
    }

    .app-menu {
      height: @app-header-height;
      line-height: @app-header-height;
      background: transparent;
      font-size: 16px;
    }

    &-right {
      height: @app-header-height;
      line-height: @app-header-height;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.app-content {
  margin: @app-header-height 0 0 0;
}

.app-footer {
  width: 100%;

  &-wrapper {
    margin: 0 auto;
    max-width: @app-max-width;

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

  &-icon {
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: @primary-color;
    }
  }

  &-text {
    font-size: 12px;
    display: block;
  }
}
</style>
