import { Article } from "~/server/models/Article"

export interface articleData {
    title: string, // 討論串標題
    content: string, // 內文
    u_id: string, // 作者 id
    created: Date,
    updated: Date,
}

export const createArticle = async (articleData: articleData) => {
    return await Article.create(articleData)
}

export const getArticle = async (params = {}) => {
    return await Article.find(params)
}

export const getArticleById = async (articleId: string) => {
    return await Article.findById(articleId)
}