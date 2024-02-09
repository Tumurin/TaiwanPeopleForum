<template>
  <!-- 搜尋 -->
  <!-- todo -->
  <!-- 卡片:焦點 -->
  <SidebarRightPreviewCard title="What's happening">
    <SidebarRightPreviewCardItem v-for="(info, i) in happenings" :key="i" :info="info">
      <h3 class="text-md font-bold text-black dark:text-white">
        {{ info.title }}
      </h3>
      <p class="text-xs font-normal text-gray-600 dark:text-gray-300">
        {{ info.count }}
      </p>
    </SidebarRightPreviewCardItem>
  </SidebarRightPreviewCard>
  <!-- 卡片:誰追蹤我 -->
  <SidebarRightPreviewCard title="Who to follow">
    <SidebarRightPreviewCardItem v-for="(info, i) in followers" :key="i" :info="info">
      <div class="flex flex-row justify-between p-2">
        <div class="flex flex-row">
          <img class="w-10 h-10 rounded-full" :src="info.imageUrl" :alt="info.name" />
          <div class="flex flex-col ml-2">
            <h3 class="text-sm font-bold text-black dark:text-white">
              {{ info.name }}
            </h3>
            <p class="text-xs font-normal text-gray-600 dark:text-gray-300">
              {{ info.handle }}
            </p>
          </div>
        </div>
        <div class="flex items-center h-full">
          <button
            class="px-4 py-2 text-xs font-bold rounded-full text-white bg-black dark:text-black dark:bg-white"
          >
            Follow
          </button>
        </div>
      </div>
    </SidebarRightPreviewCardItem>
  </SidebarRightPreviewCard>
</template>

<script setup>
const happenings = ref([
  {
    title: "DDP",
    count: "18.8k Tweets",
  },
  {
    title: "TTP",
    count: "14.3k Tweets",
  },
  {
    title: "KMT",
    count: "10.2k Tweets",
  },
]);
const followers = ref([
  {
    name: "Mr.Lai",
    handle: "@Lai",
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    name: "Mr.Ko",
    handle: "@Ko",
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    name: "Mr.Ho",
    handle: "@Ho",
    imageUrl: "https://picsum.photos/200/200",
  },
]);
</script>
