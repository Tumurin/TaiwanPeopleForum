<template>
    <div>
        <ThreadItem :thread="props.thread" />

        <ThreadForm placeholder="Thread your reply" :reply-to="props.thread" :user="props.user"
            @on-success="handleFormSuccess" />

        <ThreadListFeed :threads="replies" />
    </div>
</template>
<script setup>
const props = defineProps({
    thread: {
        type: Object,
        required: true
    },
    user: {
        type: Object,
        required: true
    }
})

const replies = computed(() => props.thread?.replies || [])

function handleFormSuccess(thread) {
    navigateTo({
        path: `/status/${thread.id}`
    })
}

</script>