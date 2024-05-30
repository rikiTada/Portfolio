<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

defineProps({
  name: String,
  mail: String,
  message: String,
  submit: String,
});

const nameInput = ref("");
const emailInput = ref("");
const messageInput = ref("");

const formIsValid = computed(() => {
  return (
    nameInput.value.trim() !== "" &&
    emailInput.value.trim() !== "" &&
    messageInput.value.trim() !== ""
  );
});

const router = useRouter();
let submitted = ref(false);
const onIframeLoad = () => {
  if (submitted.value) {
    console.log("form submitted, redirecting...");
    router.push("/thanks");
  }
};
</script>

<template>
  <form
    action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScM8qaA4WcHP3b3dZ6fF449vHvE9gErNkv9T90xx3q1YRlA4w/formResponse"
    method="POST"
    target="hidden_iframe"
    @submit="submitted = true"
  >
    <label
      for="name"
      class="tracking-widest block my-6 text-sm font-medium text-white"
    >
      {{ name }}
      <input
        v-model="nameInput"
        id="name"
        name="entry.377617998"
        required="required"
        class="block p-2.5 md:w-1/2 w-full text-sm text-gray-800 bg-gray-50/90 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      />
    </label>
    <label
      for="email"
      class="tracking-widest block my-6 text-sm font-medium text-white"
    >
      {{ mail }}
      <input
        v-model="emailInput"
        type="email"
        id="email"
        name="entry.1813758226"
        required="required"
        class="block p-2.5 md:w-1/2 w-full text-sm text-gray-800 bg-gray-50/90 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      />
    </label>
    <label
      for="message"
      class="tracking-widest block my-6 text-sm font-medium text-white"
    >
      {{ message }}
      <textarea
        v-model="messageInput"
        rows="5"
        id="message"
        name="entry.2059369744"
        required="required"
        class="block p-2.5 w-full text-sm text-gray-800 bg-gray-50/90 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
    </label>
    <button
      :class="{
        ' cursor-not-allowed backdrop-blur': !formIsValid,
        'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300':
          formIsValid,
      }"
      type="submit"
      class="btn"
    >
      {{ submit }}
    </button>
  </form>
  <iframe
    name="hidden_iframe"
    id="hidden_iframe"
    style="display: none"
    @load="onIframeLoad"
  ></iframe>
</template>
