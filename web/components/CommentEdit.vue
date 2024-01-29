<template>
  <div class="flex flex-wrap w-full">
    <label for="title" class="w-full mb-2 text-md font-medium text-gray-900"
      >Titel eingeben</label
    >
    <input
      id="title"
      v-model="title"
      maxlength="50"
      :class="remainingTitle > 0 ? 'ring-blue-500' : 'ring-red-600'"
      class="p-2.5 mb-2 w-full outline-none focus:ring-2 rounded-lg text-md text-gray-900 bg-gray-50 border-2 border-black border-opacity-50 focus:rounded-none"
      placeholder="Titel"
    />

    <label for="name" class="w-full mb-2 text-md font-medium text-gray-900"
      >Namen eingeben</label
    >
    <input
      id="name"
      v-model="name"
      maxlength="50"
      :class="remainingName > 0 ? 'ring-blue-500' : 'ring-red-600'"
      class="p-2.5 mb-2 w-full outline-none focus:ring-2 rounded-lg text-md text-gray-900 bg-gray-50 border-2 border-black border-opacity-50 focus:rounded-none"
      placeholder="Name"
    />
    <label for="comment" class="w-full mb-2 text-md font-medium text-gray-900"
      >Kommentar eingeben</label
    >
    <textarea
      id="comment"
      v-model="comment"
      maxlength="500"
      :class="remaining > 0 ? 'ring-blue-500' : 'ring-red-600'"
      class="p-2.5 mb-2 w-full h-48 outline-none focus:ring-2 rounded-lg text-md text-gray-900 bg-gray-50 border-2 border-black border-opacity-50 focus:rounded-none"
      placeholder="Kommentar"
    ></textarea>
    <div class="flex w-full justify-between">
      <p>{{ remaining }}</p>
      <button
        type="submit"
        class="py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
        @click="submit"
      >
        Absenden
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dogId: {
      required: true,
      type: Number,
    },
    refresh: {
      required: true,
      type: Function,
    },
  },
  data() {
    return {
      max: 500,
      maxName: 50,
      maxTitle: 50,
      comment: '',
      title: '',
      name: '',
      limitReached: false,
    };
  },
  computed: {
    remaining() {
      const remainingCharacters = this.max - this.comment.length;
      return remainingCharacters >= 0 ? remainingCharacters : 0;
    },
    remainingName() {
      const remainingCharacters = this.maxName - this.name.length;
      return remainingCharacters >= 0 ? remainingCharacters : 0;
    },
    remainingTitle() {
      const remainingCharacters = this.maxTitle - this.title.length;
      return remainingCharacters >= 0 ? remainingCharacters : 0;
    },
  },
  methods: {
    async submit() {
      const fd = new FormData();
      fd.append('title', this.title);
      fd.append('comment', this.comment);
      fd.append('user', this.name);
      fd.append('dog', this.dogId);
      await this.$http.$post(`${process.env.serverUrl}/comments`, fd);
      this.refresh();
    },
  },
};
</script>
