import type { LogoTwitter } from '#build/components';
<template>
  <div class="h-screen flex flex-col">
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
    <!--  -->
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
</script>
