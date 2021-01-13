<template>
  <a-menu v-model="selectedKeys" :theme="them" :mode="mode" @click="onItemClick">
    <template v-for="menu in menus">
      <a-menu-item :key="menu.name">
        <a-icon :type="menu.type" style="font-size: inherit" />
        <span class="nav-text">{{ menu.name }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script>
export default {
  name: 'AppMenu',
  props: {
    menus: {
      type: Array,
      required: true,
    },
    selected: {
      type: Array,
      required: true,
    },
    them: {
      type: String,
      default: 'light', // light or dark
    },
    mode: {
      type: String, // vertical vertical-right horizontal inline
      default: 'horizontal',
    },
  },
  data() {
    return {
      selectedKeys: this.selected,
    }
  },
  watch: {
    selected(val) {
      this.selectedKeys = val
    },
  },
  methods: {
    onItemClick(item) {
      this.$emit('onItemClick', item)
    },
  },
}
</script>

<style lang="less" scoped>
/deep/ .ant-menu-item-selected {
  background-color: transparent !important;
}
</style>
