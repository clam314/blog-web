<template>
  <div class="container">
    <div class="container-1">
      <div class="container-1-wrapper">内容1</div>
    </div>
    <div class="container-2">
      <div class="container-2-wrapper">内容2</div>
    </div>
    <div class="container-1">
      <div class="container-2-wrapper">内容2</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import '~assets/style/default.less';

.container {
  height: 100%;
  width: 100%;

  &-1 {
    width: 100%;
    height: calc(1080px - @app-header-height);

    position: relative;
    background-image: url(https://acg.toubiec.cn/random.php);
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    &::before {
      content: '';
      backdrop-filter: blur(7px);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  &-2 {
    width: 100%;
    height: 500px;
  }
}
</style>
