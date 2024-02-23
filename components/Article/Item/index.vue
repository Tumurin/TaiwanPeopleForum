<template>
  <div>
    <!-- 文章標題 -->
    <ArticleItemHeader />

    <div :class="articleBodyWrapper">
      <p
        class="flex-shrink w-auto font-medium text-gray-800 dark:text-white"
        :class="textSize"
      >
        {{ props.article.content }}
      </p>

      <div
        v-for="image in article.mediaFiles"
        :key="image.id"
        class="flex my-3 mr-2 border-2 rounded-2xl"
        :class="defaultBorderColor"
      >
        <img :src="image.url" class="w-full rounded-2xl" />
      </div>

      <div class="mt-2" v-if="!props.hideActions">
        <!-- 評論 轉發 按讚 查看觀看次數 收藏 -->
        <ArticleItemActions
          :article="props.article"
          :compact="props.compact"
          @on-comment-click="handleCommentClick"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const { defaultBorderColor } = useTailwindConfig();

const articleBodyWrapper = computed(() => (props.compact ? "ml-16" : "ml-2 mt-4"));
const textSize = computed(() => (props.compact ? "text-base" : "text-2xl"));

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
  hideActions: {
    type: Boolean,
    default: false,
  },
});

function handleCommentClick() {
  emitter.$emit("reply", props.article);
}
</script>
