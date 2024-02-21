import { userTransformer } from "~/server/transformers/user"

export default defineEventHandler(async (event) => {
    console.log("帶 auth token 資訊獲取用戶資料：", event.context.auth);

    return {
        user: userTransformer(event.context.auth?.user)
    }

})