import { jwtDecode } from "jwt-decode"
import useFetchWithToken from "./useFetchWithToken"

export default () => {
    const useAuthToken = () => useState('auth_token')
    const useAuthUser = () => useState('auth_user')
    const useAuthLoading = () => useState('auth_loading', () => true)

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
            const data = await $fetch('/api/auth/login', {
                method: 'POST',
                body: {
                    account,
                    password
                }
            }).catch((error) => {
                console.log(error)
                reject(error)
            })

            console.log(data);

            setToken(data.access_token)
            setUser(data.user)

            resolve(true)
        })
    }

    const logout = () => {
        return new Promise(async (resolve, reject) => {
            try {
                await useFetchWithToken('/api/auth/logout', {
                    method: 'POST'
                })

                setToken(null)
                setUser(null)
                resolve()
            } catch (error) {
                reject(error)
            }
        })
    }

    /** 刷新 access token */
    const refreshToken = () => {
        return new Promise(async (resolve, reject) => {
            const data = await $fetch('/api/auth/refresh').catch((error) => {
                console.log(error)
                reject(error)
            });
            if (data) setToken(data.access_token)
            resolve(true)
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

    const initAuth = () => {
        return new Promise(async (resolve, reject) => {
            setIsAuthLoading(true)
            try {
                await refreshToken()
                await getUser()

                reRefreshAccessToken()

                resolve(true)
            } catch (error) {
                console.log(error)
                reject(error)
            } finally {
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
        initAuth
    }
}