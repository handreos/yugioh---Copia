<template>
    <div class="hand">
        <div class="hand-card" v-for="(card, index) in playerHand" :key="index"
            @mouseenter="$emit('update:hoverCard', card)" @mouseleave="$emit('update:hoverCard', null)"
            @click="selectCard(card)">
            <img :src="card.image" class="hand-card-img" />
            <div class="card-stats">ATK: {{ card.atk }} | DEF: {{ card.def }}</div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    playerHand: Array,
    selectCard: Function
});

const emit = defineEmits(['update:hoverCard']);
</script>

<style scoped>
.hand {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.hand-card {
  width: 100px;  /* tamanho original */
  height: 140px; /* tamanho original */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  color: black;
  padding: 5px;
  transition: transform 0.2s;
}

.hand-card:hover {
  transform: translateY(-10px);
}

.hand-card-img {
  width: 100px;
  height: 140px;
  border-radius: 8px;
  object-fit: cover;
}

.card-stats {
  display: none;
}

</style>

