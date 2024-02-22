<template>
  <div>
    <div v-if="isEmptyArray" class="p-4">
      <p class="text-center text-gray-500">No articles 😢</p>
    </div>
    <div
      v-else
      class="pb-4 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
      :class="[twitterBorderColor, defaultTransition]"
      v-for="article in props.articles"
      :key="article.id"
      @click="redirect(article)"
    >
      <ArticleItem :article="article" compact />
    </div>
  </div>
</template>
<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig();

const props = defineProps({
  articles: {
    type: Array,
    required: true,
  },
});

const isEmptyArray = computed(() => props.articles.length === 0);

function redirect(article) {
  navigateTo(`/status/${article.id}`);
}
</script>
