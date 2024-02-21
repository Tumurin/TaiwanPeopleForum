import { jwtDecode } from "jwt-decode"
import useFetchWithToken from "./useFetchWithToken"

export default () => {
    const isLogined = () => computed(() => {
        const user = useAuthUser();
        console.log("調用composable", user);
        if (user.value) return true;
        else return false;
    })

    const setToken = (newToken) => {
        const authToken = useAuthToken()
        authToken.value = newToken
    }

    const setUser = (newUser) => {
        const authUser = useAuthUser();
        authUser.value = newUser
    }

    const setIsAuthLoading = (value) => {
        const authLoading = useAuthLoading()
        authLoading.value = value
    }

    const login = ({ account, password }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('/api/auth/login', {
                    method: 'POST',
                    body: {
                        account,
                        password
                    }
                })

                console.log(data);

                setToken(data.access_token)
                setUser(data.user)

                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const logout = () => {
        console.log("[useAuth] 登出")
        return new Promise(async (resolve, reject) => {
            try {
                await useFetchWithToken('/api/auth/logout', {
                    method: 'POST'
                })

                setToken(null)
                setUser(null)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    /** 刷新 access token */
    const refreshToken = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('/api/auth/refresh')

                setToken(data.access_token)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const getUser = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await useFetchWithToken('/api/auth/user')

                setUser(data.user)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const reRefreshAccessToken = () => {
        const authToken = useAuthToken()

        if (!authToken.value) {
            return
        }

        const jwt = jwtDecode(authToken.value)

        const newRefreshTime = jwt.exp - 60000

        setTimeout(async () => {
            await refreshToken()
            reRefreshAccessToken()
        }, newRefreshTime);
    }

    const initAuth = () => {
        return new Promise(async (resolve, reject) => {
            console.log("初始登入流程開始");
            setIsAuthLoading(true)
            console.log("設置登入中判斷為 真");
            try {
                console.log("刷新 access token");
                await refreshToken()
                console.log("獲取 用戶資料");
                await getUser()
                console.log("定時自動獲取 access token");
                reRefreshAccessToken()
                console.log("初始登入流程結束")
                resolve(true)
            } catch (error) {
                console.log(error)
                console.log("初始登入流程報錯，錯誤內容：", error);
                reject(error)
            } finally {
                console.log("設置登入中判斷為 假")
                setIsAuthLoading(false)
            }
        })
    }

    return {
        useAuthToken,
        useAuthUser,
        useAuthLoading,
        login,
        logout,
        initAuth,
        isLogined
    }
}