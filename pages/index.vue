<template>
  <div>
    <Head>
      <Title>TPF</Title>
    </Head>
    <!-- 主頁內容：發表文章+討論串資訊流 -->
    <MainSection title="Hello Taiwan" :loading="loading">
      <ArticleForm></ArticleForm>
    </MainSection>
    <ArticleListFeed :articles="responseArticles" />
  </div>
</template>
<script setup>
const loading = ref(false);

definePageMeta({
  layout: "default",
  middleware: "auth",
});

/** 資訊流 */
const responseArticles = ref([]);
const { getArticles } = useArticle();

onBeforeMount(async () => {
  loading.value = true;
  try {
    console.log("[UI] 讀取文章列表");
    const response = await getArticles();
    console.log("[UI] 文章列表讀取結果：", response);
    responseArticles.value = response.articleList;
  } catch (error) {
    console.log("[UI] 讀取文章列表失敗", error);
  } finally {
    loading.value = false;
  }
});
</script>
