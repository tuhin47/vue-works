<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <h1 class="center">Wakatime</h1>
    <!-- eslint-disable-next-line -->
    <figure class="center">
      <embed
        src="https://wakatime.com/share/@2f9ba85f-b06b-4880-b46a-39a6e950754d/69ddf3b5-538f-4fb7-a206-20c9ec0dbd8b.svg"
    /></figure>
  </Layout>
</template>

<style lang="css">
.center {
  width: 80%;
  padding: 10px;
  margin: auto;
}
</style>
