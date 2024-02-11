import { User } from "~/server/models/User";
import { generateTokens } from "~/server/utils/jwt.js"
import { RefreshToken } from "~/server/models/RefreshToken";

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
    const user = await User.findOne({
        account: { $in: account }
    })

    if (!user) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "查無此用戶"
    }))

    // 檢查密碼正確性
    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordMatch) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "密碼錯誤"
    }))

    const { accessToken, refreshToken } = generateTokens(user);

    // 儲存登入過的 Token 到資料庫
    const token = await RefreshToken.create({
        token: refreshToken,
        userId: user.id
    })

    // 將 token 發給用戶端
    setCookie(event, "refresh_token", refreshToken, {
        httpOnly: true,
        sameSite: true
    })

    return { accessToken, refreshToken }
});
