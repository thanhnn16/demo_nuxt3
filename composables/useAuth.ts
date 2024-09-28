import { useAuthStore } from '~/stores/auth'
import { storeToRefs } from 'pinia'

export const useAuth = () => {
    const authStore = useAuthStore()
    const { user, isAuthenticated } = storeToRefs(authStore)

    const login = async ({ username, password }: { username: string; password: string }) => {
        const result = await authStore.login(username, password)
        if (!result.success) {
            throw new Error(result.error || 'Đăng nhập thất bại')
        }
    }

    const logout = () => {
        authStore.logout()
    }

    return {
        user,
        isAuthenticated,
        login,
        logout
    }
}