<template>
    <div class="actions" v-if="selectedCard && !roundResolved">
        <button class="attack" @click="playCard(selectedCard, 'attack')">Ataque</button>
        <button class="defense" @click="playCard(selectedCard, 'defense')">Defesa</button>
    </div>
</template>

<script setup>

const props = defineProps({
    selectedCard: Object,
    roundResolved: Boolean,
    playCard: Function
});
</script>

<style scoped>
.actions {
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  margin: 5px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  border: none;
}

button.attack {
  background-color: #ff4d4d;
  color: white;
}

button.defense {
  background-color: #4d79ff;
  color: white;
}

button.next {
  background-color: #4dff88;
  color: black;
}

button:hover {
  opacity: 0.85;
}
</style>
