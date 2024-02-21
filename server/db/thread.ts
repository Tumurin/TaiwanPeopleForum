import { Thread } from "~/server/models/Thread"

export interface threadData {
    title: string, // 討論串標題
    content: string, // 內文
    u_id: string, // 作者 id
    created: Date,
    updated: Date,
}

export const createThread = async (threadData: threadData) => {
    return await Thread.create(threadData)
}

export const getThread = async (params = {}) => {
    return await Thread.find(params)
}

export const getThreadById = async (threadId: string) => {
    return await Thread.findById(threadId)
}