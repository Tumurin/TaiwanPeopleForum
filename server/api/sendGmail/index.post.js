export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);

  // 設定 Gmail API
  const oauth2Client = new google.auth.OAuth2(
    YOUR_CLIENT_ID,
    YOUR_CLIENT_SECRET,
    YOUR_REDIRECT_URI
  );

  // 預設情況下，使用 OAuth 2.0 來進行認證
  google.options({ auth: oauth2Client });

  // 添加一個發送郵件的路由
  app.post("/send", async (req, res) => {
    // 實現發送郵件的邏輯
    // 使用 req.body 中的資訊來發送郵件
  });
  return { message: "Done" };
});
