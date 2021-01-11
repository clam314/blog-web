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
        <img class="logo" src="~assets/image/logo.svg" />
        <app-menu
          v-if="menusVisible"
          class="app-menu"
          :menus="menus"
          :selected="selectedKeys"
          @onItemClick="onMenuItemClick"
        />
        <div v-if="!menusVisible" class="app-header-wrapper-right">
          <a-icon
            type="menu-unfold"
            style="font-size: 20px"
            @click="openDrawer"
          />
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
        <div>
          <div style="text-align: center; font-size: 18px">
            <span>Contact us </span>
            <a-icon type="github" class="app-footer-icon" @click="go2Github" />
            <span>or</span>
            <a-icon type="mail" class="app-footer-icon" />
          </div>
          <span class="app-footer-text">
            转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源。
          </span>
          <span class="app-footer-text">
            Copyright © 2020-2021 clam314 All Rights Reserved.
          </span>
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
      selectedKeys: ['主页'],
      menus: [
        { name: '主页', type: 'home' },
        { name: '个人文章', type: 'user' },
      ],
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

@app-max-width: 1190px;
@app-header-height: 64px;

.app-header {
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: transparent;
  height: @app-header-height;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  &-wrapper {
    padding: 0 10px;
    width: @app-max-width;
    display: flex;
    justify-content: space-between;

    .logo {
      height: @app-header-height;
      width: auto;
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
  margin: @app-header-height+16px 16px 16px;
}

.app-footer {
  width: 100%;

  &-wrapper {
    margin: 0 auto;
    max-width: @app-max-width;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-icon {
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: @primary-color;
    }
  }

  &-text {
    text-align: center;
    display: block;
  }
}
</style>
