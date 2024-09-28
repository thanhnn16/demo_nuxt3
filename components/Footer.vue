<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Test nuxt 3.</p>
      <nav>
        <ul>
          <li><a href="#">Trang chủ</a></li>
          <li><a href="#">Về chúng tôi</a></li>
          <li><a href="#">Dịch vụ</a></li>
          <li><a href="#">Liên hệ</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from '#imports'

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 20px 0;
  margin-top: 40px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
}
</style>