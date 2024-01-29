<template>
  <div class="relative">
    <NavBar />
    <Content>
      <div class="flex flex-wrap -m-1 md:-m-2 pb-10">
        <div class="flex flex-wrap w-1/2">
          <Tile
            :large="false"
            rotation="top"
            :show-comments="showComments"
            :dog="dogs.golden"
          />
          <Tile
            :large="false"
            :show-comments="showComments"
            :dog="dogs.samojede"
          />
          <Tile
            :large="true"
            rotation="left"
            :show-comments="showComments"
            :dog="dogs.gsd"
          />
        </div>
        <div class="flex flex-wrap w-1/2">
          <Tile
            :large="true"
            rotation="right"
            :show-comments="showComments"
            :dog="dogs.husky"
          />
          <Tile
            :large="false"
            rotation="bottom"
            :show-comments="showComments"
            :dog="dogs.corgi"
          />
          <Tile
            :large="false"
            rotation="bottom"
            :show-comments="showComments"
            :dog="dogs.bordercollie"
          />
        </div>
      </div>
    </Content>
    <div
      v-if="comments"
      class="bg-gray-300 bg-opacity-60 fixed w-screen h-screen top-0 left-0"
      @click="() => (comments = false)"
    >
      <div
        class="bg-white fixed right-0 top-0 w-1/3 h-full overflow-scroll"
        @click.stop
      >
        <comment-section :dog="currentDog" :close="() => (comments = false)" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Tile from '../components/Tile.vue';
import Content from '../components/Content.vue';
import CommentSection from '../components/CommentSection.vue';
export default {
  components: { NavBar, Tile, Content, CommentSection },
  data() {
    return {
      comments: false,
      currentDog: null,
    };
  },
  computed: {
    dogs() {
      return this.$store.state.dogs;
    },
  },
  methods: {
    showComments(dog) {
      this.comments = true;
      this.currentDog = dog;
    },
  },
};
</script>

<!-- data: () => ({
  posts: [],
}),
async fetch() {
  this.posts = await this.$http.$get('http://127.0.0.1:8003/');
}, -->
