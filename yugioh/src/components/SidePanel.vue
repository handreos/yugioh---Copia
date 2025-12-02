<template>
  <div class="side-panel">
    <!-- Máquina -->
    <div class="char-box">
      <div class="char-label">Máquina</div>
      <img src="/imagens/kaiba.png" class="char-img" />
      <div class="life-bar">
        <div class="life-fill" :style="{ width: hpPercent(enemyLife) + '%' }"></div>
      </div>
      <div class="life-text">{{ enemyLife }} LP</div>
    </div>

    <!-- Jogador -->
    <div class="char-box">
      <div class="char-label">Jogador</div>
      <img src="/imagens/yugi.png" class="char-img" />
      <div class="life-bar">
        <div class="life-fill" :style="{ width: hpPercent(playerLife) + '%' }"></div>
      </div>
      <div class="life-text">{{ playerLife }} LP</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  playerLife: Number,
  enemyLife: Number,
  hpPercent: Function
});
</script>

<style scoped>
.side-panel {
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.char-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.char-img {
  width: 300px;
  height: 300px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}

.life-bar {
  width: 140px;
  height: 20px;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid white;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 8px;
}

.life-fill {
  height: 100%;
  background: linear-gradient(to right, #00ff00, #3aff3a);
  transition: width 0.4s ease-in-out;
}

.life-text {
  margin-top: 5px;
  font-weight: bold;
  color: white;
  text-shadow: 0px 0px 4px black;
}

.side-title {
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: white;
  text-shadow: 0 0 6px black;
}

.char-label {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
  color: #ffe7a1;
  text-shadow: 0 0 4px black;
}
</style>
