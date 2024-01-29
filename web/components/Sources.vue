<template>
  <Content class="2xl:text-center">
    <div v-for="dog in dogs" :key="dog.id" class="pb-5 w-full">
      <h1 class="text-xl">{{ dog.name }}</h1>
      <div v-for="m in dog.images.length" :key="m">
        <a
          :href="dog.images[m - 1].src"
          class="text-blue-600 hover:text-blue-800"
          >{{ dog.images[m - 1].src }}</a
        >
      </div>
    </div>
  </Content>
</template>

<script>
export default {
  computed: {
    dogs() {
      return this.$store.state.dogs;
    },
  },
  methods: {},
};
</script>
