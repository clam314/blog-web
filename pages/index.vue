<template>
  <div class="container">
    <div class="container-1" :style="{ backgroundImage: `url(${background1})` }">1网站介绍</div>
    <div></div>
    <div class="container-introduction">
      <website-introduction />
    </div>
    <div class="container-timeline">
      <website-timeline />
    </div>
  </div>
</template>

<script>
import WebsiteTimeline from '@/components/page/home/WebsiteTimeline'
import WebsiteIntroduction from '@/components/page/home/WebsiteIntroduction'
import { gerRandomImage } from '@/utils/utils'
export default {
  components: {
    WebsiteTimeline,
    WebsiteIntroduction,
  },
  computed: {
    background1() {
      return gerRandomImage()
    },
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/variables.less';
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

    &::before {
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
  &-introduction {
    width: 100%;
    //min-height: calc(100vh - @app-header-height);
    background-color: @app-footer-background-color;
    padding: 30px 10px;

    @media only screen and (max-width: @screen-xl) {
      padding: 20px 10px;
    }
    @media only screen and (max-width: @screen-lg) {
      padding: 12px 10px;
    }
    @media only screen and (max-width: @screen-sm) {
      padding: 0 0;
    }
  }

  &-timeline {
    width: 100%;
    min-height: calc(60vh - @app-header-height);
    background-color: @app-footer-background-color;
    padding: 0 10px;
    @media only screen and (max-width: @screen-sm) {
      padding: 0;
    }
  }
}
</style>
