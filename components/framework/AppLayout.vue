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
        <div class="logo-wrapper">
          <img class="logo" src="~assets/image/logo1.svg" />
          <span class="logo-title">Web前端实验室</span>
        </div>
        <app-menu
          v-if="menusVisible"
          class="app-menu"
          :menus="menus"
          them="dark"
          :selected="selectedKeys"
          @onItemClick="onMenuItemClick"
        />
        <div v-if="!menusVisible" class="app-header-wrapper-right">
          <menu-icon-omit style="font-size: 20px; color: white" @change="openDrawer" />
        </div>
      </div>
    </a-layout-header>
    <a-layout-content class="app-content">
      <slot></slot>
    </a-layout-content>
    <a-layout-footer class="app-footer">
      <app-footer />
    </a-layout-footer>
  </a-layout>
</template>
<script>
import MenuIconOmit from '@/components/basic/MenuIconOmit'
import AppFooter from '@/components/framework/AppFooter'
import DrawerMenu from '~/components/framework/DrawerMenu'
import AppMenu from '~/components/framework/AppMenu'

function matchMedia(callback, width = '738px') {
  return () => {
    const result = window.matchMedia(`(max-width: ${width})`).matches
    callback(result)
  }
}

export default {
  components: { AppFooter, AppMenu, DrawerMenu, MenuIconOmit },
  data() {
    return {
      drawerVisible: false,
      menusVisible: true,
      selectedKeys: [],
      menus: [
        { name: '站点主页', type: 'smile', path: '/' },
        { name: '个人文章', type: 'read', path: '/article' },
      ],
    }
  },
  mounted() {
    const name = this.findMenuOrRouter(this.$route.path, 'path', 'name')
    this.selectedKeys = [name || this.menus[0].name]
    const match = matchMedia((result) => {
      this.drawerVisible = result
      this.menusVisible = !result
    })
    match()
    window.onresize = match
  },
  methods: {
    onDrawerClose(visible) {
      this.drawerVisible = false
    },
    openDrawer(status) {
      this.drawerVisible = status
    },
    onMenuItemClick(item) {
      this.selectedKeys = [item.key]
      const path = this.findMenuOrRouter(item.key, 'name', 'path')
      this.$router.push(path || '/')
    },
    findMenuOrRouter(val, key, findKey) {
      for (const m of this.menus) {
        if (val === m[key]) {
          return m[findKey]
        }
      }
    },
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/variables.less';
@import 'assets/style/default.less';

.app-header {
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: @nav-background-color;
  height: @app-header-height;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0;
  backdrop-filter: saturate(180%) blur(20px);
  //box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  line-height: @app-header-height;

  &-wrapper {
    padding: 0 10px;
    width: @app-max-width;
    display: flex;
    justify-content: space-between;

    .logo {
      padding: 5px 0;
      height: @app-header-height;
      width: @app-header-height;
    }

    .logo-title {
      font-size: 20px;
      color: @nav-text-color;
    }

    .app-menu {
      height: @app-header-height;
      line-height: @app-header-height;
      background: transparent;
      font-size: 16px;
    }

    &-right {
      line-height: @app-header-height;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.app-content {
  margin: @app-header-height 0 0 0;
  display: flex;
}

.app-footer {
  width: 100%;
}
</style>
