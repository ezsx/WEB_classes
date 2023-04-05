const fruits = ['🍎', '🍌', '🍇', '🍊', '🍋', '🍒', '🍓'];
const slots = document.querySelectorAll('.slot');
const spinButton = document.getElementById('spin');
const balanceInput = document.getElementById('balance');
const betInput = document.getElementById('bet');
const message = document.getElementById('message');

function spin() {
    const bet = parseInt(betInput.value);
    const balance = parseInt(balanceInput.value);

    if (balance < bet) {
        message.textContent = "Not enough balance!";
        return;
    }

    balanceInput.value = balance - bet;

    for (let slot of slots) {
        const randomFruitIndex = Math.floor(Math.random() * fruits.length);
        slot.textContent = fruits[randomFruitIndex];
    }

    const mainRowSlots = document.querySelectorAll('.main-row .slot');
    const uniqueFruits = new Set(Array.from(mainRowSlots).map(slot => slot.textContent));

    if (uniqueFruits.size === 1) {
        const winAmount = bet * 5;
        balanceInput.value = parseInt(balanceInput.value) + winAmount;
        message.textContent = `You won ${winAmount}!`;
    } else {
        message.textContent = "You lost!";
    }
}

spinButton.addEventListener('click', spin);

// Initialize the slot machine
for (let slot of slots) {
    const randomFruitIndex = Math.floor(Math.random() * fruits.length);
    slot.textContent = fruits[randomFruitIndex];
}

// Add rotation animation
const rotateSlots = () => {
    const maxRotations = 10;

    const updateSlotPosition = (slotIndex, rotationCount) => {
        const slot = slots[slotIndex];

        // Generate a new random fruit for the slot
        const randomFruitIndex = Math.floor(Math.random() * fruits.length);
        slot.textContent = fruits[randomFruitIndex];

        // Rotate the slot again if it has not reached the maximum rotation count
        if (rotationCount < maxRotations) {
            setTimeout(() => updateSlotPosition(slotIndex, rotationCount + 1), 50);
        }
    };

    // Start scrolling effect
    for (let columnIndex = 0; columnIndex < 5; columnIndex++) {
        for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
            const slotIndex = rowIndex * 5 + columnIndex;
            const delay = (4 - columnIndex) * 500;

            if (columnIndex === 4 || slotIndex % 5 <= columnIndex) {
                setTimeout(() => updateSlotPosition(slotIndex, 0), delay);
            }
        }
    }
};









spinButton.addEventListener('click', rotateSlots);
