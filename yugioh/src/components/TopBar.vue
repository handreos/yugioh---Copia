<template>
  <div class="top-bar">
    <div>Rodada: {{ currentRound }} / 5</div>

    <div class="duel-score">
      <span class="p1">Jogador </span>
      <span class="score-number">{{ playerScore }}</span>

      <span class="x">X</span>

      <span class="score-number">{{ enemyScore }}</span>
      <span class="p2"> Máquina</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentRound: Number,
  playerScore: Number,
  enemyScore: Number
});
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  font-weight: bold;
}

.duel-score {
  display: flex;
  align-items: center;
  gap: 5px;
}

.score-number {
  font-weight: bold;
}

.p1, .p2, .x {
  font-weight: bold;
}
</style>
