function getComputerChoice() {
    let rock = 1;
    let paper = 2;
    let scissors = 3;
    let result = Math.floor(Math.random() * 3) + 1;
    if (result === rock) {
        rock = "камень";
        return rock;
    } else if (result === paper) {
        paper = "ножницы";
        return paper;
    } else {
        scissors = "бумага";
        return scissors;
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "камень" && computerSelection === "ножницы" 
    || playerSelection === "ножницы" && computerSelection === "бумага" 
    || playerSelection === "бумага" && computerSelection === "камень") {
        return true;
    } else if (playerSelection === computerSelection) {
        return "Ничья";
    } else {
        return false;
    }
}


function game() {
    let countPlayer = 0;
    let countComputer = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Введите слово "камень", "ножницы" или "бумага"', "");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result === true) {
            console.log(`${playerSelection} победил ${computerSelection}`);
            countPlayer++;
        } else if (result === false) {
            console.log(`${computerSelection} победил ${playerSelection}`);
            countComputer++;
        } else {
            console.log("Ничья");
        }
    }
    if (countPlayer > countComputer) {
        return  `Выиграл игрок! со счетом ${countPlayer} : ${countComputer}`;
    } else if (countPlayer < countComputer) {
        return `Выиграл компьютер! со счетом ${countComputer} : ${countPlayer}`;
    } else {
        return "Ничья!"
    }
}

console.log(game());
