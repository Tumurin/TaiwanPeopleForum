<template>
  <div
    class="m-2 border rounded-2xl bg-gray-50 dark:bg-dim-700 overflow-hidden"
    :class="defaultBorderColor"
  >
    <!-- 卡片標題 -->
    <h2 class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white">
      {{ props.title }}
    </h2>
    <!-- 卡片項目 -->
    <slot></slot>
    <!-- 顯示更多 -->
    <div
      class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-200"
      :class="defaultTransition"
    >
      show more
    </div>
  </div>
</template>

<script setup>
const { defaultBorderColor, defaultTransition } = useTailwindConfig();
const props = defineProps({
  title: {
    type: String,
    default: "N/A",
  },
});
</script>
