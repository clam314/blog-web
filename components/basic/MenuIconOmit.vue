<template>
  <div class="container" @click="onClick">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClose: false,
    }
  },
  methods: {
    onClick(event) {
      event.currentTarget.classList.toggle('change')
      this.isClose = !this.isClose
      this.$emit('change', this.isClose)
    },
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/config.less';

.container {
  display: inline-block;
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 25px;
  height: 2px;
  background-color: @nav-text-color;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-6px, 6px);
  transform: rotate(-45deg) translate(-6px, 6px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-5px, -5px);
  transform: rotate(45deg) translate(-5px, -5px);
}
</style>
