<template>
  <div class="field">
   
    <div class="monster-row enemy-row">
      <div class="monster-slot" :class="{ 'defense-slot': enemyCard?.mode === 'defense' }">
        <transition name="card-fade">
          <div v-if="enemyCard" :class="['card', enemyCard.mode]" @mouseenter="$emit('update:hoverCard', enemyCard)"
            @mouseleave="$emit('update:hoverCard', null)">
            <img :src="enemyCard.image" class="card-img" />
            <div class="card-stats">ATK: {{ enemyCard.atk }} | DEF: {{ enemyCard.def }}</div>
          </div>
        </transition>
      </div>
    </div>

    <div class="monster-row player-row">
      <div class="monster-slot" :class="{ 'defense-slot': playerCard?.mode === 'defense' }">
        <transition name="card-fade">
          <div v-if="playerCard" :class="['card', playerCard.mode]" @mouseenter="$emit('update:hoverCard', playerCard)"
            @mouseleave="$emit('update:hoverCard', null)">
            <img :src="playerCard.image" class="card-img" />
            <div class="card-stats">ATK: {{ playerCard.atk }} | DEF: {{ playerCard.def }}</div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  playerCard: Object,
  enemyCard: Object,
  hoverCard: Object
});
const emit = defineEmits(['update:hoverCard']);
</script>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 380px;
  margin-bottom: 20px;
}

.monster-row {
  display: flex;
  justify-content: space-around;
}

.monster-slot {
  width: 120px;
  height: 160px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
}

.monster-slot.defense-slot {
  width: 160px;
  height: 120px;
}

.card {
  width: 100px;
  height: 140px;
  border-radius: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.card.defense {
  transform: rotate(90deg);
}

.card-img {
  width: 100px;
  height: 140px;
  border-radius: 8px;
  object-fit: cover;
}

.card-stats {
  display: none;
}

.card-fade-enter-active,
.card-fade-leave-active {
  transition: all 0.5s;
}

.card-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.card-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
