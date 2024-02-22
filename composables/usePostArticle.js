export default () => {
  const usepostArticleModal = () => useState("post_article_modal", () => false);
  const useReplyArticle = () => useState("reply_article", () => null);

  const closepostArticleModal = () => {
    const postArticleModal = usepostArticleModal();
    postArticleModal.value = false;
  };

  const setReplyTo = (article) => {
    const replyArticle = useReplyArticle();
    replyArticle.value = article;
  };

  const openpostArticleModal = (article = null) => {
    const postArticleModal = usepostArticleModal();
    postArticleModal.value = true;

    setReplyTo(article);
  };

  const postArticle = (formData) => {
    const form = new FormData();
    // 文章內容
    form.append("text", formData.text);
    console.log("[usePostArticle]發表文章：",form);
    // form.append("replyTo", formData.replyTo);

    // formData.mediaFiles.forEach((mediaFile, index) => {
    //   form.append("media_file_" + index, mediaFile);
    // });

    return useFetchWithToken("/api/user/article", {
      method: "POST",
      body: form,
    });
  };

  const getArticles = (params = {}) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchWithToken("/api/articles", {
          method: "GET",
          params,
        });

        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getArticleById = (articleId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchWithToken(`/api/articles/${articleId}`);

        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    postArticle,
    getArticles,
    getArticleById,
    closepostArticleModal,
    usepostArticleModal,
    openpostArticleModal,
    useReplyArticle,
  };
};
