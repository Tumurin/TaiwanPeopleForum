export default () => {
  const usePostThreadModal = () => useState("post_thread_modal", () => false);
  const useReplyThread = () => useState("reply_thread", () => null);

  const closePostThreadModal = () => {
    const postThreadModal = usePostThreadModal();
    postThreadModal.value = false;
  };

  const setReplyTo = (thread) => {
    const replyThread = useReplyThread();
    replyThread.value = thread;
  };

  const openPostThreadModal = (thread = null) => {
    const postThreadModal = usePostThreadModal();
    postThreadModal.value = true;

    setReplyTo(thread);
  };

  const postThread = (formData) => {
    const form = new FormData();

    form.append("text", formData.text);
    form.append("replyTo", formData.replyTo);

    formData.mediaFiles.forEach((mediaFile, index) => {
      form.append("media_file_" + index, mediaFile);
    });

    return useFetchWithToken("/api/user/threads", {
      method: "POST",
      body: form,
    });
  };

  const getThreads = (params = {}) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchWithToken("/api/threads", {
          method: "GET",
          params,
        });

        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getThreadById = (threadId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchWithToken(`/api/threads/${threadId}`);

        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    postThread,
    getThreads,
    getThreadById,
    closePostThreadModal,
    usePostThreadModal,
    openPostThreadModal,
    useReplyThread,
  };
};
