<script>
import Layout from '@layouts/main.vue'

export default {
  page: {
    title: 'Md Editor',
    data() {
      return {
        text: '',
      }
    },
    meta: [{ name: 'description', content: 'The Md Editor page.' }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <v-md-editor v-model="text" height="400px"></v-md-editor>
  </Layout>
</template>
