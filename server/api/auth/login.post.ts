import { getUserByAccount } from "~/server/db/users";
import { createRefreshToken } from "~/server/db/refreshTokens";

import { userTransformer } from "~/server/transformers/user"
import { generateTokens } from "~/server/utils/jwt.js"

import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
    console.log("請求登入");
    const body = await readBody(event);
    /** 
     {"account":"foo",
     "password":"asdf1234"}
     */
    const { account, password } = body;
    console.log("解析帳號密碼：", account, password)
    if (!account || !password) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "缺少帳號或密碼"
    }))

    // 資料庫查找對應的用戶
    const user: UserDocument | null = await getUserByAccount(account);
    console.log("資料庫查找用戶：", user)
    if (!user) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "查無此用戶"
    }))

    // 檢查密碼正確性
    const isPasswordMatched = await bcrypt.compare(password, user.password)
    console.log("檢查密碼是否正確：", isPasswordMatched)
    if (!isPasswordMatched) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "密碼錯誤"
    }))

    const { accessToken, refreshToken } = generateTokens(user);

    // 儲存登入過的 Token 到資料庫
    await createRefreshToken(refreshToken, user.id)
    console.log("登記 refresh token 到資料庫", refreshToken)

    // refresh token 存 cookie
    setCookie(event, "refresh_token", refreshToken, {
        httpOnly: true,
        sameSite: true
    })
    console.log("儲存 Cookie", getCookie(event, "refresh_token"));

    return {
        access_token: accessToken,
        user: userTransformer(user)
    }
});
