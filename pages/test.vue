<template>
  <div>
    <h2>測試頁</h2>
  </div>
</template>
<script setup>
const loading = ref(false);

definePageMeta({
  layout: "default",
  middleware: "auth",
});
</script>
