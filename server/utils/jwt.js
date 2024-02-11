import jwt from "jsonwebtoken"

const generateAccessToken = (user) => {
    const config = useRuntimeConfig()

    return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
        expiresIn: '10m'
    })
}

const generateRefreshToken = (user) => {
    const config = useRuntimeConfig()

    return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
        expiresIn: '4h'
    })
}

export const decodeAccessToken = (token) => {
    const config = useRuntimeConfig()

    try {
        return jwt.verify(token, config.jwtAccessSecret)
    } catch (error) {
        return null
    }
}

/** 解碼 JWT 獲取用戶資料 */
export const decodeRefreshToken = (token) => {
    const config = useRuntimeConfig()

    try {
        return jwt.verify(token, config.jwtRefreshSecret)
    } catch (error) {
        return null
    }
}

/** 將用戶資料轉為 JWT */
export const generateTokens = (user) => {
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    return {
        accessToken: accessToken,
        refreshToken: refreshToken
    }
}