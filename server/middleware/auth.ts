// import UrlPattern from "url-pattern"
import { getUserById } from '~/server/db/users.js'
import { decodeAccessToken } from "../utils/jwt.js"

export default defineEventHandler(async (event) => {
    const endpoints = [
        '/api/auth/user',
        '/api/user/tweets',
        '/api/tweets',
        '/api/tweets/:id'
    ]

    const isHandledByThisMiddleware = endpoints.some(endopoint => {
        // const pattern = new UrlPattern(endopoint)
        // return pattern.match(event.req.url)
        return event.node.req.url == endopoint
    })

    if (!isHandledByThisMiddleware) {
        return
    }

    // 解析請求中的驗證資訊
    const token = event.node.req.headers['authorization']?.split(' ')[1]

    const decoded = decodeAccessToken(token) as { userId: string }

    if (!decoded) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Unauthorized'
        }))
    }

    try {
        const userId = decoded.userId

        const user = await getUserById(userId);

        event.context.auth = { user }
    } catch (error) {
        return
    }

})