<script>
export default {
  computed: {
    version: function() {
      return process.env.VERSION
    },
  },
}
</script>

<template>
  <!-- Footer -->
  <footer class="page-footer font-small blue fixed-bottom">
    <!-- Copyright -->
    <div class="footer-copyright text-right py-3"
      >v{{ version }}© 2020 Copyright:
      <a href="https://tuhin47.github.io/Portfolio/" target="_blank">
        tuhin47.github.io</a
      >
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>
