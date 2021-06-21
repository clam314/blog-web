<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header class="app-header">
      <div class="app-header-wrapper">
        <div class="logo-wrapper">
          <div class="logo" @click="openEruda" />
          <span class="logo-title">Web前端实验室</span>
        </div>
        <app-menu
          class="app-menu app-menu-normal"
          :menus="menus"
          them="dark"
          :selected="selectedKeys"
          @onItemClick="onMenuItemClick"
        />
        <div class="app-header-wrapper-right">
          <menu-icon-omit v-model="drawerVisible" class="menu-icon-omit" />
        </div>
      </div>
    </a-layout-header>
    <div class="menus2-wrapper app-menu-drawer" :class="{ 'menus2-open': drawerVisible }">
      <app-menu
        class="app-menu app-menu-drawer"
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
import { initEruda } from '~/utils/eruda'

export default {
  components: { AppFooter, AppMenu, DrawerMenu, MenuIconOmit },
  data() {
    return {
      drawerVisible: false,
      menusVisible: true,
      // selectedKeys: [],
      hide: null,
    }
  },
  computed: {
    menus() {
      return this.$store.getters.navs
    },
    selectedKeys: {
      get() {
        return this.$store.getters.selectedNavs
      },
      set(value) {
        this.$store.commit('setSelectedNavs', value)
      },
    },
  },
  mounted() {
    if (!window.APP_INFO) {
      window.APP_INFO = {
        APP_VERSION: process.env.APP_VERSION,
        GIT_HASH: process.env.GIT_HASH,
        BUILD_DATE: process.env.BUILD_DATE,
      }
    }
    const name = this.findMenuOrRouter(this.$route.path, 'path', 'name')
    if (name) {
      this.selectedKeys = [name]
    }
    // hide 放在methods里面this的指向会有问题
    this.hide = () => {
      if (this.drawerVisible) {
        this.drawerVisible = false
      }
    }
    window.addEventListener('resize', this.hide)
    window.addEventListener('scroll', this.hide)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.hide)
    window.removeEventListener('scroll', this.hide)
  },
  methods: {
    openEruda() {
      if (!window.$eruda_click) {
        window.$eruda_click = 0
      }
      window.$eruda_click = window.$eruda_click + 1
      if (window.$eruda_click >= 5 && window.$eruda_click < 10) {
        this.$message.info(`click:${window.$eruda_click}`)
      }
      if (window.$eruda_click === 10) {
        initEruda()
        this.$message.success(`open eruda~`)
      }
    },
    onMenuItemClick(item) {
      this.selectedKeys = [item.key]
      const path = this.findMenuOrRouter(item.key, 'name', 'path')
      this.drawerVisible = false
      this.$router.push(path || '/')
    },
    findMenuOrRouter(val, key, findKey) {
      // 倒叙，避免'/'匹配所有路径……
      for (let i = this.menus.length - 1; i >= 0; i--) {
        const m = this.menus[i]
        const reg = RegExp(`^${m[key]}`)
        if (reg.test(val)) {
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
    width: @app-max-width;
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    .logo-wrapper {
      height: @app-header-height;
      padding-left: @app-max-width-margin*2;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    @logo-size: @app-header-height - 8px;
    .logo {
      height: @logo-size;
      width: @logo-size;
      background: url('~assets/image/logo2.svg') no-repeat;
      background-size: contain;
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
      display: none;
      justify-content: center;
      align-items: center;

      .menu-icon-omit {
        display: none;
        font-size: 20px;
        color: white;
        margin-right: @app-max-width-margin*2;
      }
    }
  }
}

/deep/ .nav-text {
  font-size: 16px;
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
    display: none;
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

@media screen and (max-width: @screen-sm) {
  .app-menu-drawer {
    display: block !important;
  }
  .app-menu-normal {
    display: none !important;
  }

  .app-header-wrapper-right {
    display: flex !important;
  }

  .menu-icon-omit {
    display: block !important;
  }
}
</style>
