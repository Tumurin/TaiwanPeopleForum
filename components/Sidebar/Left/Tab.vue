<template>
  <nuxt-link
    to="#"
    class="flex items-center p-3 text-black rounded-full w-min hover:bg-gray-200 dark:hover:bg-dim-200 dark:text-white"
  >
    <div class="w-6 h-full text-dark text-3xl" :class="defaultTransition">
      <slot name="icon"></slot>
    </div>
    <div class="hidden xl:block ml-4 text-xl" :class="textClasses">
      <slot name="title"></slot>
    </div>
  </nuxt-link>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
const textClasses = computed(() => (props.active ? "font-semibold" : "font-normal"));
</script>
