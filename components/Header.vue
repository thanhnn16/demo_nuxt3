<template>
  <div class="header-wrapper t-fixed">
    <div class="header-wrapper__top">
      <div class="top-inner">
        <div class="top-lang">
          <div class="topbar-le">
            <div class="icon-lang vi"></div>
            <div class="lang-select left el-dropdown">
              <div class="el-dropdown-selfdefine" @click="showLangOptions = !showLangOptions">
                <span>{{ currentLang }}</span>
                <span :class="['arrow', { showOption: showLangOptions }]"></span>
              </div>
              <ul v-if="showLangOptions" class="el-dropdown-menu el-popper">
                <li class="el-dropdown-menu__item" @click="changeLang('vi')">Tiếng Việt</li>
                <li class="el-dropdown-menu__item" @click="changeLang('en')">English</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="login-section" v-if="!isAuthenticated">
          <input v-model="username" placeholder="Tên đăng nhập" />
          <input v-model="password" type="password" placeholder="Mật khẩu" />
          <button @click="handleLogin" class="login-btn">Đăng nhập</button>
          <p v-if="loginError" class="error-message">{{ loginError }}</p>
        </div>
        <div v-else class="user-info">
          <span>Xin chào, {{ user?.name }}</span>
          <button @click="handleLogout" class="logout-btn">Đăng xuất</button>
        </div>
      </div>
    </div>
    <div class="header-wrapper__bottom">
      <div class="bottom-inner">
        <div class="logo">T9</div>
        <nav class="main-nav">
          <a href="#" class="nav-item active">Hot<span class="hot-label">Hot</span></a>
          <a href="#" class="nav-item">Thể Thao</a>
          <a href="#" class="nav-item">Casino</a>
          <a href="#" class="nav-item">Nổ Hũ</a>
          <a href="#" class="nav-item">Game Bài</a>
          <a href="#" class="nav-item">Bắn Cá</a>
          <a href="#" class="nav-item">Xổ Số</a>
        </nav>
        <div class="header-actions">
          <a href="#" class="action-item">
            <img
              src="data:image/png;base64,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"
              alt="Khuyến mãi" />
            Khuyến mãi
          </a>
          <a href="#" class="action-item">
            <img
              src="data:image/png;base64,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"
              alt="Hỗ Trợ" />
            Hỗ Trợ
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from '#imports'
import { useAuth } from '@/composables/useAuth'

const { user, isAuthenticated, login, logout } = useAuth()

const showLangOptions = ref(false)
const currentLang = ref('Tiếng Việt')
const username = ref('')
const password = ref('')
const loginError = ref('')

const changeLang = (lang: string) => {
  currentLang.value = lang === 'vi' ? 'Tiếng Việt' : 'English'
  showLangOptions.value = false
}

const handleLogin = async () => {
  try {
    await login({ username: username.value, password: password.value })
    loginError.value = ''
    username.value = ''
    password.value = ''
  } catch (error: any) {
    loginError.value = error.message
  }
}

const handleLogout = () => {
  logout()
}
</script>
