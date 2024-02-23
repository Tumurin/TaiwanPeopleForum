<template>
  <div
    class="p-3 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
    :class="warpperClasses"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  info: {
    type: Object,
  },
});

const { defaultBorderColor, defaultTransition } = useTailwindConfig();

const warpperClasses = computed(() => {
  return `${defaultBorderColor} ${defaultTransition}`;
});
</script>
