<template>
  <div>
    <nav class="top-0 left-0 w-full bg-gray-800 text-white p-4 z-10 lg:absolute">
      <div class="container mx-auto flex flex-wrap justify-between items-center">
        <div class="flex justify-between items-center w-full lg:w-auto">
          <a href="#home" class="text-lg font-bold">TaiwanPeopleForum</a>
          <button
            type="button"
            class="text-white inline-block lg:hidden"
            @click="toggleNav"
          >
            收合
          </button>
        </div>
        <div :class="{ hidden: !navOpen, block: navOpen }" class="lg:block lg:flex">
          <a href="#product" class="px-4 py-2 block hover:text-gray-300">核心宗旨</a>
          <a href="#features" class="px-4 py-2 block hover:text-gray-300">解決問題</a>
          <a href="#products" class="px-4 py-2 block hover:text-gray-300">產品</a>
          <a href="#team" class="px-4 py-2 block hover:text-gray-300">團隊</a>
          <a href="#contact" class="px-4 py-2 block hover:text-gray-300">聯絡我們</a>
        </div>
      </div>
    </nav>

    <!-- 產品簡述區塊 -->
    <section id="product" class="h-screen flex items-center">
      <!-- 容器，於大螢幕時為水平排列，小螢幕時為垂直排列 -->
      <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <!-- 文字敘述部分 -->
        <div class="w-full lg:w-1/2 p-8">
          <h1 class="text-4xl font-bold mb-4">共有論壇計畫</h1>
          <p class="mb-4">
            共有論壇計畫希望透過 AI 技術，打造一個屬於台灣人的公共政策討論平台。
          </p>
          <p class="mb-4">
            利用 AI
            技術強大的文字分析功能，將相關議題彙總。讓議題討論變得更加簡單高效，並且方便回溯查找。
          </p>
          <!-- 按鈕靠右對齊 -->
          <div class="flex justify-end">
            <a
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              href="#features"
            >
              了解更多
            </a>
          </div>
        </div>
        <!-- 圖片部分 -->
        <div class="w-full lg:w-1/2 p-8">
          <img
            src="https://picsum.photos/600/400"
            alt="產品圖片"
            class="w-full h-auto rounded"
          />
        </div>
      </div>
    </section>

    <!-- 第二區塊：產品解決的問題 -->
    <section id="features" class="py-16 bg-gray-100">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">解決問題</h2>
        <div class="flex flex-wrap justify-center">
          <!-- 單個功能介紹 -->
          <div class="w-full sm:w-1/2 px-4 mb-8">
            <img
              src="https://picsum.photos/200"
              alt="功能1"
              class="rounded-full mx-auto mb-4"
            />
            <h3 class="text-xl font-bold mb-2">訊息流不易檢索</h3>
            <p>
              現行人們在各大社群平台上討論議題，像是 FB LINE
              ...等。然而，社群平台的設計並非為了議題討論之用，因此相同主題的內容淹沒在訊息流之中，難以檢索。
            </p>
          </div>
          <!-- 重複上述結構以展示其他功能 -->
          <div class="w-full sm:w-1/2 px-4 mb-8">
            <img
              src="https://picsum.photos/201"
              alt="功能2"
              class="rounded-full mx-auto mb-4"
            />
            <h3 class="text-xl font-bold mb-2">發文忘記分類</h3>
            <p>
              為了方便檢索，必須要求使用者在發文前主動對張貼內容進行分類，違反人性。透過
              AI 技術，應該讓用戶可以像平時說話那樣去討論，分類交給 AI 來做。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 第三區塊：產品使用體驗 -->
    <section id="product-experience" class="py-16 bg-gray-100">
      <h2 class="text-3xl font-bold text-center mb-8">使用體驗</h2>
      <div class="container mx-auto flex flex-wrap items-stretch text-center">
        <!-- 左側文字說明，靠下對齊 -->
        <div class="w-2/12 p-4 hidden lg:flex lg:flex-col lg:justify-end">
          <p class="bg-white rounded-lg p-4">
            當需要針對某個議題深入時也可以切換主題閱讀
          </p>
        </div>

        <!-- 中間的產品使用 GIF 圖片 -->
        <div class="w-full lg:w-8/12 p-4 flex justify-center">
          <img
            src="https://cataas.com/cat/gif"
            alt="產品使用體驗"
            class="rounded-lg max-w-full h-auto"
          />
        </div>

        <!-- 右側文字說明，靠上對齊 -->
        <div class="w-2/12 p-4 hidden lg:flex lg:flex-col lg:justify-start">
          <p class="bg-white rounded-lg p-4">
            我們可以像在社交平台那樣，像說話般自然的書寫
          </p>
        </div>

        <!-- 手機版時的說明性文字 -->
        <div class="lg:hidden w-full p-4">
          <p class="bg-white rounded-lg p-4 mb-4">
            我們可以像在社交平台那樣，像說話般自然的書寫
          </p>
          <p class="bg-white rounded-lg p-4">
            當需要針對某個議題深入時也可以切換主題閱讀
          </p>
        </div>
      </div>
    </section>

    <!-- 第四區塊：產品特色瀑布流 -->
    <section id="product-features" class="py-16">
      <h2 class="text-3xl font-bold text-center mb-8">核心機制</h2>
      <div class="container mx-auto">
        <!-- 每個特色的容器應該保持一致的寬度，並在中間對齊 -->
        <div class="flex flex-wrap justify-center">
          <!-- 特色一：左邊文字，右邊圖片 -->
          <div class="flex flex-wrap items-center mb-8 max-w-4xl">
            <div class="w-full lg:w-1/2 p-4">
              <h3 class="text-2xl font-bold mb-2">AI分類技術</h3>
              <p>
                透過AI技術自動分類，用戶不用煩惱分類的問題，自然發表言論也能加入到關心的主題之中。
              </p>
            </div>
            <div class="w-full lg:w-1/2 p-4">
              <img
                src="https://picsum.photos/500/300?random=1"
                alt="特色一"
                class="rounded-lg"
              />
            </div>
          </div>

          <!-- 特色二：左邊圖片，右邊文字 -->
          <div class="flex flex-wrap items-center mb-8 max-w-4xl">
            <div class="w-full lg:w-1/2 p-4 lg:order-2">
              <h3 class="text-2xl font-bold mb-2">共有論壇</h3>
              <p>
                論壇的價值，理當屬於在此認真討論議題的每一個人。TaiwanPeopleForum
                將成立公益社團，確保收益不會落入某個人手上。
              </p>
            </div>
            <div class="w-full lg:w-1/2 p-4 lg:order-1">
              <img
                src="https://picsum.photos/500/300?random=2"
                alt="特色二"
                class="rounded-lg"
              />
            </div>
          </div>

          <!-- 重複以上結構以展示特色三和特色四 -->
          <div class="flex flex-wrap items-center mb-8 max-w-4xl">
            <div class="w-full lg:w-1/2 p-4">
              <h3 class="text-2xl font-bold mb-2">投票機制</h3>
              <p>
                論壇不只可以討論公共議題，論壇本身也是公共議題的一部分。透過論壇內部投票機制，用戶可以決定論壇的開發方向。
              </p>
            </div>
            <div class="w-full lg:w-1/2 p-4">
              <img
                src="https://picsum.photos/500/300?random=3"
                alt="特色一"
                class="rounded-lg"
              />
            </div>
          </div>
          <div class="flex flex-wrap items-center mb-8 max-w-4xl">
            <div class="w-full lg:w-1/2 p-4 lg:order-2">
              <h3 class="text-2xl font-bold mb-2">隱私安全並杜絕機器人</h3>
              <p>
                AI
                是一把雙面刃，我們需要小心防止機器人進入而破壞論壇的討論環境。因此，針對每個加入的用戶，我們都必須確保真人註冊。但同時，論壇保證絕不儲存用戶的個人資料，只使用加密後的密碼來進行用戶驗證。
              </p>
            </div>
            <div class="w-full lg:w-1/2 p-4 lg:order-1">
              <img
                src="https://picsum.photos/500/300?random=4"
                alt="特色二"
                class="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第五區塊：鼓勵用戶加入 -->
    <section id="call-to-action" class="py-16 bg-blue-500 text-white">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4">加入我們</h2>
        <p class="text-xl mb-8">我們致力於創造創新的解決方案，改變世界。</p>
        <p class="mb-8">成為我們的一部分，一起實現這個目標。</p>
        <button class="bg-white text-blue-500 font-bold py-2 px-4 rounded-lg">
          現在就加入
        </button>
      </div>
    </section>

    <!-- 第六區塊：用戶資料輸入表單 -->
    <section id="user-form" class="py-16 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">填寫資料</h2>
        <div class="max-w-md mx-auto">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                名字
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="您的名字"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                電子郵件
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="您的電子郵件"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                留言
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="您的留言"
              ></textarea>
            </div>
            <div class="flex items-center justify-center">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                提交
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <footer class="bg-gray-800 text-white p-4 text-center">
      版權所有 © TaiwanPeopleForum 2024
    </footer>
  </div>
</template>

<style>
@media (max-width: 768px) {
  nav .container {
    flex-direction: column;
  }
  nav .block {
    width: 100%;
  }
  nav a {
    text-align: center;
    padding: 10px 0;
    display: block;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>

<script setup>
definePageMeta({
  layout: false,
});

const navOpen = ref(false);
function toggleNav() {
  navOpen.value = !navOpen.value;
}
</script>
