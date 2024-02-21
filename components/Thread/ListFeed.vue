<template>
  <div>
    <div v-if="isEmptyArray" class="p-4">
      <p class="text-center text-gray-500">No threads 😢</p>
    </div>
    <div
      v-else
      class="pb-4 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
      :class="[twitterBorderColor, defaultTransition]"
      v-for="thread in props.threads"
      :key="thread.id"
      @click="redirect(thread)"
    >
      <ThreadItem :thread="thread" compact />
    </div>
  </div>
</template>
<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig();

const props = defineProps({
  threads: {
    type: Array,
    required: true,
  },
});

const isEmptyArray = computed(() => props.threads.length === 0);

function redirect(thread) {
  navigateTo(`/status/${thread.id}`);
}
</script>
