<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div v-if="isLoading">
        <LoadingPage></LoadingPage>
      </div>

      <!-- APP -->
      <div v-else-if="user" class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
          <!-- 左 -->
          <div class="hidden xs:block xs:col-span-1 md:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>
          <!-- 中 -->
          <main class="col-span-12 xs:col-span-11 md:col-span-7">
            <NuxtPage></NuxtPage>
            <button type="button" class="border" @click="darkMode = !darkMode">
              測試暗黑模式
            </button>
          </main>
          <!-- 右 -->
          <div class="hidden md:block md:col-span-3">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
      <AuthPage v-else></AuthPage>
    </div>
  </div>
</template>

<script setup>
// 控制暗黑模式
const darkMode = ref(false);
// 登入狀態
const { useAuthUser, initAuth, useAuthLoading } = useAuth();
const isLoading = useAuthLoading();
const user = useAuthUser();

onBeforeMount(() => {
  initAuth();
});
</script>
