const gameSelector = document.getElementById('game-selector');
const gameContainer = document.getElementById('game-containar');

gameContainer.textContent="ゲームを選ぶとここに表示されます"

gameSelector.addEventListener("change",function(){
    gameContainer.innerHTML = "";
    switch(gameSelector.value){
        case "click-counter":
            ClickCounterGame();
            break;
        case "none":
            gameContainer.textContent="ゲームを選ぶとここに表示されます"
            break;
        case "number-guess":
            NumberGuessGame();
            break;
        case "RPS":
            RPS();
            break;
    }
})
