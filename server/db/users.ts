import { User, UserDocument } from '~/server/models/User';
import bcrypt from "bcrypt";

export interface UserData {
    email: string;
    account: string;
    password: string;
    name: string;
}

export const createUser = async (userData: UserData): Promise<UserDocument> => {
    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(userData.password, salt);

    const user = await User.create({
        ...userData,
        password: hasedPassword
    });
    return user;
}

export const getUserByAccount = async (account: string): Promise<UserDocument | null> => {
    return await User.where("account").equals(account).findOne().exec();
}

export const getUserById = async (id: string): Promise<UserDocument | null> => {
    return await User.where("_id").equals(id).findOne().exec();
}