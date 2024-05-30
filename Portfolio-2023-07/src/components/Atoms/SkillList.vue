<script setup>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
defineProps({
  title: String,
  skills: String,
});
</script>
<template>
  <KinesisContainer class="mt-4 text-xl">
    <KinesisElement strength="8">
      <span class="text-xs">{{ title }}</span>
      <br />
      {{ skills }}
    </KinesisElement>
  </KinesisContainer>
</template>
