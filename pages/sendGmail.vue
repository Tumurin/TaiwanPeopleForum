<template>
  <div>
    <form @submit.prevent="sendMail">
      <input v-model="email.subject" type="text" placeholder="主題" />
      <br />
      <textarea v-model="email.body" placeholder="內容"></textarea>
      <br />
      <button type="submit">發送郵件</button>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});

const email = ref({
  subject: "",
  body: "",
});
async function sendMail() {
  try {
    await this.$axios.post("/api/sendGmail", this.email);
    alert("郵件發送成功！");
  } catch (error) {
    console.error("郵件發送失敗：", error);
    alert("郵件發送失敗！");
  }
}
</script>
