<template>
  <a-drawer
    width="200"
    placement="left"
    :closable="false"
    :visible="visible"
    @close="onClose"
  >
    <div class="logo" />
    <app-menu
      :menus="menus"
      mode="inline"
      them="dark"
      style="width: 100%; height: 100%"
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
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    onClose() {
      this.$emit('close', this.visible)
    },
  },
}
</script>

<style lang="less" scoped>
/deep/ .ant-drawer-body {
  padding: 0;
  height: 100%;
}
</style>
