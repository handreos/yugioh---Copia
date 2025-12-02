<template>
    <div class="graveyards">
        <div>
            <h3>Cemitério Jogador</h3>
            <div v-for="(c, i) in playerGraveyard" :key="i" class="small-card">{{ c.name }}</div>
        </div>
        <div>
            <h3>Cemitério Máquina</h3>
            <div v-for="(c, i) in enemyGraveyard" :key="i" class="small-card">{{ c.name }}</div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    playerGraveyard: Array,
    enemyGraveyard: Array
});
</script>

<style scoped>
.graveyards {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.small-card {
  font-size: 10px;
  background: #eee;
  border-radius: 5px;
  margin: 2px;
  padding: 2px;
  color: black;
}

.message {
  margin-bottom: 10px;
  font-weight: bold;
}
</style>
