<template>
  <SidePanel :playerLife="playerLife" :enemyLife="enemyLife" :hpPercent="hpPercent" />

  <div class="board">

    <TopBar :currentRound="currentRound" :playerScore="playerScore" :enemyScore="enemyScore" />

    <Field :playerCard="playerCard" :enemyCard="enemyCard" :hoverCard="hoverCard"
      @update:hoverCard="hoverCard = $event" />

    <Hand :playerHand="playerHand" :hoverCard="hoverCard" :selectCard="selectCard"
      @update:hoverCard="hoverCard = $event" />

    <Actions :selectedCard="selectedCard" :roundResolved="roundResolved" :playCard="playCard" />

    <Graveyards :playerGraveyard="playerGraveyard" :enemyGraveyard="enemyGraveyard" />

    <StartDuel :duelStarted="duelStarted" @start-duel="startDuel" />

    <NextRound :roundResolved="roundResolved" :message="message" @next-round="nextRound" />

    <CardPreview :card="hoverCard" />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import SidePanel from './SidePanel.vue';
import TopBar from './TopBar.vue';
import Field from './Field.vue';
import Hand from './Hand.vue';
import Actions from './Actions.vue';
import Graveyards from './Graveyards.vue';
import CardPreview from './CardPreview.vue';
import StartDuel from './StartDuel.vue';
import NextRound from './NextRound.vue';
import { useGame } from '@/LogicaDoJogo.js';

const {
  playerHand, playerCard, enemyCard, playerGraveyard, enemyGraveyard,
  selectedCard, roundResolved, currentRound, message,
  playerLife, enemyLife, playerScore, enemyScore,
  duelStarted, hoverCard,
  hpPercent, startDuel, selectCard, playCard, nextRound
} = useGame();
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-image: url('./imagens/carta yugioh.png');
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.board {
  position: relative;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.6);
  padding: 100px;
  border-radius: 10px;
  max-width: 900px;
  width: 90%;
  min-height: 750px;
}
</style>

