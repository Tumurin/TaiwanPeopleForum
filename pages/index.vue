<template>
  <!-- 主頁內容：發表文章+討論串資訊流 -->
  <MainSection title="Hello Taiwan" :loading="loading">
    <ArticleForm></ArticleForm>
  </MainSection>
</template>
<script setup>
const loading = ref(false);

definePageMeta({
  layout: "default",
  middleware: "auth",
});
</script>
