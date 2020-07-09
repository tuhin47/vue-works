<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'default',
    },
    disableShadow: Boolean,
    disable: Boolean,
  },
  computed: {
    styles() {
      if (this.disableShadow)
        return {
          'box-shadow': 'none',
        }
      return {}
    },
  },
  methods: {
    getClass() {
      return [this.$style.button, this.$style[this.variant]]
    },
  },
}
</script>

<template>
  <button
    :class="getClass()"
    :style="styles"
    :disabled="disable"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<style lang="scss" module>
@import '@design';

.button {
  @extend %typography-small;

  padding: $size-button-padding;
  font-family: $system-default-font-family;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(51, 51, 51, 0.3);
}
.default {
  color: $color-button-text;
  background: $color-button-bg;
  &:hover,
  &:focus {
    background: $color-button-disabled-bg;
  }
}
.outline {
  color: $color-button-text-outline;
  border: 1px solid #3d5afe;
  &:hover,
  &:focus {
    background: $color-button-disabled-bg-outline;
  }
}
.text {
  color: $color-button-text-outline;
  background: transparent;
  &:hover,
  &:focus {
    background: rgba(41, 98, 255, 0.1);
  }
}
</style>
