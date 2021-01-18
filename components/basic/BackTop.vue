<template>
  <a-back-top class="back-top" />
</template>

<script>
export default {
  name: 'BackTop',
}
</script>

<style lang="less" scoped>
@import '~assets/style/variables.less';
@import '~assets/style/config.less';
.back-top {
  right: calc((100vw - @app-max-content-width) / 2 + 240px) !important;
  backdrop-filter: saturate(30%) blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  color: unset !important;

  /deep/ .ant-back-top-content {
    color: unset !important;
    background-color: unset !important;
  }

  @media only screen and (max-width: @app-max-content-width) {
    right: 210px !important;
  }

  @media only screen and (max-width: @screen-lg) {
    right: 30px !important;
  }

  @media only screen and (max-width: @screen-md) {
    right: 10px !important;
  }
}
</style>
