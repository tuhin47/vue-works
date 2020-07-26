<script>
import Layout from '@layouts/main.vue'

export default {
  page: {
    title: 'Card View',
    meta: [{ name: 'description', content: 'The Card View page.' }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <div>
      <b-card title="Title" header-tag="header" footer-tag="footer">
        <!-- <template v-slot:header>
          <h6>Header Slot</h6>
        </template> -->
        <b-card-text>Header and footers using slots.</b-card-text>
        <b-button href="#" class="float-right" variant="primary"
          >Go somewhere</b-button
        >
        <template v-slot:footer>
          <em>Footer Slot</em>
        </template>
      </b-card>
      <br />
      <b-card title="Title" header-tag="header" footer-tag="footer">
        <template v-slot:header>
          <h6>Header Slot</h6>
        </template>
        <b-card-text>Header and footers using slots.</b-card-text>
        <b-button href="#" class="float-right" variant="primary"
          >Go somewhere</b-button
        >
        <template v-slot:footer>
          <em>Footer Slot</em>
        </template>
      </b-card>
    </div>
  </Layout>
</template>

<style lang="scss" module>
@import '@design';
</style>
