<template>
  <div class="next-round" v-if="roundResolved">
    <div class="message">{{ message }}</div>
    <button class="next" @click="$emit('next-round')">Próxima Rodada</button>
  </div>
</template>

<script setup>
const props = defineProps({
  roundResolved: Boolean,
  message: String
});
</script>

<style scoped>
.next-round {
  margin-top: 20px;
  text-align: center;
}

button.next {
  background-color: #4dff88;
  color: black;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

button.next:hover {
  opacity: 0.85;
}
</style>
