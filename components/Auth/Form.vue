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

      <UIButton @click="clickHandle"> Go </UIButton>
    </div>
  </div>
</template>

<script setup>
const data = reactive({
  account: "",
  password: "",
  loading: false,
});

const authUser = useAuthUser();

async function handleLogin() {
  const { login } = useAuth();
  try {
    data.loading = true;
    await login({
      account: data.account,
      password: data.password,
    });

    console.log("登入後，authUser 值：", authUser.value);
    if (authUser.value) await navigateTo("/");
    else alert("出錯了");
  } catch (e) {
    console.log(e);
  } finally {
    data.loading = false;
  }
}

const isButtonDisabled = computed(() => {
  return !data.account || !data.password || data.loading;
});

const clickHandle = () => {
  console.log("測試直接進 index");
  navigateTo("/");
};
</script>
