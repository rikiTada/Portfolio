<script setup>
import ContactForm from "../molecules/ContactForm.vue";
</script>
<template>
  <h2 class="section_ttl">CONTACT</h2>
  <ContactForm
    :name="'Your name:'"
    :mail="' Email:'"
    :message="'Message:'"
    :submit="'Send'"
  />
</template>
