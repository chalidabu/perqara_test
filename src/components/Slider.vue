<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination, Autoplay } from 'swiper/modules';
  import { computed } from 'vue';
  import { useMovieStore } from '@/store/movies';

  const movieStore = useMovieStore();

  const movies = computed(() => movieStore.movies);

  const sliderMovies = computed(() => movies.value.slice(0, 4));
</script>

<template>
  <section>
    <Swiper
      :modules="[ Pagination, Autoplay]"
      :spaceBetween="20"
      :slidesPerView="1.5"
      :centeredSlides="true"
      :loop="true"
      :pagination="{ clickable: true, dynamicBullets: true }"
      class="w-full"
    >
      <SwiperSlide v-for="(movie, index) in sliderMovies" :key="index">
        <div class="text-white p-6 flex flex-col sm:flex-row w-full h-full items-center">
          <img :src="movie.Poster" :alt="movie.Title" class="w-60 md:w-[180px] h-[267px] object-cover">

          <div class="flex flex-col flex-1 bg-black p-6 h-full md:h-5/6 w-11/12 md:w-full sm:w-4/6">
            <span class="text-white font-bold">⭐ {{ movie.imdbRating }}</span>
            <h2 class="text-xl font-medium my-1">{{ movie.Title }}</h2>
            <p class="text-xs font-light">{{ movie.Year }} • {{ movie.genre }}</p>
            <p class="mt-3 text-sm font-light">
              {{ movie.plot }}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style>
  .swiper-pagination-bullet {
    @apply w-3 h-3 bg-gray-400 transition-all;
  }
  
  .swiper-pagination-bullet-active {
    @apply w-10 h-3 bg-[#E74C3C] transition-all duration-300 rounded-md ease-in-out;
  }
</style>