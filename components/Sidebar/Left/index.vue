<template>
  <div class="h-screen flex flex-col mx-2">
    <!-- logo 圖標 -->
    <div
      class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>
    <!-- 左側導覽 -->
    <div class="mt-2 space-y-2">
      <SidebarLeftTab v-for="(tab, i) in tabs" :key="i">
        <template v-slot:icon>
          <Icon :name="tab.icon" color="rgb(96 165 250 / 1)" />
        </template>
        <template v-slot:title>
          <h3>{{ tab.title }}</h3>
        </template>
      </SidebarLeftTab>
    </div>
    <!-- 發表文章按鈕 -->
    <div class="hidden xl:block">
      <UIButton liquid size="lg" @on-click="emits('onPostArticle')">
        <span class="font-bold"> 發文 </span>
      </UIButton>
    </div>
    <!-- icon 模式 -->
    <div class="block xl:hidden">
      <UIButton @on-click="emits('onPostArticle')">
        <div class="w-7 h-7 font-bold">
          <Icon
            class="w-7 h-7"
            name="material-symbols:edit"
            color="rgb(255 255 250 / 1)"
          />
        </div>
      </UIButton>
    </div>
    <!-- 登出按鈕 -->
    <div
      class="flex flex-row items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-dim-800"
      :class="defaultTransition"
      @click="emits('onLogout')"
    >
      <div class="flex flex-row">
        <!-- <img src="" class="w-10 h-10 rounded-full" /> -->
        <div class="flex-col hidden ml-2 xl:block">
          <h1 class="text-sm font-bold text-gray-800 dark:text-white">
            {{ "user.name" }}
          </h1>
          <p class="text-sm text-gray-400">
            {{ "user.handle" }}
          </p>
        </div>
      </div>

      <!-- ICON -->
      <div class="block">
        <div class="w-6 h-6 text-gray-800 dark:text-white">
          <Icon class="w-7 h-7" name="mdi:chevron-down" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig();
const tabs = [
  {
    icon: "charm:home",
    title: "Home",
  },
  {
    icon: "charm:hash",
    title: "Tags",
  },
  {
    icon: "charm:bell",
    title: "Notifications",
  },
  {
    icon: "charm:messages",
    title: "Messages",
  },
  {
    icon: "charm:bookmark",
    title: "Bookmarks",
  },
  {
    icon: "charm:layout-list",
    title: "List",
  },
  {
    icon: "charm:person",
    title: "Profile",
  },
  {
    icon: "charm:menu-meatball",
    title: "More",
  },
];
const emits = defineEmits(["onPostArticle", "onLogout"]);
</script>
