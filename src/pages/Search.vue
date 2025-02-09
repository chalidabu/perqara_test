<script setup>
  import { ref, onMounted, watchEffect } from 'vue';
  import { useRoute } from 'vue-router';
  import { useMovieStore } from '@/store/movies';

  const movieStore = useMovieStore();
  const route = useRoute();
  const query = ref(route.query.q || '');

  watchEffect(() => {
    if (query.value) {
      movieStore.searchMovies(query.value); // 🔍 Cari movie dengan title yang persis sama
    }
  });
</script>

<template>
  <main class="container max-w-screen-lg mx-auto px-6 py-[calc(1.5rem_+_60px)]">
    <h1 class="text-2xl font-semibold text-white my-8">Search Results for "{{ query }}"</h1>

    <section>
      <div v-if="movieStore.loading" class="text-white">Loading...</div>
      <div v-else-if="movieStore.error" class="text-red-500">{{ movieStore.error }}</div>
      <div v-else-if="!movieStore.movies.length" class="text-gray-400">No movies found.</div>
      <div v-else>
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
          <div v-for="movie in movieStore.movies" :key="movie.imdbID" class="-p-4 relative">
            <router-link v-if="movie.imdbID" :to="`/movies/${movie.imdbID}`">
              <div class="relative">
                <div class="bg-black bg-opacity-80 text-white px-3 py-12 text-center font-semibold absolute top-0 left-0 w-full h-full flex-col justify-between items-center flex transition ease-linear duration-130 opacity-0 hover:opacity-100">
                  <p class="mb-3 text-lg">⭐ {{ movie.imdbRating }}</p>
                  <p class="mb-3 text-sm">{{ movie.genre }}</p>
                  <p class="bg-red-600 text-xs px-6 py-1 uppercase rounded-3xl">view</p>
                </div>
                <img :src="movie.Poster" :alt="movie.Title" class="w-full object-cover h-64">
              </div>
            </router-link>

            <div class="mt-2">
              <h2 class="text-sm font-semibold text-white mb-1">{{ movie.Title }}</h2>
              <p class="text-gray-500 text-xs">{{ movie.Year }}</p>
            </div>

            <span class="bg-nightblue bg-opacity-80 absolute right-0 top-0 px-2 py-1 text-white text-xs font-bold" v-if="movie.imdbRating">{{ movie.imdbRating }}</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
