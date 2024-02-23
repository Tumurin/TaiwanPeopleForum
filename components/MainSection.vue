<template>
  <div class="border-x" :class="defaultBorderColor">
    <div class="sticky top-0 px-4 py-3 backdrop-blur-md bg-white/80 dark:bg-dim-900/80">
      <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">{{ title }}</h2>
    </div>
    <!-- 讀取動畫 -->
    <div
      v-if="loading"
      class="flex items-center justify-center p-4 border-b"
      :class="defaultBorderColor"
    >
      <UISpinner></UISpinner>
    </div>
    <!-- 主頁內容 -->
    <div v-else class="text-black dark:text-white">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const { defaultTransition, defaultBorderColor } = useTailwindConfig();
const props = defineProps({
  title: {
    type: String,
    require: true,
  },
  loading: {
    type: Boolean,
    require: true,
  },
});
</script>
