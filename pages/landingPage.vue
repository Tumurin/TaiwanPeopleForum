<template>
  <div>
    <!-- 導覽列 -->
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
          <a href="#features" class="px-4 py-2 block hover:text-gray-300">核心宗旨</a>
          <a href="#experience" class="px-4 py-2 block hover:text-gray-300">使用體驗</a>
          <a href="#core" class="px-4 py-2 block hover:text-gray-300">核心機制</a>
          <a href="#join" class="px-4 py-2 block hover:text-gray-300">我需要你！</a>
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
          <p class="mb-2">
            共有論壇計畫希望透過 AI 技術，打造一個屬於台灣人的公共政策討論平台。
          </p>
          <p class="mb-4">
            利用 AI 強大的文字分析功能，將公共議題彙總，讓議題討論變得簡單高效。
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
        <h2 class="text-3xl font-bold mb-8">一個值得台灣人共有的論壇</h2>
        <div class="flex flex-wrap justify-center">
          <!-- 單個功能介紹 -->
          <div class="w-full sm:w-1/3 px-8 mb-8">
            <img
              src="https://picsum.photos/200"
              alt="功能1"
              class="rounded-full w-80 mx-auto mb-4"
            />
            <h3 class="text-xl font-bold mb-2">公開透明的平台</h3>
            <p class="text-start">
              共有，就是要讓所有台灣人共同享有這個平台，不僅程式碼公開，平台收益也由公益社團公開。
            </p>
            <p class="text-start">
              假如您是位創作者，不必再擔心未知的演算法。來我們共同這個共有的平台，這裡對創作十分友好。
            </p>
          </div>
          <!-- 重複上述結構以展示其他功能 -->
          <div class="w-full sm:w-1/3 px-8 mb-8">
            <img
              src="https://picsum.photos/202"
              alt="功能2"
              class="rounded-full w-80 mx-auto mb-4"
            />
            <h3 class="text-xl font-bold mb-2">AI 輔助的公共議題討論</h3>
            <p class="text-start">
              來這裡討論任何議題吧！不必再到各大社群平台或群組了，不必再被訊息流淹沒了！這個論壇設計的目的就是為了解決公共議題討論分散低效的問題。透過AI強大的語意分析能力，將議題討論進行整合。各位只管盡抒己見，AI會幫你做分類，幫你找到相關議題一起討論。
            </p>
          </div>
          <div class="w-full sm:w-1/3 px-8 mb-8">
            <img
              src="https://picsum.photos/201"
              alt="功能2"
              class="rounded-full w-80 mx-auto mb-4"
            />
            <h3 class="text-xl font-bold mb-2">公益、公益、還是公益</h3>
            <p>公共議題，公開討論</p>
            <p class="text-start">
              台灣，我們一起共有的這片土地；論壇，我們一起共有的公共平台。
              正因如此，論壇的重要事務，也將交由各位論壇的用戶，一起投票決策。不僅如此，論壇的收益，也都將用在公益上面，我們不容許討論平台變成斂財工具。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 第三區塊：產品使用體驗 -->
    <section id="experience" class="py-16 bg-gray-100">
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
    <section id="core" class="py-16">
      <h2 class="text-3xl font-bold text-center mb-8">所以，要怎麼做？</h2>
      <div class="container mx-auto">
        <!-- 每個特色的容器應該保持一致的寬度，並在中間對齊 -->
        <div class="flex flex-wrap justify-center">
          <!-- 特色一：左邊文字，右邊圖片 -->
          <div class="flex flex-wrap items-center mb-8 max-w-4xl">
            <div class="w-full lg:w-1/2 p-4">
              <h3 class="text-2xl font-bold mb-2">AI大語言模型</h3>
              <p>
                AI語言模型最強大之處，便是針對自然語言的文字分析能力。我們可以透過AI技術來將內容分類，讓用戶可以輕鬆關注公共議題的討論。當訊息量增加時，AI也能將文字進行總結整理，讓用戶快速跟上討論進度，大大增進公共議題討論的效率。更棒的是，因為是根據可靠的輸入內容，AI不會瞎掰，總結的內容都讓你有跡可循。
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
              <h3 class="text-2xl font-bold mb-2">公益社團</h3>
              <p>
                公共議題的討論，有人聚集的地方，就會產生價值。要避免公共議題討論產生的公益價值落入有心人士手中，我們要成立公益社團，透過公開透明的機制，讓公共價值回饋公眾。
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
                民主的真諦，在於眾人之事能夠交付眾人決定。論壇不只可以討論公共議題，論壇本身也是公共議題的一部分。論壇的營運會透過公開透明的圖表與數據，讓用戶共同參與決策。
              </p>
            </div>
            <div class="w-full lg:w-1/2 p-4">
              <img
                src="https://picsum.photos/500/300?random=3"
                alt="特色三"
                class="rounded-lg"
              />
            </div>
          </div>
          <div class="flex flex-wrap items-center mb-8 max-w-4xl">
            <div class="w-full lg:w-1/2 p-4 lg:order-2">
              <h3 class="text-2xl font-bold mb-2">杜絕假帳號</h3>
              <p>
                AI是一把雙面刃，我們需要小心防止機器人進入而破壞論壇的討論環境。因此，針對每個加入的用戶，我們要確保是真人註冊。
              </p>
            </div>
            <div class="w-full lg:w-1/2 p-4 lg:order-1">
              <img
                src="https://picsum.photos/500/300?random=4"
                alt="特色四"
                class="rounded-lg"
              />
            </div>
          </div>
          <div class="flex flex-wrap items-center mb-8 max-w-4xl">
            <div class="w-full lg:w-1/2 p-4">
              <h3 class="text-2xl font-bold mb-2">匿名且安全</h3>
              <p>
                透過加密技術，用戶可以放心安全地在論壇進行公共議題討論。但匿名不代表可以違法，針對違反法律的行為，一人只有一個的帳號將會被懲處。這也是為什麼其他平台難以管理的原因：你能想像在現實之中，有人犯法，槍斃了可以去重生點復活嗎？其他平台帳號隨便註冊，因此用戶不珍惜帳號。在此，請珍惜僅有一個的帳號。
              </p>
            </div>
            <div class="w-full lg:w-1/2 p-4">
              <img
                src="https://picsum.photos/500/300?random=5"
                alt="特色三"
                class="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第五區塊：鼓勵用戶加入 -->
    <section id="join" class="py-16 bg-blue-500 text-white">
      <div class="container mx-auto text-start">
        <h2 class="text-4xl font-bold mx-8 mb-4 text-center">加入我們</h2>
        <p class="text-xl mx-8 mb-4 text-center">一個人可以走得很快，一群人可以走得很遠</p>
        <p class="mx-8 sm:mx-16 mb-2">
          共同論壇，是一個大家一起需要長期努力持續投入才能開花結果的專案。這個專案，不僅僅是一個軟體工程，它同時涉及成立公益社團，也就需要考慮其法律與財務等諸多問題。它同時涉及：法律、會計、協會組織、社會公益......等多種多面向的知識。因此，我一個人的力量是遠遠不夠的。我需要各種各樣有心想協助論壇成立的人，一起加入。
        <ul class="mx-8 sm:mx-16 mb-8 list-disc pl-5 space-y-2">
          <li>如果您是軟體工程師。這是目前專案的 Github 連結，邀請您加入一起共同打造共有論壇。</li>
          <li>如果您是對成立協會有相關經驗的人，願意提供寶貴的經驗分享或者其他專長協助，請聯繫我。<br/>這是我的信箱：ks960037@gmail.com</li>
          <li>如果您想默默支持，願意關注論壇發展的朋友。請在下方表單留下您的聯繫方式，我將會在每個月的月底，像董事會給股東寄信那樣，定期向大家報告我們的進度。(何況我比公司的董事會還勤勞喔)</li>
        </ul>
        </p>
        <!-- 按鈕區 -->
        <div class="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/Tumurin/TaiwanPeopleForum"
            target="_blank"
            class="bg-white text-blue-500 font-bold py-2 px-4 rounded-lg"
          >
            工程師
          </a>
          <a 
            href="mailto:ks960037@gmail.com?subject=加入協會的請求&body=請在這裡寫下您的訊息。"
            target="_blank"
            class="bg-white text-blue-500 font-bold py-2 px-4 rounded-lg"
          >
            協會成員
          </a>
          <a href="#userform" class="bg-white text-blue-500 font-bold py-2 px-4 rounded-lg">
            支持者
          </a>
        </div>
      </div>
    </section>

    <!-- 第六區塊：用戶資料輸入表單 -->
    <section id="userform" class="py-16 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">填寫資料</h2>
        <div class="max-w-md mx-auto">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                暱稱
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="怎麼稱呼？"
                v-model="name"
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
                v-model="mail"
              />
            </div>
            <div class="flex items-center justify-center">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                @click="onSubmit"                
              >
                訂閱論壇發展報告
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
import SWAL from "sweetalert2";

definePageMeta({
  layout: false,
});

const navOpen = ref(false);
function toggleNav() {
  navOpen.value = !navOpen.value;
}

const name = ref("");
const mail = ref("");

async function onSubmit (){
  console.log(name,mail)
  const result = await $fetch("/api/subscribe",{
    method:"POST",
    body:{
      name:name.value,
      mail:mail.value
    }
  })
  console.log(result)
  if(result.stateCode == 1) SWAL.fire({
    icon: "success",
    toast: false,
    timerProgressBar: true,
    timer: 1000,
    title: "訂閱成功，感謝您的肯定"
  })
  if(result.stateCode == 0) SWAL.fire({
    icon: "success",
    toast: true,
    timerProgressBar: true,
    showConfirmButton: false,
    timer: 1000,
    position: "top-end",
    title: "你已訂閱，感謝支持"
  });
}
</script>
