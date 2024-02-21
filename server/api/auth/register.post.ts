import { userTransformer } from "~/server/transformers/user"
import { createUser } from "~/server/db/users"

export default defineEventHandler(async (event) => {
  console.log("請求創建帳號");
  const body = await readBody(event);

  /** 
   {"email":"test@gmail.com",
   "account":"foo",
   "password":"asdf1234",
   "passwordRepeat":"asdf1234",
   "name":"iTaiwan"}
   */
  const { email, account, password, passwordRepeat, name } = body;
  console.log("建帳資料", email, account, password, passwordRepeat, name);
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
  console.log("資料確認OK");

  // 寫入 mongoDB
  const userData = {
    email,
    account,
    password,
    name
  }

  const user = await createUser(userData)
  console.log("建立帳號成功：", user);

  return {
    body: userTransformer(user)
  }
});
