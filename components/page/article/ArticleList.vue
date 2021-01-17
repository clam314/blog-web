<template>
  <a-list size="large" rowKey="id" :loading="loading" itemLayout="vertical" :dataSource="data">
    <a-list-item :key="item.id" slot="renderItem" slot-scope="item">
      <template slot="actions">
        <icon-text type="eye" :text="item.reads" />
        <icon-text type="like-o" :text="item.like" />
        <icon-text type="message" :text="item.comments" />
      </template>
      <a-list-item-meta>
        <a slot="title" class="article-title" @click="handleTitleClick(item.id)">{{ item.title }}</a>
        <template slot="description">
          <icon-text type="tags" :text="item.tags.length === 0 ? '未分类' : ''" />
          <template v-for="(tag, index) in item.tags">
            <a-tooltip v-if="tag.length > 20" :key="index" :title="tag">
              <a-tag :key="index" :closable="false">{{ `${tag.slice(0, 20)}...` }}</a-tag>
            </a-tooltip>
            <a-tag v-else :key="index" :closable="false">{{ tag }}</a-tag>
          </template>
        </template>
      </a-list-item-meta>
      <img v-if="item.des_image !== ''" slot="extra" class="article-img" alt="logo" :src="item.des_image" />
      <article-list-content
        :description="item.description"
        :owner="item.userInfo.name"
        :avatar="item.userInfo.avatar"
        :category="item.category"
        :updateAt="Number(item.publishedTime)"
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
      noMore: false,
      pageNum: 0,
      pageCount: 15,
      data: [
        {
          id: '5ff348871f073a5538113313',
          description:
            '官方文档指出k8s在安装kubeadm时需要使用iptables作为后端，但CentOS 8已经使用nftable无法切换，存在兼容性问题！本次采用网络部署，需要梯子，docker和k8s的安装包基本都在需要',
          des_image: 'https://acg.toubiec.cn/random.php',
          content: '',
          reads: 8869,
          like: 345,
          comments: 123,
          converse: 0,
          tags: ['bug'],
          userInfo: {
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdL10sEwZxL-CHCF5179HGJlhCt8vQ7v6_-w&usqp=CAU',
            name: 'Woods',
          },
          category: 'Android',
          title: '在CentOS 7上部署kubernetes v1.18',
          contentHtml: '',
          publishedTime: '1610199932169',
        },
        {
          id: '5ff348871f073a5538113313',
          description:
            '官方文档指出k8s在安装kubeadm时需要使用iptables作为后端，但CentOS 8已经使用nftable无法切换，存在兼容性问题！本次采用网络部署，需要梯子，docker和k8s的安装包基本都在需要',
          des_image: 'https://acg.toubiec.cn/random.php',
          content: '',
          reads: 8869,
          like: 345,
          comments: 123,
          converse: 0,
          tags: ['bug'],
          userInfo: {
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdL10sEwZxL-CHCF5179HGJlhCt8vQ7v6_-w&usqp=CAU',
            name: 'Woods',
          },
          category: 'Android',
          title: '在CentOS 7上部署kubernetes v1.18',
          contentHtml: '',
          publishedTime: '1610199932169',
        },
        {
          id: '5ff348871f073a5538113313',
          description:
            '官方文档指出k8s在安装kubeadm时需要使用iptables作为后端，但CentOS 8已经使用nftable无法切换，存在兼容性问题！本次采用网络部署，需要梯子，docker和k8s的安装包基本都在需要',
          des_image: 'https://acg.toubiec.cn/random.php',
          content: '',
          reads: 8869,
          like: 345,
          comments: 123,
          converse: 0,
          tags: ['bug'],
          userInfo: {
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdL10sEwZxL-CHCF5179HGJlhCt8vQ7v6_-w&usqp=CAU',
            name: 'Woods',
          },
          category: 'Android',
          title: '在CentOS 7上部署kubernetes v1.18',
          contentHtml: '',
          publishedTime: '1610199932169',
        },
        {
          id: '5ff348871f073a5538113313',
          description:
            '官方文档指出k8s在安装kubeadm时需要使用iptables作为后端，但CentOS 8已经使用nftable无法切换，存在兼容性问题！本次采用网络部署，需要梯子，docker和k8s的安装包基本都在需要',
          des_image: 'https://acg.toubiec.cn/random.php',
          content: '',
          reads: 8869,
          like: 345,
          comments: 123,
          converse: 0,
          tags: ['bug'],
          userInfo: {
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdL10sEwZxL-CHCF5179HGJlhCt8vQ7v6_-w&usqp=CAU',
            name: 'Woods',
          },
          category: 'Android',
          title: '在CentOS 7上部署kubernetes v1.18',
          contentHtml: '',
          publishedTime: '1610199932169',
        },
        {
          id: '5ff348871f073a5538113313',
          description:
            '官方文档指出k8s在安装kubeadm时需要使用iptables作为后端，但CentOS 8已经使用nftable无法切换，存在兼容性问题！本次采用网络部署，需要梯子，docker和k8s的安装包基本都在需要',
          des_image: 'https://acg.toubiec.cn/random.php',
          content: '',
          reads: 8869,
          like: 345,
          comments: 123,
          converse: 0,
          tags: ['bug'],
          userInfo: {
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdL10sEwZxL-CHCF5179HGJlhCt8vQ7v6_-w&usqp=CAU',
            name: 'Woods',
          },
          category: 'Android',
          title: '在CentOS 7上部署kubernetes v1.18',
          contentHtml: '',
          publishedTime: '1610199932169',
        },
      ],
    }
  },
  methods: {
    handleTitleClick(tid) {
      this.$router.push({
        path: 'article/details',
        query: {
          tid,
        },
      })
    },
    getArticles() {},
  },
}
</script>

<style lang="less" scoped>
@import '~assets/style/variables.less';
@import '~assets/style/config.less';

// 修复 antv list组件 actions插槽莫名其妙多了空li元素的问题
/deep/ .ant-list-item-action > li:nth-child(even) {
  display: none;
}

.article-title {
  color: @article-title-color !important;
}

@img-width: 278px;
.article-img {
  width: @img-width;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  @media only screen and (max-width: @screen-sm) {
    width: 100%;
    height: 180px;
  }
}
</style>
