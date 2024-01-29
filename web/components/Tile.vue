<template>
  <div
    class="p-2 md:p-3 2xl:p-5 cursor-pointer"
    :class="large ? 'w-full' : 'w-1/2'"
    @click="() => showComments(dog)"
  >
    <div
      :class="large ? 'h-96 4xl:h-192 3xl:h-168 2xl:xl:h-96' : 'h-48 2xl:h-72'"
      class="group w-full shadow-lg rounded-lg hover:shadow-xl transform transition-all hover:scale-105 hover:z-0 safari-blur"
    >
      <div v-for="n in dog.images.length" :key="n">
        <nuxt-img
          placeholder
          format="webp"
          quality="80"
          alt="gallery"
          :class="visible == n - 1 ? 'opacity-100' : 'opacity-0'"
          class="absolute ease-in duration-500 object-cover top-0 w-full h-full rounded-lg group-hover:filter transform transition-all group-hover:blur-sm group-hover:brightness-90 filter-none z-30"
          :src="`/img/${dog.images[n - 1].path}.jpg`"
        />
      </div>

      <image-title :name="dog.name" :rotation="rotation" />
      <div
        class="relative invisible group-hover:visible bg-blue-400 bg-opacity-20 w-full h-full object-center rounded-lg bottom-0 justify-center items-center group-hover:z-30"
      >
        <div
          class="absolute bg-opacity-70 bg-secondary-600 rounded-lg transform inset-4 blur-xl filter"
        ></div>
        <div class="absolute inset-4 pointer-events-none">
          <div
            class="flex w-full h-full justify-center items-center z-40 text-white flex-wrap"
          >
            <div class="w-full">
              <h3
                class="font-bold w-full text-center"
                :class="large ? 'text-2xl' : 'text-xl'"
              >
                Charakter
              </h3>
              <div v-if="large" class="h-2"></div>
              <p
                class="text-white font-bold w-full text-center"
                :class="large ? 'text-xl' : 'text-base'"
              >
                {{ dog.personality }}
              </p>
            </div>
            <div class="w-full">
              <p
                class="text-sm pointer-events-none text-gray-200 font-semibold w-full text-center"
              >
                klicken, um mehr zu erfahren
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageTitle from './ImageTitle.vue';
export default {
  components: { ImageTitle },
  props: {
    dog: {
      type: Object,
      required: true,
    },
    large: {
      type: Boolean,
      required: false,
      default: false,
    },
    rotation: {
      type: String,
      required: false,
      default: 'top',
    },
    showComments: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      visible: 0,
    };
  },
  mounted() {
    setInterval(() => this.showNextImage(), Math.random() * 5000 + 5000);
  },
  methods: {
    showNextImage() {
      if (this.visible < this.dog.images.length - 1) {
        this.visible++;
      } else {
        this.visible = 0;
      }
    },
  },
};
</script>

<style scoped>
.safari-blur {
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-backface-visibility: hidden;
  -moz-transform: translate3d(0, 0, 0);
}

.safari-blur:hover {
  -webkit-transform: translate3d(0, 0, 0) scale(1.05);
  -moz-transform: translate3d(0, 0, 0) scale(1.05);
}
</style>
