<template>
  <div>
    <!-- 發新消息 -->
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>
    <div v-else>
      <!-- <ArticleItem
        :article="props.replyTo"
        v-if="props.replyTo && props.showReply"
        hideActions
      /> -->
      <!-- 撰文區域 -->
      <ArticleFormInput :placeholder="props.placeholder" @onSubmit="handleFormSubmit" />
    </div>
  </div>
</template>
<script setup>
const emits = defineEmits(["onSuccess"]);
const loading = ref(false);
const { postArticle } = useArticle();

const props = defineProps({
  placeholder: {
    type: String,
    default: "在想什麼？",
  },
  replyTo: {
    type: Object,
    default: null,
  },
  showReply: {
    type: Boolean,
    default: false,
  },
});

// 送出貼文
async function handleFormSubmit(data) {
  console.log("dafasdfadsfasdf", data);
  loading.value = true;
  try {
    const formData = { text: data.text };
    console.log("[UI]發送", formData);
    const response = await postArticle(formData);
    console.log("[UI]回應", response);
    emits("onSuccess", response.article);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
</script>
