<template>
  <div class="introduction-wrapper">
    <a-row class="introduction-container" :gutter="{ xs: 20, sm: 10, md: 12, lg: 20, xl: 30 }">
      <a-col :xs="24" :sm="12">
        <div class="wrapper-background" :style="{ backgroundImage: `url(${background1})` }">
          <div class="wrapper-filter">内容</div>
        </div>
      </a-col>
      <a-col :xs="24" :sm="12">
        <div class="wrapper-background" :style="{ backgroundImage: `url(${background2})` }">
          <div class="wrapper-filter">内容</div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { gerRandomImage } from '@/utils/utils'

export default {
  name: 'WebsiteIntroduction',
  computed: {
    background1() {
      return gerRandomImage()
    },
    background2() {
      return gerRandomImage()
    },
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/config.less';
@import '~assets/style/variables.less';
.introduction-wrapper {
  max-width: @app-max-content-width;
  overflow: hidden;
  width: 100%;
  min-height: inherit;
  margin: 0 auto;

  .introduction-container {
    padding: 0;

    .wrapper-background {
      width: 100%;
      height: 600px;
      position: relative;
      overflow: hidden;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
    .wrapper-filter {
      height: 100%;
      width: inherit;
      position: relative;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      backdrop-filter: saturate(180%) blur(30px);
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
