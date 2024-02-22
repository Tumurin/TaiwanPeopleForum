// import UrlPattern from "url-pattern"
import { getUserById } from '~/server/db/users.js'
import { decodeAccessToken } from "../utils/jwt.js"

export default defineEventHandler(async (event) => {
    const endpoints = [
        '/api/auth/user',
        '/api/user/article',
    ]

    const isHandledByThisMiddleware = endpoints.some(endopoint => {
        // const pattern = new UrlPattern(endopoint)
        // return pattern.match(event.req.url)
        return event.node.req.url == endopoint
    })

    console.log("[server中間件auth] 請求需要Auth?", isHandledByThisMiddleware)

    if (!isHandledByThisMiddleware) {
        return
    }

    // 解析請求中的驗證資訊
    const token = event.node.req.headers['authorization']?.split(' ')[1]
    console.log("[server中間件auth] 解析請求中的驗證資訊", token);
    const decoded = decodeAccessToken(token) as { userId: string }
    console.log("[server中間件auth] 解析結果", decoded);
    if (!decoded) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
            message: "請求中的 token 解碼失敗"
        }))
    }

    try {
        const userId = decoded.userId

        const user = await getUserById(userId);
        console.log("[server中間件auth] 確認用戶", user);
        event.context.auth = { user }
    } catch (error) {
        return
    }

})