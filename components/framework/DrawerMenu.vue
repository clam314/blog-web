<template>
  <a-drawer width="200" :placement="placement" :closable="false" :visible="visible" @close="onClose">
    <div class="logo" />
    <app-menu
      class="app-menu"
      :menus="menus"
      :selected="selected"
      mode="inline"
      them="dark"
      style="width: 100%; height: 100%"
      @onItemClick="onItemClick"
    />
  </a-drawer>
</template>

<script>
import AppMenu from '~/components/framework/AppMenu'

export default {
  name: 'DrawerMenu',
  components: { AppMenu },
  props: {
    menus: {
      type: Array,
      required: true,
    },
    selected: {
      type: Array,
      required: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: 'top',
    },
  },
  data() {
    return {}
  },
  methods: {
    onClose() {
      this.$emit('close', this.visible)
    },
    onItemClick(item) {
      this.$emit('onItemClick', item)
    },
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/config.less';

/deep/ .ant-drawer-mask {
  background: unset;
}

/deep/ .ant-drawer-top {
  margin-top: @app-header-height;
  height: calc(100vh - @app-header-height);
}

/deep/ .ant-drawer-content {
  background-color: @nav-background-color;
  backdrop-filter: saturate(180%) blur(20px);
}

/deep/ .ant-drawer-content-wrapper {
  height: 100% !important;
}

/deep/ .ant-drawer-body {
  padding: 0;
  height: 100%;
}

.app-menu {
  padding-top: 50px;
  background: transparent;
}
</style>
