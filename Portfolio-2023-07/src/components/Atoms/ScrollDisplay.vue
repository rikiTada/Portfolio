<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const scrollPosition = ref(0);

const updateScroll = () => {
  scrollPosition.value = Math.floor(window.scrollY);
};
onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScroll);
});
</script>
<template>
  <p
    class="p-1 fixed bottom-1 z-30 text-blue-50 text-sm right-0 tracking-wider [writing-mode:vertical-rl]"
  >
    {{ scrollPosition }}
  </p>
</template>
