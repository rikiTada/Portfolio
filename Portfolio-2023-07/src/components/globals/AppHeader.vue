<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import AppTitle from "../molecules/AppTitle.vue";

let showNavbar = ref(true);

const toggleNavbar = () => {
  showNavbar.value = !showNavbar.value;
};

let resizeListener = () => {
  if (window.innerWidth >= 768) {
    showNavbar.value = true;
  } else {
    showNavbar.value = false;
  }
};

addEventListener("load", resizeListener);

onMounted(() => {
  window.addEventListener("resize", resizeListener);
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeListener);
});
</script>
<template>
  <nav class="backdrop-blur-sm sticky top-0 z-50 md:px-8 px-4">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:py-4 py-2 px-8"
    >
      <AppTitle />
      <!-- hamburger🍔 -->
      <button
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        @click="toggleNavbar"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
        aria-controls="navbar-solid-bg"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        class="w-full md:block md:w-auto"
        id="navbar-solid-bg"
        v-show="showNavbar"
      >
        <ul
          class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent"
        >
          <li>
            <a
              href="#profile"
              class="block py-2 pl-3 pr-4 text-gray-900 md:text-white rounded-lg hover:bg-gray-100 hover:text-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
              aria-current="page"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="https://astro-notion-blog-b6l.pages.dev/"
              target="_blank"
              class="flex py-2 pl-3 pr-4 text-gray-900 md:text-white rounded-lg hover:bg-gray-100 hover:text-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
            >
              Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M15 9l-6 6"></path>
                <path d="M15 15v-6h-6"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              class="block py-2 pl-3 pr-4 text-gray-900 md:text-white rounded-lg hover:bg-gray-100 hover:text-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
