import { decodeRefreshToken, generateTokens } from "~/server/utils/jwt"
import { getRefreshTokenByToken } from "~/server/db/refreshTokens";
import { getUserById } from "~/server/db/users";

/** 透過 refresh token 刷新 access token */
export default defineEventHandler(async (event) => {
    // 查找 cookie 是否存在 refresh token
    const refreshToken_fromCookie = getCookie(event, "refresh_token");

    if (!refreshToken_fromCookie) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'cookie 沒有 refresh token'
        }))
    }

    // 查找資料庫是否存在 refresh token
    const refreshToken = getRefreshTokenByToken(refreshToken_fromCookie).catch((error) => {
        console.log(error);
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: 'Something went wrong'
        }))
    })

    if (!refreshToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: '查無此 refresh token'
        }))
    }

    // 產生新的 access token 給使用者
    const token = decodeRefreshToken(refreshToken_fromCookie) as { userId: string }

    const user = await getUserById(token.userId).catch((error) => {
        console.log(error);
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: 'Something went wrong'
        }))
    })

    if (!user) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: 'Something went wrong'
        }))
    }

    const { accessToken } = generateTokens(user)

    return { access_token: accessToken }
});