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
    }
})

function NumberGuessGame(){
    const randomNumber = Math.floor(Math.random()*100)+1;
    let message = document.createElement("p");
    let input = document.createElement("input");
    input.type = "number"
    let button = document.createElement("button");
    input.max = 100;
    input.min = 0;
    input.placeholder = "好きな数字を入力してください(1-100)"
    button.textContent = "予想"
    button.addEventListener("click", function(){
        const userGuess = parseInt(input.value);
        if(userGuess === randomNumber){
            message.textContent = "正解!"
        }
        else if(userGuess > randomNumber){
            message.textContent = "値が高いよ!"
        }
        else{
            message.textContent = "値が低いよ!"
        }
    })
    
    gameContainer.appendChild(input);
    gameContainer.appendChild(button);
    gameContainer.appendChild(message);
}

function ClickCounterGame(){
        let count = 0;
        
    //const gameContainer = document.getElementById("game-containar");

    let button1 = document.createElement("button");
    button1.textContent="＋１ボタン";

    let button2 = document.createElement("button");
    button2.textContent="+10ボタン";

    let button3 = document.createElement("button");
    button3.textContent="+ボタン";

    let counter = document.createElement("p");
    counter.textContent = count;

    button1.addEventListener("click",function(){
        count++;
        counter.textContent = count;
    })

    button2.addEventListener("click",function(){
        count= count + 10;
        counter.textContent = count;
    })

    button3.addEventListener("click",function(){
        count= count + count * count;
        counter.textContent = count;
    })

    gameContainer.appendChild(button1);
    gameContainer.appendChild(button2);
    gameContainer.appendChild(button3);
    gameContainer.appendChild(counter);
}