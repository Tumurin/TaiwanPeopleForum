<template>
    <div>


        <ArticleItemHeader :article="props.article" />


        <div :class="articleBodyWrapper">
            <p class="flex-shrink w-auto font-medium text-gray-800 dark:text-white" :class="textSize">
                {{ props.article.text }}
            </p>

            <div v-for="image in article.mediaFiles" :key="image.id" class="flex my-3 mr-2 border-2 rounded-2xl"
                :class="twitterBorderColor">
                <img :src="image.url" class="w-full rounded-2xl" />
            </div>


            <div class="mt-2" v-if="!props.hideActions">
                <ArticleItemActions :article="props.article" :compact="props.compact"
                    @on-comment-click="handleCommentClick" />
            </div>

        </div>


    </div>
</template>
<script setup>
const { twitterBorderColor } = useTailwindConfig()

const emitter = useEmitter()

const props = defineProps({
    article: {
        type: Object,
        required: true
    },
    compact: {
        type: Boolean,
        default: false
    },
    hideActions: {
        type: Boolean,
        default: false
    }
})

const articleBodyWrapper = computed(() => props.compact ? 'ml-16' : 'ml-2 mt-4')

const textSize = computed(() => props.compact ? 'text-base' : 'text-2xl')

function handleCommentClick() {
    emitter.$emit('replyArticle', props.article)
}

</script>