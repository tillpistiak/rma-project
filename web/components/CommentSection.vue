<template>
  <div class="flex flex-wrap m-5">
    <div class="flex flex-wrap w-full h-full pb-7">
      <div class="flex items-center w-full justify-between pb-3">
        <h1 class="test-black text-3xl font-semibold">
          {{ dog.name }}
        </h1>
        <close-button :close="close" />
      </div>

      <p>{{ dog.description }}</p>
      <span>
        Quelle:
        <a
          class="text-blue-600 hover:text-blue-800"
          target="_blank"
          :href="dog.source"
          >{{ dog.sourceDescription }}</a
        ></span
      >
    </div>
    <div class="test-black text-2xl font-semibold pb-3">
      <h2>Kommentare</h2>
    </div>
    <comment-edit :dog-id="dog.id" :refresh="$fetch" />
    <div v-for="post in posts" :key="post.id" class="w-full">
      <comment
        :text="post.comment"
        :author="post.author"
        :date="post.comment_date"
        :title="post.title"
      />
    </div>
  </div>
</template>

<script>
import Comment from './Comment.vue';
import CommentEdit from './CommentEdit.vue';
export default {
  components: { Comment, CommentEdit },
  props: {
    dog: {
      required: true,
      type: Object,
    },
    close: {
      required: true,
      type: Function,
    },
  },
  data: () => ({
    posts: [],
  }),
  async fetch() {
    this.posts = await this.$http.$get(
      `${process.env.serverUrl}/comments?dog=${this.dog.id}`
    );
  },
};
</script>
