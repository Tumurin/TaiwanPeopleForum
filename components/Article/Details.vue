<template>
    <div>
        <ArticleItem :article="props.article" />

        <ArticleForm placeholder="Article your reply" :reply-to="props.article" :user="props.user"
            @on-success="handleFormSuccess" />

        <ArticleListFeed :articles="replies" />
    </div>
</template>
<script setup>
const props = defineProps({
    article: {
        type: Object,
        required: true
    },
    user: {
        type: Object,
        required: true
    }
})

const replies = computed(() => props.article?.replies || [])

function handleFormSuccess(article) {
    navigateTo({
        path: `/status/${article.id}`
    })
}

</script>