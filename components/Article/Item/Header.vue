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
                . {{ props.article.postedAtHuman }}
            </span>


            <p v-if="props.article.replyTo" class="text-sm">
                <span class="text-gray-500">
                    Replying to
                </span>

                <nuxt-link :to="replyToArticleUrl" class="text-blue-400">
                    {{ props.article.replyTo.author.handle }}
                </nuxt-link>
            </p>

        </div>


    </div>

</template>
<script setup>
const props = defineProps({
    article: {
        type: Object,
        required: true
    }
})

const author = props.article.author
const replyToArticleUrl = computed(() => `/status/${props.article?.replyTo?.id}`)
</script>