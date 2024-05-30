<script setup></script>

<template>
  <footer class="content-bg shadow my-2 mx-16">
    <div
      class="tracking-widest w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm text-white sm:text-center"
        >2023
        <a href="#" class="hover:underline">My Project</a>
      </span>
      <ul
        class="flex flex-wrap gap-4 items-center text-sm font-medium text-white"
      >
        <li>
          <a href="#profile" class="mr-4 hover:underline md:mr-6">PROFILE</a>
        </li>
        <li class="flex justify-start pr-4">
          <a
            href="https://astro-notion-blog-b6l.pages.dev/"
            target="_blank"
            class="hover:underline"
          >
            BLOG
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
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
        </li>
        <li>
          <a href="#contact" class="mr-4 hover:underline md:mr-6">CONTACT</a>
        </li>
      </ul>
    </div>
  </footer>
</template>
