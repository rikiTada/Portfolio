<script setup>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
</script>
<template>
  <kinesis-container
    class="content-bg px-4 w-full md:w-fit min-h-[calc(100vh-4rem] py-16 lg:py-24 my-4"
  >
    <kinesis-element
      type="depth"
      :strength="25"
      class="mb-4 text-4xl font-extrabold md:tracking-tight tracking-wide leading-none text-white md:text-5xl lg:text-6xl"
    >
      From small steps to a big future.
    </kinesis-element>
    <p
      class="md:tracking-widest tracking-[0.25rem] my-8 text-sm font-normal text-white md:text-lg lg:text-xl sm:px-16 lg:px-48 short md:whitespace-normal overflow-visible"
      title="As a frontend engineer, I always strive to pursue technology, try new tools and the latest trends."
    >
      As a frontend engineer, I always strive to pursue technology, try new
      tools and the latest trends.
    </p>
    <a
      href="#profile"
      class="hover:text-blue-500 hover:bg-white hover:border-blue-500 group inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white"
    >
      Learn more
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="group-hover:text-blue-500 transition-transform duration-500 group-hover:translate-y-2"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
        <path d="M8 12l4 4"></path>
        <path d="M12 8v8"></path>
        <path d="M16 12l-4 4"></path>
      </svg>
    </a>
  </kinesis-container>
</template>
