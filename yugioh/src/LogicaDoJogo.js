import { ref } from 'vue';
import { hpPercent, shuffleDeck, calculateDuel } from '@/FuncoesDoJogo.js';

export function useGame() {
    const fullDeck = [
        { name: 'Dragão De Alexandrita', image: 'imagens/alexandrita.png', atk: 2000, def: 100 },
        { name: 'Aviário, o HERÓI do Elemento', image: 'imagens/aviário.png', atk: 1000, def: 1000 },
        { name: 'Digitron', image: 'imagens/ciberso.png', atk: 1500, def: 0 },
        { name: 'Dragão Filhote', image: 'imagens/dragão bebe.png', atk: 1200, def: 700 },
        { name: 'Dragão Branco de Olhos Azuis', image: 'imagens/Dragão Branco.png', atk: 3000, def: 2500 },
        { name: 'Fairy Dragon', image: 'imagens/dragão fada.png', atk: 1100, def: 1200 },
        { name: 'Dragão Negro de Olhos Vermelhos', image: 'imagens/dragão negro.png', atk: 2400, def: 2000 },
        { name: 'Dragão Rastejante #2', image: 'imagens/dragao rasteijante dois.png', atk: 1600, def: 1200 },
        { name: 'Dragão Rastejante', image: 'imagens/dragao rasteijante.png', atk: 1600, def: 1400 },
        { name: 'Elfo Ancião', image: 'imagens/elfo.png', atk: 1450, def: 1200 },
        { name: 'Elfos Gêmeos', image: 'imagens/elfos.png', atk: 1900, def: 900 },
        { name: 'Gazelle, O Rei das Bestas Místicas', image: 'imagens/gazelle.png', atk: 1500, def: 1200 },
        { name: 'Lady Harpia', image: 'imagens/harpia.png', atk: 1300, def: 1400 },
        { name: 'Dragão-Guarda, Justícia', image: 'imagens/justicia.png', atk: 0, def: 2100 },
        { name: 'X-Saber Anu Piranha', image: 'imagens/xsaber.png', atk: 1800, def: 1100 },
        { name: 'Mago Negro', image: 'imagens/mago negro.png', atk: 2500, def: 2100 },
        { name: 'Rainha Cosmos', image: 'imagens/rainha cosmos.png', atk: 2900, def: 2450 },
        { name: 'Rei Rex de Duas Cabeças', image: 'imagens/rei rex.png', atk: 1600, def: 1200 },
        { name: 'Camareiro dos Seis Samurai', image: 'imagens/six.png', atk: 200, def: 2000 },
        { name: 'O Cavaleiro do Valete', image: 'imagens/valete.png', atk: 1900, def: 1000 },
    ];

    const playerDeck = ref([...fullDeck]);
    const enemyDeck = ref([...fullDeck]);
    const playerHand = ref([]);
    const enemyHand = ref([]);
    const playerCard = ref(null);
    const enemyCard = ref(null);
    const playerGraveyard = ref([]);
    const enemyGraveyard = ref([]);
    const selectedCard = ref(null);
    const roundResolved = ref(false);
    const currentRound = ref(1);
    const message = ref('');
    const playerLife = ref(4000);
    const enemyLife = ref(4000);
    const playerScore = ref(0);
    const enemyScore = ref(0);
    const duelStarted = ref(false);
    const hoverCard = ref(null);

    function resetRoundState() {
        playerCard.value = null;
        enemyCard.value = null;
        selectedCard.value = null;
        roundResolved.value = false;
        currentRound.value = 1;
        playerLife.value = 4000;
        enemyLife.value = 4000;
        playerGraveyard.value = [];
        enemyGraveyard.value = [];
        message.value = '';
    }

    function startDuel() {
        playerDeck.value = shuffleDeck(fullDeck);
        enemyDeck.value = shuffleDeck(fullDeck);
        playerHand.value = playerDeck.value.splice(0, 5);
        enemyHand.value = enemyDeck.value.splice(0, 5);
        resetRoundState();
        duelStarted.value = true;
    }

    function selectCard(card) {
        if (roundResolved.value) return;
        selectedCard.value = card;
    }

    function playCard(card, mode) {
        if (!selectedCard.value || roundResolved.value) return;

        const idx = playerHand.value.indexOf(card);
        if (idx > -1) playerHand.value.splice(idx, 1);

        playerCard.value = { ...card, mode };

        const enemyIdx = Math.floor(Math.random() * enemyHand.value.length);
        const enemySelected = enemyHand.value[enemyIdx];
        enemyHand.value.splice(enemyIdx, 1);
        enemyCard.value = { ...enemySelected, mode: 'attack' };

        resolveDuel();

        roundResolved.value = true;
        selectedCard.value = null;
    }

    function resolveDuel() {
        const { playerDmg, enemyDmg } = calculateDuel(playerCard.value, enemyCard.value);

        playerLife.value -= playerDmg;
        enemyLife.value -= enemyDmg;

        playerGraveyard.value.push(playerCard.value);
        enemyGraveyard.value.push(enemyCard.value);

        message.value = `Você causou ${enemyDmg} de dano e recebeu ${playerDmg} de dano`;
    }

    function nextRound() {
        playerCard.value = null;
        enemyCard.value = null;
        roundResolved.value = false;
        currentRound.value += 1;

        if (currentRound.value > 5) {
            if (playerLife.value > enemyLife.value) playerScore.value += 1;
            else if (playerLife.value < enemyLife.value) enemyScore.value += 1;

            if (playerDeck.value.length >= 5 && enemyDeck.value.length >= 5) {
                playerHand.value = playerDeck.value.splice(0, 5);
                enemyHand.value = enemyDeck.value.splice(0, 5);
                currentRound.value = 1;
                playerLife.value = 4000;
                enemyLife.value = 4000;
                playerGraveyard.value = [];
                enemyGraveyard.value = [];
                message.value = `Nova mão distribuída!`;
            } else {
                message.value = `O duelo acabou. Placar: ${playerScore.value} x ${enemyScore.value}`;
                duelStarted.value = false;
            }
        }
    }

    return {
        playerDeck, enemyDeck, playerHand, enemyHand,
        playerCard, enemyCard, playerGraveyard, enemyGraveyard,
        selectedCard, roundResolved, currentRound, message,
        playerLife, enemyLife, playerScore, enemyScore,
        duelStarted, hoverCard,
        hpPercent, startDuel, selectCard, playCard, resolveDuel, nextRound
    };
}
