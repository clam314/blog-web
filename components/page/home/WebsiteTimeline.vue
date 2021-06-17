<template>
  <div class="timeline-wrapper">
    <span class="timeline-title">版本历史记录</span>
    <a-timeline mode="alternate" class="timeline">
      <template v-for="(item, index) in items">
        <a-timeline-item :key="index">
          <template v-if="index === 0">
            <a-icon slot="dot" type="rocket" theme="twoTone" class="timeline-top-icon" />
          </template>
          <template v-if="index !== 0">
            <a-icon slot="dot" type="cloud" theme="twoTone" class="timeline-icon" />
          </template>
          <span class="timeline-time">{{ item.time | dayjs }}</span>
          <span class="timeline-description">{{ item.description }}</span>
        </a-timeline-item>
      </template>
    </a-timeline>
  </div>
</template>

<script>
export default {
  name: 'WebsiteTimeline',
  data() {
    return {
      items: [
        {
          time: '20210617',
          description: 'v1.0.1版,Nginx优化,升级http2,对已知问题的修复',
        },
        {
          time: '20210530',
          description: 'v1.0版上线,升级成https,并优化Nginx配置统一实现反向代理博客与管理后台及后端接口',
        },
        {
          time: '20210220',
          description: 'v0.4beta版上线,主要进一步完善功能和优化页面',
        },
        {
          time: '20210120',
          description: 'v0.3beta版本上线,主要进行功能完善及页面优化',
        },
        {
          time: '20210105',
          description: 'v0.2beta版本上线,包括基于Nuxt实现服务器渲染博客的Web页面,以及博客相关后端接口',
        },
        {
          time: '20201201',
          description: 'v0.1beta版本上线,包括基于koa2的后台与基于antdv pro的管理系统Web页面',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/config.less';
.timeline-wrapper {
  width: 100%;
  max-width: @app-max-content-width;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 0;
  margin: 0 auto;
  background-color: #f2f2f2;
}

@title-color: #333333;
@descriptions-color: #86868b;

.timeline-title {
  font-weight: 600;
  font-size: 32px;
  color: @title-color;
  margin-bottom: 20px;
  z-index: 5;
}

.timeline {
  width: 100%;
  /deep/ .ant-timeline-item-head {
    background-color: unset;
  }
  /deep/ li:last-child {
    padding-bottom: 0;
  }
  /deep/ li:not(:first-of-type) .ant-timeline-item-content {
    top: -20px;
  }
  &-top-icon {
    font-size: 32px;
    color: @title-color;
  }

  &-time {
    font-size: 32px;
    font-weight: 600;
    color: @title-color;
    display: block;
  }
  &-description {
    font-size: 17px;
    font-weight: 400;
    color: @descriptions-color;
    display: block;
  }
}
</style>
