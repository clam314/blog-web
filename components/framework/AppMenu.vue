<template>
  <a-menu
    v-model="selectedKeys"
    :theme="them"
    :mode="mode"
    @change="onItemClick"
  >
    <template v-for="menu in menus">
      <a-menu-item :key="menu.name">
        <a-icon :type="menu.type" />
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
      selectedKeys: [],
    }
  },
  created() {
    this.selectedKeys = [this.menus[0].name]
  },
  methods: {
    onItemClick(item, key, keyPath) {
      this.$emit('onItemClick', item, key, keyPath)
    },
  },
}
</script>

<style lang="less" scoped></style>
