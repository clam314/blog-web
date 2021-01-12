<template>
  <div class="body-wrapper">
    <a-result title="404" sub-title="Sorry, the page you visited does not exist.">
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

<style scoped>
.body-wrapper {
  width: 100%;
  align-self: center;
}
</style>
