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
@import '~assets/style/config.less';

.container {
  height: 100%;
  width: 100%;

  &-1 {
    width: 100%;
    height: calc(500px - @app-header-height);

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
      // 修复Chrome闪烁问题
      -webkit-transform: translateZ(0);
      -webkit-backface-visibility: hidden;
      -webkit-perspective: 1000px;
    }
  }

  &-2 {
    width: 100%;
    height: 500px;
    background-color: black;

    &-wrapper {
      height: 100%;
      background: url('~assets/image/logo2.svg') no-repeat;
      //background-size: 40px 40px;
    }
  }
}
</style>
