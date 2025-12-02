<template>
  <div v-if="card" class="card-preview">
    <img :src="card.image" class="preview-img" />
    <div class="preview-stats">
      ATK: {{ card.atk }} | DEF: {{ card.def }}
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  card: Object
});
</script>

<style scoped>
.card-preview {
  position: fixed;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  padding: 16px;
  background: linear-gradient(145deg, #2b1f0f, #3e2c13);
  border: 4px solid #d8b56e;
  border-radius: 14px;
  box-shadow:
    0 0 40px rgba(0, 0, 0, 0.8),
    0 0 15px rgba(255, 215, 130, 0.6),
    inset 0 0 8px rgba(255, 255, 255, 0.3);
  z-index: 999;

  transition: all 0.25s ease-out;
  transform-origin: center;
}

.card-preview:hover {
  transform: translateY(-50%) scale(1.05);
  box-shadow:
    0 0 50px rgba(0, 0, 0, 0.9),
    0 0 25px rgba(255, 226, 150, 0.8),
    inset 0 0 12px rgba(255, 255, 255, 0.6);
}

.preview-img {
  width: 330px;
  height: 460px;
  border-radius: 10px;
  border: 3px solid #c89e53;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
}

.preview-stats {
  margin-top: 10px;
  text-align: center;
  font-size: 22px;
  font-family: 'Times New Roman', serif;
  color: #ffe7a1;
  text-shadow: 0 0 4px black;
  letter-spacing: 1px;
}
</style>
