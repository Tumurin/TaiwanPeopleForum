import { userTransformer } from "~/server/transformers/user"
import { createUser } from "~/server/db/users"

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

  // 寫入 mongoDB
  const userData = {
    email,
    account,
    password,
    name
  }

  const user = await createUser(userData)

  return {
    body: userTransformer(user)
  }

  // return { ...user.toObject(), password: undefined };
});
