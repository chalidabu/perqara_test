<script setup>
  import logoGrey from "@/assets/img/logo-grey.svg";
</script>

<template>
  <footer class="bg-black bg-opacity-30 text-gray-500">
    <div
      class="container mx-auto max-w-screen-lg px-6 py-12 flex justify-between items-center"
    >
      <small class="flex-1 text-left"
        >&copy; 2021 MoovieTime. All rights reserved.</small
      >
      <img
        :src="logoGrey"
        alt="Moovie Time"
        class="flex-1 max-w-[80px] mx-auto"
      />
      <small class="flex-1 text-right">Made with Vue.js</small>
    </div>
  </footer>
</template>
