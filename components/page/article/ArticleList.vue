<template>
  <a-list size="large" rowKey="id" :loading="loading" itemLayout="vertical" :dataSource="data">
    <a-list-item :key="item.id" slot="renderItem" slot-scope="item">
      <template slot="actions">
        <icon-text type="star-o" :text="item.star" />
        <icon-text type="like-o" :text="item.like" />
        <icon-text type="message" :text="item.message" />
      </template>
      <a-list-item-meta>
        <a slot="title" href="https://vue.ant.design/">{{ item.title }}</a>
        <template slot="description">
          <span>
            <a-tag>Ant Design</a-tag>
            <a-tag>设计语言</a-tag>
            <a-tag>蚂蚁金服</a-tag>
          </span>
        </template>
      </a-list-item-meta>
      <article-list-content
        :description="item.description"
        :owner="item.owner"
        :avatar="item.avatar"
        :href="item.href"
        :updateAt="item.updatedAt"
      />
    </a-list-item>
    <div v-if="data.length > 0" slot="footer" style="text-align: center; margin-top: 16px">
      <a-button>加载更多</a-button>
    </div>
  </a-list>
</template>

<script>
import ArticleListContent from '@/components/page/article/ArticleListContent'
import IconText from '@/components/basic/IconText'

export default {
  name: 'ArticleList',
  components: {
    IconText,
    ArticleListContent,
  },
  data() {
    return {
      loading: false,
      loadingMore: false,
      data: [
        {
          id: 1,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          owner: '付小小',
          content:
            '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
          star: 817,
          percent: 29,
          like: 902,
          message: 236,
          description:
            '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
          href: 'https://ant.design',
          title: 'Alipay',
          updatedAt: '2006-12-13 07:21:28',
          members: [
            {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
              name: '曲丽丽',
              id: 'member1',
            },
            {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
              name: '王昭君',
              id: 'member2',
            },
            {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
              name: '董娜娜',
              id: 'member3',
            },
          ],
          activeUser: 102573,
          newUser: 1211,
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
        },
        {
          id: 2,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          owner: '林东东',
          content:
            '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
          star: 222,
          percent: 348,
          like: 183,
          message: 135,
          description:
            '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
          href: 'https://ant.design',
          title: 'Angular',
          updatedAt: '1999-05-12 19:56:48',
          members: [
            {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
              name: '曲丽丽',
              id: 'member1',
            },
            {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
              name: '王昭君',
              id: 'member2',
            },
            {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
              name: '董娜娜',
              id: 'member3',
            },
          ],
          activeUser: 186167,
          newUser: 1965,
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
        },
        {
          id: 3,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          owner: '林东东',
          content:
            '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
          star: 329,
          percent: 202,
          like: 589,
          message: 28,
          description:
            '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
          href: 'https://ant.design',
          title: 'Ant Design',
          updatedAt: '1991-05-17 01:05:14',
          members: [
            {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
              name: '曲丽丽',
              id: 'member1',
            },
            {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
              name: '王昭君',
              id: 'member2',
            },
            {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
              name: '董娜娜',
              id: 'member3',
            },
          ],
          activeUser: 142455,
          newUser: 1134,
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
        },
        {
          id: 4,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          owner: '付小小',
          content:
            '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
          star: 735,
          percent: 57,
          like: 333,
          message: 474,
          description:
            '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
          href: 'https://ant.design',
          title: 'Ant Design Pro',
          updatedAt: '1993-04-16 02:20:06',
          members: [
            {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
              name: '曲丽丽',
              id: 'member1',
            },
            {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
              name: '王昭君',
              id: 'member2',
            },
            {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
              name: '董娜娜',
              id: 'member3',
            },
          ],
          activeUser: 104136,
          newUser: 1671,
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
        },
        {
          id: 5,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
          owner: '吴加好',
          content:
            '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
          star: 587,
          percent: 558,
          like: 194,
          message: 798,
          description:
            '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
          href: 'https://ant.design',
          title: 'Bootstrap',
          updatedAt: '1996-06-09 13:00:14',
          members: [
            {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
              name: '曲丽丽',
              id: 'member1',
            },
            {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
              name: '王昭君',
              id: 'member2',
            },
            {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
              name: '董娜娜',
              id: 'member3',
            },
          ],
          activeUser: 136484,
          newUser: 1888,
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
        },
      ],
    }
  },
  mounted() {},
}
</script>

<style scoped></style>
