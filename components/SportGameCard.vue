<script setup lang="ts">

interface Props {
  title: string
  description: string
  imageUrl: string
  buttonText: string
}

// TODO: Fix this
const props = defineProps<Props>()

</script>

<template>
  <div class="game-card">
    <img :src="imageUrl" :alt="title" class="game-image">
    <div class="game-info">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <button class="game-button">{{ buttonText }}</button>
    </div>
  </div>
</template>

<style scoped>
.game-card {
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.game-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.game-info {
  padding: 16px;
}

h2 {
  margin: 0 0 8px;
  font-size: 18px;
}

p {
  margin: 0 0 16px;
  font-size: 14px;
}

.game-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.game-button:hover {
  background-color: #0056b3;
}
</style>