<template>
  <p
    :class="getClassesForRotation(rotation)"
    class="pointer-events-none absolute invisible group-hover:visible text-xl text-black text-left transition-all transform font-semibold font-sans z-0"
  >
    {{ name }}
  </p>
</template>

<script>
export default {
  props: {
    rotation: {
      type: String,
      required: false,
      default: 'top',
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    getClassesForRotation: (rotation) => {
      switch (rotation) {
        case 'left':
          return 'bottom-0 left-0 -rotate-90 origin-top-left group-hover:-translate-x-10';

        case 'right':
          return 'top-1/2 right-0 rotate-90 origin-top-right group-hover:translate-x-10';

        case 'bottom':
          return 'bottom-0 left-0 group-hover:translate-y-10 ';

        case 'top':
        default:
          return 'top-0 right-0 group-hover:-translate-y-10';
      }
    },
  },
};
</script>

<style scoped>
.translate-element {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
}
</style>
