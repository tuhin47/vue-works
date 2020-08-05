<script>
import NavBar from '@components/nav-bar.vue'

export default {
  components: { NavBar },
  computed: {
    version: function() {
      return process.env.VERSION
    },
  },
}
</script>

<template>
  <div>
    <div :class="$style.container">
      <NavBar />
      <slot />
    </div>
    <footer
      ><div style="float:right">{{ version }}</div></footer
    >
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
