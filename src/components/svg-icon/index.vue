<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      } else {
        return 'svg-icon';
      }
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 10em;
  height: 10em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
