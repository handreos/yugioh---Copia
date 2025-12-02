<template>
  <div class="start-duel" v-if="!duelStarted">
    <button class="start" @click="$emit('start-duel')">Iniciar Duelo</button>
  </div>
</template>

<script setup>
const props = defineProps({
  duelStarted: Boolean
});
</script>

<style scoped>
.start-duel {
  margin-top: 20px;
  text-align: center;
}

button.start {
  background-color: #ff4d4d;
  color: white;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

button.start:hover {
  opacity: 0.85;
}
</style>
