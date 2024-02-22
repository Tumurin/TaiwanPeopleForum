import useAuth from "~/composables/useAuth"

export default defineNuxtPlugin(async function (n) {
    if (process.server) console.log("plugins server 端執行 autoAuth")

    if (process.client) {
        console.log("plugins client端執行 autoAuth")

        const { initAuth } = useAuth()
        try {
            // 自動登入
            const result = await initAuth()
            console.log("自動登入結果：", result)
            await navigateTo("/")
        }
        catch (e) { console.log(e) }
    }
});
