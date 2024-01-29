<template>
  <nav class="mx-6 mt-6 bg-white border-gray-200 px-2 py-2.5 select-none">
    <div
      class="container flex flex-wrap justify-between items-center mx-auto 4xl:px-20"
    >
      <div class="group">
        <NuxtLink
          to="/"
          class="flex flex-wrap justify-start items-center mx-auto"
        >
          <Logo class="h-14 w-14 flex mr-3" />
          <p
            class="flex text-xl font-bold text-black group-hover:text-blue-700"
          >
            DogGallery
          </p>
        </NuxtLink>
      </div>
      <div class="flex-grow"></div>
      <ul class="flex text-xl font-semibold text-black">
        <li class="mr-6 hover:text-blue-700">
          <NuxtLink to="/" exact>Startseite</NuxtLink>
        </li>
        <li class="mr-6 hover:text-blue-700">
          <NuxtLink to="/about">Quellen</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {},
  data: () => ({}),
};
</script>
