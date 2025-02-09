<script setup>
const imageUrl = ref("")

const getCatImage = async () => {
  imageUrl.value = await window.electron.fetchCat()
}
</script>

<template>
  <div class="container">
    <h1>🐱ランダム猫画像アプリ</h1>
    <div style="margin-bottom: 20px;">
      <button @click="getCatImage">🐱画像を取得</button>
    </div>
    <div class="cat-image">
      <img v-if="imageUrl" :src="imageUrl" />
    </div>
    <div style="margin-top: 20px;">
      <button @click="$router.push('/about')">Aboutへ移動</button>
    </div>
  </div>
</template>


<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
}

.cat-image {
  display: flex;
  width: 400px;
  height: 300px;
  border: 4px solid;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.cat-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
