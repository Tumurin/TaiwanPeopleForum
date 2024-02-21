<template>
  <div>
    <!-- 發新消息 -->
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>
    <div v-else>
      <ThreadItem
        :thread="props.replyTo"
        v-if="props.replyTo && props.showReply"
        hideActions
      />
      <ThreadFormInput :placeholder="props.placeholder" @onSubmit="handleFormSubmit" />
    </div>
  </div>
</template>
<script setup>
const emits = defineEmits(["onSuccess"]);
const loading = ref(false);
const { postThread } = useThread();

const props = defineProps({
  placeholder: {
    type: String,
    default: "What's happening ?",
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

async function handleFormSubmit(data) {
  loading.value = true;
  try {
    const response = await postThread({
      text: data.text,
      mediaFiles: data.mediaFiles,
      replyTo: props.replyTo?.id,
    });

    emits("onSuccess", response.thread);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
</script>
