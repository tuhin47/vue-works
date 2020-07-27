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
    <BaseButton disable-shawdow color="primary">Default</BaseButton>
    <div> <br /></div>
    <BaseButton disable>Default</BaseButton>
    <BaseButton disable variant="text">Default</BaseButton> <div> <br /></div>
    <BaseButton start-icon="local_grocery_store">Default</BaseButton>
    <BaseButton end-icon="local_grocery_store">Default</BaseButton>
    <div> <br /></div>
    <BaseButton color="primary" size="sm">Default</BaseButton>
    <BaseButton color="primary" size="md">Default</BaseButton>
    <BaseButton color="primary" size="lg">Default</BaseButton>
    <div> <br /></div>
    <BaseButton color="default">Default</BaseButton>
    <BaseButton color="primary">Default</BaseButton>
    <BaseButton color="secondary">Default</BaseButton>
    <BaseButton color="danger">Default</BaseButton>
    <div> <br /></div>
    <div>
      <b-button variant="primary">Primary</b-button>
      <b-button variant="secondary">Secondary</b-button>
      <b-button variant="success">Success</b-button>
      <b-button variant="danger">Danger</b-button>
      <b-button variant="warning">Warning</b-button>
      <b-button variant="info">Info</b-button>
      <b-button variant="light">Light</b-button>
      <b-button variant="dark">Dark</b-button>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
@import '@design';
</style>
