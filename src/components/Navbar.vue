<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import logo from '@/assets/img/logo.svg';

  let Links = [
    {name: "Categories", links: "#"},
    {name: "Movies", links: "/movies"},
    {name: "TV Shows", links: "#"},
    {name: "Login", links: "#"},
  ]
  let open = ref(false);

  const menuOpen = () => {
    open.value = !open.value;
  }

  // Search
  const searchQuery = ref('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.value.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.value.trim())}`);
      searchQuery.value = '';
    }
  };
</script>

<template>
  <header class="bg-white bg-opacity-5 absolute w-full z-50">
    <nav class="text-gray-100 py-3.5 px-6 shadow md:flex justify-between z-50">
      <div class="flex items-center">
        <router-link to="/">
          <img :src="logo" alt="Moovie Time">
        </router-link>
      </div>

      <!-- Search -->
      <div class="relative flex items-center mt-4 md:mt-0 mx-4">
        <input
          v-model="searchQuery"
          @keyup.enter="handleSearch"
          type="text"
          placeholder="Find movie"
          class="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none w-64 text-sm"
        />
        <button @click="handleSearch" class="absolute right-2 text-gray-400 hover:text-white">
          <i class="bi bi-search"></i>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <span @click="menuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
        <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
      </span>

      <!-- Menu -->
      <ul 
        class="bg-nightblue md:bg-transparent md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute md:w-auto w-full top-14 duration-200 ease-linear z-50"
        :class="[open ? 'left-0' : 'left-[-100%]']"
      >
        <li class="md:mx-4 md:my-0 my-6" v-for="link in Links">
          <router-link :to="link.links" class="text-sm uppercase hover:text-gray-400 cursor-pointer font-semibold flex items-center" active-class="text-gray-300 font-bold">
            <i :class="[link.name === 'Categories' ? 'block bi bi-grid mr-2' : 'hidden']"></i>
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
