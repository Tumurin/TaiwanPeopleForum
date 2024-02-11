import { User } from "~/server/models/User";
import { userTransformer } from "~/server/transformers/user"

import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  /** 
   {"email":"test@gmail.com",
   "account":"helloTaiwan",
   "password":"a1234567",
   "passwordRepeat":"a1234567",
   "name":"iTaiwan"}
   */
  const { email, account, password, passwordRepeat, name } = body;

  if (!email || !account || !password || !passwordRepeat || !name) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "缺少資料",
    }));
  }

  if (password !== passwordRepeat) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "兩次輸入的密碼不一致",
    }));
  }

  const userData = {
    email,
    account,
    password,
    name
  }

  // 寫入 mongoDB
  const salt = await bcrypt.genSalt(10);
  const hasedPassword = await bcrypt.hash(body.password, salt);

  const user = await User.create({
    ...userData,
    password: hasedPassword
  });

  return {
    body: userTransformer(user)
  }

  // return { ...user.toObject(), password: undefined };
});
