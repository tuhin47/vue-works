<script>
import Layout from '@layouts/main.vue'

export default {
  page: {
    title: 'Buttons',
    meta: [{ name: 'description', content: 'The Buttons page.' }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <BaseButton>Default</BaseButton> <div> <br /></div>
    <BaseButton variant="outline">Default</BaseButton> <div> <br /></div>
    <BaseButton variant="text">Default</BaseButton><div> <br /></div>
    <BaseButton disable disable-shadow>Default</BaseButton> <div> <br /></div>
  </Layout>
</template>

<style lang="scss" module>
@import '@design';
</style>
