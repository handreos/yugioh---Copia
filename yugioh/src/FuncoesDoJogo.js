export function hpPercent(value) {
    return Math.max(0, (value / 4000) * 100);
}

export function shuffleDeck(deck) {
    return deck.slice().sort(() => Math.random() - 0.5);
}

export function calculateDuel(playerCard, enemyCard) {
    let playerDmg = 0, enemyDmg = 0;

    if (!playerCard || !enemyCard) return { playerDmg, enemyDmg };

    if (playerCard.mode === 'attack') {
        if (enemyCard.mode === 'attack') {
            if (playerCard.atk > enemyCard.atk) enemyDmg = playerCard.atk - enemyCard.atk;
            else if (playerCard.atk < enemyCard.atk) playerDmg = enemyCard.atk - playerCard.atk;
        } else if (enemyCard.mode === 'defense') {
            if (playerCard.atk < enemyCard.def) playerDmg = enemyCard.def - playerCard.atk;
        }
    } else if (playerCard.mode === 'defense') {
        if (enemyCard.mode === 'attack' && enemyCard.atk < playerCard.def) {
            enemyDmg = playerCard.def - enemyCard.atk;
        }
    }

    return { playerDmg, enemyDmg };
}

