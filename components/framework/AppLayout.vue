<template>
  <a-layout style="min-height: 100vh">
    <drawer-menu
      :menus="menus"
      :visible="drawerVisible"
      @close="onDrawerClose"
    />
    <a-layout-header class="app-header">
      <div class="app-header-wrapper">
        <div class="logo" />
        <app-menu class="app-menu" :menus="menus" />
      </div>
    </a-layout-header>
    <a-layout-content class="app-content">
      <div class="app-content-wrapper">
        <slot></slot>
      </div>
    </a-layout-content>
    <a-layout-footer style="textalign: center">
      Ant Design ©2018 Created by Ant UED
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
      selectedKeys: ['主页'],
      menus: [
        { name: '主页', type: 'home' },
        { name: '个人文章', type: 'user' },
      ],
    }
  },
  mounted() {
    this.drawerVisible = window.matchMedia('(max-width: 768px)').matches
    const that = this
    window.onresize = () => {
      that.drawerVisible = window.matchMedia('(max-width: 768px)').matches
    }
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type)
    },
    onBreakpoint(broken) {
      console.log(broken)
    },
    onDrawerClose(visible) {
      this.drawerVisible = false
    },
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/variables.less';
@app-header-height: 64px;

.app-header {
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: white;
  height: @app-header-height;
  display: flex;
  align-items: center;
  justify-content: center;

  &-wrapper {
    width: 1190px;
    display: flex;
    justify-content: space-between;

    .logo {
      height: @app-header-height;
      width: @app-header-height * 2.4;
      color: @primary-color;
      float: left;
      background-image: url(~assets/image/logo.jpg),
        linear-gradient(@red-6, @geekblue-6);
      background-blend-mode: lighten;
      background-size: 100% 100%;
    }

    .app-menu {
      height: @app-header-height;
      line-height: @app-header-height;
    }
  }
}

.app-content {
  margin: @app-header-height+16px 16px 16px;
  background-color: @component-background;
  height: 1500px;
}
</style>
