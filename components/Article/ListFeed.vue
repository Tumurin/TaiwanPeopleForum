<template>
  <div>
    <div v-if="isEmptyArray" class="p-4">
      <p class="text-center text-gray-500">目前沒有任何文章 😢</p>
    </div>
    <div
      v-else
      class="pb-4 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
      :class="[defaultBorderColor, defaultTransition]"
      v-for="(article, id) in props.articles"
      :key="id"
      @click="redirect(article)"
    >
      <ArticleItem :article="article" compact />
    </div>
  </div>
</template>
<script setup>
const { defaultBorderColor, defaultTransition } = useTailwindConfig();

const props = defineProps({
  articles: {
    type: Array,
    required: true,
  },
});

const isEmptyArray = computed(() => props.articles.length === 0);

/** 前往個別文章 */
function redirect(article) {
  navigateTo(`/status/${article.id}`);
}
</script>
