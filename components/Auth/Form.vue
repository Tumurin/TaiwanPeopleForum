<template>
  <div class="w-full">
    <div class="flex justify-center">
      <div class="w-10 h-10">
        <LogoTwitter />
      </div>
    </div>

    <div class="pt-5 space-y-6">
      <UIInput v-model="data.account" label="帳號" placeholder="@account" />

      <UIInput
        label="密碼"
        placeholder="********"
        type="password"
        v-model="data.password"
      />

      <UIButton @click="handleLogin" liquid :disabled="isButtonDisabled">
        Login
      </UIButton>
    </div>
  </div>
</template>
<script setup>
const data = reactive({
  account: "",
  password: "",
  loading: false,
});

async function handleLogin() {
  const { login } = useAuth();

  data.loading = true;
  try {
    await login({
      account: data.account,
      password: data.password,
    });
  } catch (error) {
    console.log(error);
  } finally {
    data.loading = false;
  }
}

const isButtonDisabled = computed(() => {
  return !data.account || !data.password || data.loading;
});
</script>
