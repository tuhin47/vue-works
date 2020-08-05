<script>
import NavBar from '@components/nav-bar.vue'
import Footer from '@components/footer-basic.vue'

export default {
  components: { NavBar, Footer },
}
</script>

<template>
  <div>
    <div :class="$style.container">
      <NavBar />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';

.container {
  min-width: $size-content-width-min;
  max-width: $size-content-width-max;
  margin: 0 auto;
}
</style>
