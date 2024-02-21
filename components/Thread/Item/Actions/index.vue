<template>
  <div class="flex items-center justify-around w-full">
    <ThreadItemActionsIcon color="blue" @on-click="emits('onCommentClick')" :size="size">
      <template v-slot:icon="{ classes }">
        <Icon :class="classes" name="charm:messages"></Icon>
      </template>

      <template v-if="showStats" v-slot:default>
        {{ props.thread.repliesCount }}
      </template>
    </ThreadItemActionsIcon>

    <ThreadItemActionsIcon color="green" :size="size">
      <template v-slot:icon="{ classes }">
        <Icon :class="classes" name="charm:refresh"></Icon>
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </ThreadItemActionsIcon>

    <ThreadItemActionsIcon color="red" :size="size">
      <template v-slot:icon="{ classes }">
        <Icon :class="classes" name="charm:heart"></Icon>
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </ThreadItemActionsIcon>

    <ThreadItemActionsIcon color="blue" :size="size">
      <template v-slot:icon="{ classes }">
        <Icon :class="classes" name="charm:upload"></Icon>
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </ThreadItemActionsIcon>
  </div>
</template>
<script setup>
const emits = defineEmits(["onCommentClick"]);

const props = defineProps({
  thread: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
});

const showStats = computed(() => props.compact);
const size = computed(() => (props.compact ? 5 : 8));

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}
</script>
