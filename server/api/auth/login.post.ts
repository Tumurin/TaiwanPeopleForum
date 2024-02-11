import { getUserByAccount } from "~/server/db/users";
import { createRefreshToken } from "~/server/db/refreshTokens";

import { userTransformer } from "~/server/transformers/user"
import { generateTokens } from "~/server/utils/jwt.js"

import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    /** 
     {"account":"helloTaiwan",
     "password":"a1234567"}
     */
    const { account, password } = body;

    if (!account || !password) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "缺少帳號或密碼"
    }))

    // 資料庫查找對應的用戶
    const user: UserDocument | null = await getUserByAccount(account);

    if (!user) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "查無此用戶"
    }))

    // 檢查密碼正確性
    const isPasswordMatched = await bcrypt.compare(password, user.password)

    if (!isPasswordMatched) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "密碼錯誤"
    }))

    const { accessToken, refreshToken } = generateTokens(user);

    // 儲存登入過的 Token 到資料庫
    await createRefreshToken(refreshToken, user.id)

    // refresh token 存 cookie
    setCookie(event, "refresh_token", refreshToken, {
        httpOnly: true,
        sameSite: true
    })

    return {
        access_token: accessToken,
        user: userTransformer(user)
    }
});
