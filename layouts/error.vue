<template>
  <div class="body-wrapper">
    <a-result class="result-wrapper" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template #icon>
        <a-icon type="frown" theme="twoTone" />
      </template>
      <template #extra>
        <a-button type="primary" @click="back"> Back Home </a-button>
      </template>
    </a-result>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="less" scoped>
.body-wrapper {
  width: 100%;
  align-self: center;
}

@media (prefers-color-scheme: dark) {
  /deep/ .ant-result-title {
    color: white;
  }

  /deep/ .ant-result-subtitle {
    color: fade(#fff, 65%);
  }
}
</style>
