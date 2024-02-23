<template>
  <div class="flex p-4">
    <div>
      <!-- 發文者 頭像 -->
      <img
        class="w-10 h-10 rounded-full"
        src="https://1.gravatar.com/avatar/c2552c16d9658ee2e40c7441ebc5646386d7ebb9bedcb0c6739835a26958d95c?size=256"
        alt=""
      />
    </div>

    <div class="ml-3">
      <span class="font-medium text-gray-800 dark:text-white">{{ "author.name" }}</span>

      <span class="ml-3 text-sm font-medium text-gray-400">
        <nuxt-link to="#">
          {{ "author.handle" }}
        </nuxt-link>
        . {{ "props.article.postedAtHuman" }}
      </span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  article: {
    type: Object,
  },
});

// const author = props.article.author;
const replyToArticleUrl = computed(() => `/status/${props.article?.replyTo?.id}`);
</script>
