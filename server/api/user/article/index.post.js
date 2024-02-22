import formidable from "formidable";
// import { articleTransformer } from "~/server/transformers/article"
import { createArticle } from "~/server/db/articles";

export default defineEventHandler(async (event) => {
  console.log("[server API] 發送一則貼文");

  // 處理影音上傳
  const form = formidable({});

  const response = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      resolve({ fields, files });
    });
  });
  console.log("[server API] 解析請求", response);

  const { fields, files } = response;

  const userId = event.context?.auth?.user?.id;

  // 討論串內文
  const articleData = {
    content: fields.text[0],
    u_id: userId,
  };

  const replyTo = fields.replyTo;

  if (replyTo && replyTo !== "null" && replyTo !== "undefined") {
    articleData.replyToId = replyTo;
  }

  // 資料庫操作
  const article = await createArticle(articleData);
  console.log("[server API] 創建文章資料", article);

  // 將圖片上傳到 cloudinary
  // const filePromises = Object.keys(files).map(async key => {
  //     const file = files[key]

  //     const cloudinaryResource = await uploadToCloudinary(file.filepath)

  //     return createMediaFile({
  //         url: cloudinaryResource.secure_url,
  //         providerPublicId: cloudinaryResource.public_id,
  //         userId: userId,
  //         articleId: article.id
  //     })
  // })
  // await Promise.all(filePromises)

  return {
    // article: articleTransformer(article)
    article,
  };
});
