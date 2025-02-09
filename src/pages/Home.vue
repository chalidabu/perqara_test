<script setup>
import Slider from "@/components/Slider.vue";
import ListItems from "@/components/ListItems.vue";
import { useMovieStore } from "@/store/movies";
import { computed } from "vue";

const movieStore = useMovieStore();

const loading = computed(() => movieStore.loading);
const error = computed(() => movieStore.error);
</script>

<template>
  <main class="pb-6 py-[calc(1.5rem_+_60px)]">
    <div v-if="loading" class="flex justify-center items-center h-screen">
      <svg
        class="animate-spin h-10 w-10 text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        ></path>
      </svg>
    </div>

    <div v-else-if="error" class="text-red-500">
      {{ error }}
    </div>

    <div v-else>
      <Slider />
      <ListItems />
    </div>
  </main>
</template>
