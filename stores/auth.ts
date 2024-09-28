import { defineStore } from 'pinia'
import type { User } from '~/types/auth'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as User | null,
        isAuthenticated: false,
    }),
    actions: {
        async login(username: string, password: string) {
            try {
                const response = await $fetch('/api/auth', {
                    method: 'POST',
                    body: { username, password }
                })
                if (response.user) {
                    this.user = response.user
                    this.isAuthenticated = true
                    return { success: true }
                }
                return { success: false, error: 'Không tìm thấy thông tin người dùng' }
            } catch (error: any) {
                console.error('Đăng nhập thất bại:', error)
                return { success: false, error: error.data?.message || 'Đăng nhập thất bại' }
            }
        },
        logout() {
            this.user = null
            this.isAuthenticated = false
        },
    },
})