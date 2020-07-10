<script>
export default {
  props: {
    variant: { type: String, default: 'default' },
    color: { type: String, default: 'default' },
    size: { type: String, default: 'md' },
    disableShadow: Boolean,
    disable: Boolean,
    startIcon: { type: String, required: false, default: null },
    endIcon: { type: String, required: false, default: null },
  },
  computed: {
    styles() {
      const obj = {}
      if (this.disableShadow) obj['box-shadow'] = 'none'
      if (this.disable) {
        obj.color = 'red'
        obj.cursor = 'not-allowed'
      }
      return obj
    },
  },
  methods: {
    getClass() {
      return [
        this.$style.button,
        this.$style[this.variant],
        this.$style[this.size],
        this.$style[this.color],
      ]
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
    <i
      v-if="startIcon !== null"
      class="material-icons"
      style="float:left;margin-right:2px"
    >
      {{ startIcon }}
    </i>
    <slot />
    <i
      v-if="endIcon !== null"
      class="material-icons"
      style="float:right;margin-left:2px"
    >
      {{ endIcon }}
    </i>
  </button>
</template>

<style lang="scss" module>
@import '@design';
.button {
  @extend %typography-small;

  margin-right: 20px;
  font-family: $system-default-font-family;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(51, 51, 51, 0.2);
}
.md {
  padding: 8px 16px;
  font-size: 17px;
}
.sm {
  padding: 5px 13px;
  font-size: 15px;
}
.lg {
  padding: 14px 22px;
  font-size: 20px;
}
.default {
  color: $color-button-text;
  background: $color-button-bg;
  &:hover,
  &:focus {
    background: $color-button-disabled-bg;
  }
}
.primary {
  color: #fff;
  background: #2962ff;
  &:hover,
  &:focus {
    background: #0039cb;
  }
}

.secondary {
  color: #fff;
  background: #455a64;
  &:hover,
  &:focus {
    background: #1c313a;
  }
}

.danger {
  color: #fff;
  background: #d32f2f;
  &:hover,
  &:focus {
    background: #9a0007;
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
