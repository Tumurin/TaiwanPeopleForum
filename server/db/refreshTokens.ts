import { RefreshToken } from "~/server/models/RefreshToken"

export const createRefreshToken = async (token: string, userId: string) => {
    // todo: 先查找，儲存過的就改 update
    return await RefreshToken.create({
        token: token,
        userId: userId
    })
}

export const getRefreshTokenByToken = async (token: string): Promise<RefreshTokenDocument | null> => {
    return await RefreshToken.where("token").equals(token).findOne().exec();
}

export const removeRefreshToken = async (token: string): Promise<any> => {
    return await RefreshToken.deleteOne({
        token: token
    }).exec();
}