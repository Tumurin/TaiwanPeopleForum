export default () => {
    const useAuthToken = () => useState('auth_token')
    const useAuthUser = () => useState('auth_user')

    const setToken = (newToken) => {
        const authToken = useAuthToken()
        authToken.value = newToken
    }

    const setUser = (newUser) => {
        const authUser = useAuthUser();
        authUser.value = newUser
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

    /** 刷新 access token */
    const refreshToken = () => {
        return new Promise(async (resolve, reject) => {
            const data = await $fetch('/api/auth/refresh').catch((error) => {
                console.log(error)
                reject(error)
            });
            setToken(data.access_token)
            resolve(true)
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
        login,
        refreshToken,
        initAuth
    }
}