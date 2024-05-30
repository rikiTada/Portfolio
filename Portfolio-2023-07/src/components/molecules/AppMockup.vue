<script setup></script>
<template>
  <!-- mockup  -->
  <div class="py-24 my-20 content-bg">
    <p
      class="text-white text-sm md:text-xl mx-8 text-center animate-bounce mb-6 after:content-['🖱️']"
    >
      [Three.js]
      <span class="tracking-wider">Play with drag and scroll</span>
    </p>
    <div
      class="relative mx-auto border-gray-800/75 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]"
    >
      <div class="rounded-t overflow-hidden h-[156px] md:h-[278px]">
        <iframe
          title="Apples"
          src="https://blend-six.vercel.app/"
          frameborder="0"
          class="h-[156px] md:h-[278px] w-full"
        >
        </iframe>
      </div>
    </div>
    <div
      class="relative mx-auto border-b-2 border-r-2 border-gray-500/75 bg-gradient-to-r from-gray-400/75 to-gray-500/75 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]"
    >
      <div
        class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"
      ></div>
    </div>
  </div>
</template>
