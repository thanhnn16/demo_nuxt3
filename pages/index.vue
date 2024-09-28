<script setup lang="ts">
import { ref, onMounted } from '#imports'

interface Game {
  id: number
  title: string
  description: string
  imageUrl: string
  buttonText: string
}

const games = ref<Game[]>([
  {
    id: 1,
    title: 'AI Sports',
    description: 'Nắm bắt kịp thời các xu hướng giao dịch, các sự kiện nóng bỏng và thống kê thể thao',
    imageUrl: 'https://picsum.photos/200/300',
    buttonText: 'Nhập game'
  },
  {
    id: 2,
    title: 'Pan Asian Gaming',
    description: 'Cung cấp độc quyền phân tích sự kiện và thống tin đội',
    imageUrl: 'https://picsum.photos/200/300',
    buttonText: 'Nhập game'
  },
  {
    id: 3,
    title: 'FB Sports',
    description: 'Nền tảng thể thao di động tốt nhất. Đa dạng các loại hình cá độ, xóc đĩa bóng lăn',
    imageUrl: 'https://picsum.photos/200/300',
    buttonText: 'Nhập game'
  },
  {
    id: 4,
    title: 'Bóng đá Châu Âu',
    description: 'Trực tiếp các giải đấu hàng đầu: Premier League, La Liga, Serie A',
    imageUrl: 'https://picsum.photos/200/300',
    buttonText: 'Xem ngay'
  },
  {
    id: 5,
    title: 'Bóng rổ NBA',
    description: 'Theo dõi các trận đấu NBA hấp dẫn và đặt cược trực tuyến',
    imageUrl: 'https://picsum.photos/200/300',
    buttonText: 'Tham gia'
  },
  {
    id: 6,
    title: 'Quần vợt Grand Slam',
    description: 'Cập nhật tin tức và tỷ lệ cược cho các giải Grand Slam',
    imageUrl: 'https://picsum.photos/200/300',
    buttonText: 'Khám phá'
  },
  {
    id: 7,
    title: 'Đua xe F1',
    description: 'Trải nghiệm tốc độ với các cuộc đua Formula 1 hàng đầu thế giới',
    imageUrl: 'https://picsum.photos/200/300',
    buttonText: 'Bắt đầu'
  },
  {
    id: 8,
    title: 'Bóng chày MLB',
    description: 'Theo dõi giải bóng chày Mỹ MLB và đặt cược trực tuyến',
    imageUrl: 'https://picsum.photos/200/300',
    buttonText: 'Tham gia ngay'
  },
  {
    id: 9,
    title: 'Bóng đá Việt Nam',
    description: 'Cập nhật tin tức và tỷ lệ cược cho V-League và đội tuyển quốc gia',
    imageUrl: 'https://picsum.photos/200/300',
    buttonText: 'Ủng hộ'
  },
  {
    id: 10,
    title: 'E-Sports',
    description: 'Đặt cược vào các giải đấu game điện tử lớn nhất thế giới',
    imageUrl: 'https://picsum.photos/200/300',
    buttonText: 'Tham gia'
  },
  {
    id: 11,
    title: 'Boxing & MMA',
    description: 'Theo dõi và đặt cược cho các trận đấu quyền anh và võ tổng hợp',
    imageUrl: 'https://picsum.photos/200/300',
    buttonText: 'Xem lịch đấu'
  },
  {
    id: 12,
    title: 'Đua ngựa',
    description: 'Trải nghiệm cảm giác hồi hộp với các cuộc đua ngựa hàng đầu',
    imageUrl: 'https://picsum.photos/200/300',
    buttonText: 'Đặt cược ngay'
  }
])

const fetchGames = async () => {
  try {
    const response = await fetch('https://api.example.com/games')
    const data = await response.json()
    games.value = data.slice(0, 12)
  } catch (error) {
    console.error('Lỗi khi tải dữ liệu game:', error)
  }
}

onMounted(fetchGames)
</script>

<template>
  <div class="home-page">
    <h1>Danh sách Game</h1>
    <div class="game-grid">
      <SportGameCard v-for="game in games" :key="game.id" :title="game.title" :description="game.description"
        :imageUrl="game.imageUrl" :buttonText="game.buttonText" />
    </div>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>