<template>
  <a-layout style="min-height: 100vh">
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
          <menu-icon-omit v-model="drawerVisible" style="font-size: 20px; color: white" />
        </div>
      </div>
    </a-layout-header>
    <div class="menus2-wrapper" :class="{ 'menus2-open': drawerVisible }">
      <app-menu
        class="app-menu"
        :class="{ 'menu-show': drawerVisible }"
        :menus="menus"
        them="dark"
        :selected="selectedKeys"
        :mode="'inline'"
        @onItemClick="onMenuItemClick"
      />
    </div>
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

// 单位px
// const media = [
//   {
//     xs: 1,
//     sm: 576,
//     md: 768,
//     lg: 992,
//     xl: 1200,
//     xxl: 1600,
//   },
// ]

function matchMedia(callback, width = 576) {
  return () => {
    const result = window.matchMedia(`(max-width: ${width}px)`).matches
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
    if (name) {
      this.selectedKeys = [name]
    }
    const match = matchMedia((result) => {
      this.menusVisible = !result
    })
    match()
    window.onresize = match
  },
  methods: {
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
@import '~assets/style/config.less';

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
  line-height: @app-header-height;

  &-wrapper {
    padding-right: @app-max-width-margin;
    padding-left: @app-max-width-margin;
    width: @app-max-width;
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    .logo-wrapper {
      height: @app-header-height;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      padding: 3px 0;
      height: @app-header-height - 4px;
      width: auto;
    }

    .logo-title {
      margin-left: 10px;
      font-size: 18px;
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

.menus2-wrapper {
  top: @app-header-height;
  z-index: 1000;
  width: 100%;
  position: fixed;
  background-color: @nav-background-color;
  height: 0;
  transition: height 0.8s @ease-in-back;

  .app-menu {
    width: 0;
    background: transparent;
    font-size: 16px;
    opacity: 0;
    transition: 0.8s @ease-in-out-quint;
  }

  .menu-show {
    font-size: 16px;
    width: 100%;
    opacity: 1;
  }
}

.menus2-open {
  height: 30%;
  transition: height 0.4s @ease-out-back;
}

.app-content {
  background-color: @app-content-background-color;
  margin: @app-header-height 0 0 0;
  display: flex;
  //flex-direction: column;
}

.app-footer {
  background-color: @app-footer-background-color;
  width: 100%;
}
</style>
