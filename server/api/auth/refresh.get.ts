import { decodeRefreshToken, generateTokens } from "~/server/utils/jwt"
import { getRefreshTokenByToken } from "~/server/db/refreshTokens";
import { getUserById } from "~/server/db/users";

/** 透過 refresh token 刷新 access token */
export default defineEventHandler(async (event) => {
    console.log("請求刷新token");
    const refreshToken_fromCookie = getCookie(event, "refresh_token");
    console.log("查找 cookie 是否存在 refresh token", refreshToken_fromCookie)

    if (!refreshToken_fromCookie) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
            message: "cookie 沒有 refresh token"
        }))
    }

    const refreshToken = await getRefreshTokenByToken(refreshToken_fromCookie).catch((error) => {
        console.log(error);
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: "Internal Server Error",
            message: '資料庫不存在此 refreshToken'
        }))
    })
    console.log("查找資料庫是否存在 refresh token", refreshToken)

    if (!refreshToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
            message: '查無此 refresh token'
        }))
    }

    const token = decodeRefreshToken(refreshToken_fromCookie) as { userId: string }
    const user = await getUserById(token.userId).catch((error) => {
        console.log(error);
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: "Internal Server Error",
            message: 'Something went wrong'
        }))
    })

    if (!user) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: "Internal Server Error",
            message: 'Something went wrong'
        }))
    }

    const { accessToken } = generateTokens(user)
    console.log("產生新的 access token 給使用者", accessToken)

    return { access_token: accessToken }
});