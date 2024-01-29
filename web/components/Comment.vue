<template>
  <div class="flex flex-wrap w-full h-full border-none border-black py-2 my-2">
    <h2 class="flex test-black text-xl font-semibold w-full">{{ title }}</h2>
    <p class="flex w-full">
      {{ text }}
    </p>
    <p>
      <br /><i>{{ author }}</i
      >, {{ formattedDate }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
    author: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  },

  computed: {
    formattedDate() {
      return new Date(this.date).toLocaleDateString();
    },
  },
};
</script>
