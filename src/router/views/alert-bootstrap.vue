<script>
import Layout from '@layouts/main.vue'

export default {
  page: {
    title: 'Alert Bootstrap',
    meta: [{ name: 'description', content: 'The Alert Bootstrap page.' }],
  },
  components: { Layout },
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
  },
}
</script>

<template>
  <Layout>
    <b-container class="bcontainer bv-example-row" fluid>
      <h2>#Basic</h2>
      <div>
        <b-col><b-alert show>Default Alert</b-alert></b-col>

        <b-col><b-alert variant="success" show>Success Alert</b-alert></b-col>

        <b-col
          ><b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
            Dismissible Alert!
          </b-alert></b-col
        >

        <b-col
          ><b-alert
            :show="dismissCountDown"
            dismissible
            variant="warning"
            @dismissed="dismissCountDown = 0"
            @dismiss-count-down="countDownChanged"
          >
            <p
              >This alert will dismiss after
              {{ dismissCountDown }} seconds...</p
            >
            <b-progress
              variant="warning"
              :max="dismissSecs"
              :value="dismissCountDown"
              height="4px"
            ></b-progress> </b-alert
        ></b-col>

        <b-button variant="info" class="m-1" @click="showAlert">
          Show alert with count-down timer
        </b-button>
        <b-button
          variant="info"
          class="m-1"
          @click="showDismissibleAlert = true"
        >
          Show dismissible alert ({{
            showDismissibleAlert ? 'visible' : 'hidden'
          }})
        </b-button>
      </div>
    </b-container>
    <b-container class="bcontainer bv-example-row" fluid>
      <h2>#Contextual variants</h2>
      <b-row>
        <b-col><b-alert show variant="primary">Primary Alert</b-alert></b-col>
        <b-col><b-alert show variant="secondary">Secondary</b-alert></b-col>
        <b-col><b-alert show variant="success">Success Alert</b-alert></b-col>
      </b-row>
      <b-row>
        <b-col><b-alert show variant="danger">Danger Alert</b-alert></b-col>
        <b-col><b-alert show variant="warning">Warning Alert</b-alert></b-col>
        <b-col><b-alert show variant="info">Info Alert</b-alert></b-col>
      </b-row>
      <b-row>
        <b-col><b-alert show variant="light">Light Alert</b-alert></b-col>
        <b-col><b-alert show variant="dark">Dark Alert</b-alert></b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
    <b-container>
      <h2>#Additional content inside alerts</h2>
      <div>
        <b-alert show variant="info">
          <h4 class="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p class="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </b-alert>
      </div>
    </b-container>
  </Layout>
</template>

<style lang="scss" scoped>
@import '@design';

.bcontainer {
  margin-bottom: 40px;
}
</style>
