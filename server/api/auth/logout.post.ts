import { removeRefreshToken } from "~/server/db/refreshTokens"

export default defineEventHandler(async (event) => {
    try {
        const refreshToken = getCookie(event, "refresh_token") as string;
        await removeRefreshToken(refreshToken)
    } catch (error) { }

    deleteCookie(event, "refresh_token", {
        httpOnly: true,
        sameSite: true
    })

    return { message: 'Done' }
})