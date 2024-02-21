<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <!-- APP -->
      <div class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
          <!-- 左 -->
          <div class="hidden xs:block xs:col-span-1 md:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>
          <!-- 中 -->
          <main class="col-span-12 xs:col-span-11 md:col-span-7">
            <slot />
            <button type="button" class="border" @click="darkMode = !darkMode">
              測試暗黑模式
            </button>
            <nuxt-link to="./">
              <button type="button" class="border">首頁</button>
            </nuxt-link>
            <nuxt-link to="./test">
              <button type="button" class="border">測試頁</button>
            </nuxt-link>
            <nuxt-link to="./login">
              <button type="button" class="border">登入</button>
            </nuxt-link>
            <button @click="onLogoutClick" type="button" class="border">登出</button>
          </main>
          <!-- 右 -->
          <div class="hidden md:block md:col-span-3">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// 控制暗黑模式
const darkMode = ref(false);
const { logout } = useAuth();
const onLogoutClick = async () => {
  console.log("按下登出");
  await logout();
  await navigateTo("./login");
};
</script>
