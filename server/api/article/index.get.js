import { getArticle } from "~/server/db/articles";

export default defineEventHandler(async (event) => {
  const { query } = getQuery(event);

  console.log("[server api article/get] 收到請求文章列表,請求內容", query);

  const articleList = await getArticle();
  console.log("[server api article/get] 資料庫回應：", articleList);

  return {
    articleList: articleList,
  };
});
