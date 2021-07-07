<template>
  <div class="introduction-wrapper">
    <a-row class="introduction-container" :gutter="{ xs: 20, sm: 10, md: 12, lg: 20, xl: 30 }">
      <template v-for="(card, index) in cards">
        <a-col :key="index" :xs="24" :sm="12">
          <div class="wrapper-background" :style="{ backgroundImage: `url(${getBackground()})` }">
            <div class="wrapper-filter">
              <div class="card">
                <h2 class="card-title">{{ card.title }}</h2>
                <p class="card-description">{{ card.description }}</p>
                <a class="card-link" :href="card.href" :target="index !== 0 ? 'view_window' : '_self'">
                  <span>{{ card.link }}</span>
                  <a-icon type="right" />
                </a>
              </div>
            </div>
          </div>
        </a-col>
      </template>
    </a-row>
  </div>
</template>

<script>
import { gerRandomImage } from '@/utils/utils'

export default {
  name: 'WebsiteIntroduction',
  data() {
    return {
      cards: [
        {
          title: '关于本站',
          description:
            '本站是个人练手从零搭建，技能点包括Vue、Nuxt、Koa2、mongoDB的应用，以及Nginx代理，Docker部署等等',
          link: '欢迎前往项目Issues和Star',
          href: '#app-footer',
        },
        {
          title: '关于我',
          description: '一枚90后，做过Android，写过Python，现在是一名前端工程师，并渐渐靠拢全栈',
          link: 'GitHub',
          href: 'https://github.com/clam314',
        },
      ],
    }
  },
  methods: {
    getBackground() {
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
      @media only screen and (max-width: @screen-lg) {
        height: 500px;
      }
      @media only screen and (max-width: @screen-md) {
        height: 400px;
      }
    }
    .wrapper-filter {
      height: 100%;
      width: inherit;
      position: relative;
      top: 0;
      left: 0;
      overflow: hidden;
      backdrop-filter: saturate(90%) blur(15px);
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;

      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        &-title {
          font-size: 36px;
          font-weight: 600;
          color: white;
          margin-bottom: 0;
        }
        &-description {
          max-width: 400px;
          margin-top: 0.8em;
          margin-bottom: 0;
          line-height: 1.5;
          font-size: 17px;
          font-weight: 400;
          color: #f5f5f7;
          text-align: center;
        }
        &-link {
          margin-top: 0.8em;
          color: #06e;

          > span {
            font-size: 17px;
            font-weight: 400;
            line-height: 1.5;
          }
          span:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
