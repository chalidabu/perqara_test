<script setup>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  import { onMounted } from 'vue';
  import { RouterView } from 'vue-router';
  import { useMovieStore } from '@/store/movies';

  const movieStore = useMovieStore();

  onMounted(() => {
    if(movieStore.movies.length === 0 ) {
      movieStore.fetchMovies();
    }
  });
</script>

<template>
  <div class="relative">
    <Navbar />
    
    <RouterView />

    <Footer />
  </div>
</template>