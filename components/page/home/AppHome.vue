<template>
  <div class="home">
    <div class="home-wrapper">
      <a-row>
        <a-col class="home-title" :xs="24">
          <h2><span style="font-weight: 800">Web</span>前端实验室</h2>
          <h2>欢迎到来</h2>
        </a-col>
        <a-col class="home-body" :xs="24" :sm="12">
          <div class="home-body-container">
            <span class="home-body-container-text-title">我是</span>
            <span class="home-body-container-text-name">Woods</span>
            <p class="home-body-container-text-description">
              在这里，你可以看到我的一些技术文章和网络日志，中间可能还夹杂着自己的一些随笔杂文。
            </p>
            <span class="home-body-container-text-hope">希望这些闲言碎语，能对你有所帮助！</span>
          </div>
        </a-col>
        <a-col :xs="24" :sm="12">
          <div class="home-body-avatar">
            <div class="home-body-avatar-img" :style="{ backgroundImage: `url(${avatar})` }" />
          </div>
        </a-col>
        <a-col :xs="24">
          <div class="home-link-wrapper">
            <a class="home-link">
              <span @click="handleLinkClick">逛一逛</span>
              <a-icon type="right" />
            </a>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHome',
  computed: {
    avatar() {
      return this.$store.getters.avatar
    },
  },
  methods: {
    handleLinkClick() {
      this.$router.push({
        path: '/article',
      })
    },
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/variables.less';
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &-wrapper {
    max-width: 960px;

    .home-title {
      margin-bottom: 100px;
      font-size: 60px;
      @media only screen and (max-width: @screen-md) {
        margin-bottom: 60px;
        font-size: 40px;
      }
      @media only screen and (max-width: @screen-xs) {
        margin-bottom: 20px;
        font-size: 36px;
      }

      h2 {
        color: white;
        font-weight: 600;
        margin-bottom: 0;
        text-align: center;
      }
    }
    @body-height: 300px;
    .home-body {
      @media only screen and (max-width: @screen-lg) {
        padding-left: 20px;
      }
      @media only screen and (max-width: @screen-sm) {
        padding: 0 20px;
      }

      &-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: @body-height;
        @media only screen and (max-width: @screen-sm) {
          align-items: center;
        }

        &-text-title {
          color: white;
          font-size: 24px;
          font-weight: 400;
          margin-bottom: 0;
        }

        &-text-name {
          color: #f56300;
          font-size: 40px;
          font-weight: 600;
          margin-bottom: 5px;
        }

        &-text-description {
          color: white;
          font-size: 18px;
          max-width: 400px;
          margin-bottom: 30px;
          @media only screen and (max-width: @screen-sm) {
            text-align: center;
          }
        }

        &-text-hope {
          color: white;
          font-size: 16px;
        }
      }

      &-avatar {
        width: 100%;
        height: @body-height;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        @media only screen and (max-width: @screen-lg) {
          padding-right: 20px;
        }
        @media only screen and (max-width: @screen-sm) {
          padding-right: 0;
          justify-content: center;
          height: 180px;
        }
        &-img {
          height: 265px;
          width: 265px;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-size: cover;
          overflow: hidden;
          @media only screen and (max-width: @screen-sm) {
            height: 180px;
            width: 180px;
          }
        }
      }
    }
  }

  .home-link-wrapper {
    width: 100%;
    text-align: center;
    margin-top: 30px;
    .home-link {
      margin-top: 30px;
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
</style>
