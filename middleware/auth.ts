export default defineNuxtRouteMiddleware((to, from) => {
    const authUser = useAuthUser();

    if (process.server) console.log("middleware 服務器端中間件 auth.ts");
    if (process.client) console.log("middleware 客戶端中間件 auth.ts");

    console.log("(中間件)確認登入狀態：", authUser.value);
    if (!authUser.value) {
        console.log("因為沒有登入而回到登入頁")
        // 沒有登入丟回去登入頁
        return navigateTo("./login")
    }
    console.log("前往指定頁", to.name);
});
