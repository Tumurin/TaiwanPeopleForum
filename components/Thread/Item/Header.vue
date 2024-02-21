<template>
    <div class="flex p-4">

        <div>
            <img class="w-10 h-10 rounded-full" :src="author.profileImage" alt="">
        </div>

        <div class="ml-3">
            <span class="font-medium text-gray-800 dark:text-white">{{ author.name }}</span>


            <span class="ml-3 text-sm font-medium text-gray-400">
                <nuxt-link to="#">
                    {{ author.handle }}
                </nuxt-link>
                . {{ props.thread.postedAtHuman }}
            </span>


            <p v-if="props.thread.replyTo" class="text-sm">
                <span class="text-gray-500">
                    Replying to
                </span>

                <nuxt-link :to="replyToThreadUrl" class="text-blue-400">
                    {{ props.thread.replyTo.author.handle }}
                </nuxt-link>
            </p>

        </div>


    </div>

</template>
<script setup>
const props = defineProps({
    thread: {
        type: Object,
        required: true
    }
})

const author = props.thread.author
const replyToThreadUrl = computed(() => `/status/${props.thread?.replyTo?.id}`)
</script>