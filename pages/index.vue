<template>
  <div class="container">
    <div class="container-1" :style="{ backgroundImage: `url(${background1})` }">网站介绍</div>
    <div class="container-3" style="min-height: 500px">占位</div>
    <div class="container-2" :style="{ backgroundImage: `url(${background2})` }">自我介绍</div>
    <div class="container-3">
      <website-timeline />
    </div>
    <div class="container-4" :style="{ backgroundImage: `url(${background3})` }">网站运行时间</div>
  </div>
</template>

<script>
import WebsiteTimeline from '@/components/page/home/WebsiteTimeline'
import { gerRandomImage } from '@/utils/utils'
export default {
  components: {
    WebsiteTimeline,
  },
  computed: {
    background1() {
      return gerRandomImage()
    },
    background2() {
      return gerRandomImage()
    },
    background3() {
      return gerRandomImage()
    },
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/config.less';

.container {
  height: 100%;
  width: 100%;

  &-1 {
    width: 100%;
    min-height: calc(100vh - @app-header-height);
    position: relative;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
  }

  &-2 {
    width: 100%;
    min-height: calc(100vh - @app-header-height);
    display: flex;
    justify-content: center;
    position: relative;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
  }

  &-4 {
    width: 100%;
    min-height: calc(100vh - @app-header-height);
    position: relative;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
  }
  &-3 {
    width: 100%;
    min-height: calc(60vh - @app-header-height);
    background-color: white;
    padding: 20px 0;
    @media only screen and (max-width: @app-max-width) {
      padding: 0;
    }
  }

  &-1::before,
  &-2::before,
  &-4::before {
    content: '';
    backdrop-filter: saturate(180%) blur(20px);
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
</style>
