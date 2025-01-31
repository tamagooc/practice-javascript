const gameContainer = document.getElementById("game-container");
const gameSelector = document.getElementById('game-select');

if (gameContainer && gameSelector) {
    gameSelector.addEventListener('change', function(){
        gameContainer.innerHTML = '';
        switch (gameSelector.value){
            case 'number-guess':
                startNumberGuessGame();
                break;
            case 'clicker':
                ClickCounterGame();
                break;
        }
    });
} else {
    console.error("aa");
}

function ClickCounterGame(){
    let count = 0;
    const gameContainer = document.getElementById("game-container");

    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");

    button1.textContent = "+1ボタン";
    button2.textContent = "+10ボタン";
    button3.textContent = "リセットボタン";

    let counter = document.createElement("p");
    counter.textContent = count;



    button1.addEventListener("click",function(){
        if(count < 100){
        count++;
        counter.textContent = count;
        }
    })
    
    button2.addEventListener("click",function(){
        if(count <= 90){
        count += 10;
        counter.textContent = count;
        }
    })

    button3.addEventListener("click",function(){
        count = 0;
        counter.textContent = count;
    })

    gameContainer.appendChild(button1);
    gameContainer.appendChild(button2);
    gameContainer.appendChild(button3);
    gameContainer.appendChild(counter);

}
// ClickCounterGame();

function startNumberGuessGame(){
    const gameContainer = document.getElementById("game-container");
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let message = document.createElement("p");
    let input = document.createElement("input");
    input.type = "number";
    input.placeholder = "好きな数字を入力してください (1-100)";
    message.textContent = randomNumber;
    gameContainer.appendChild(input);
    gameContainer.appendChild(message);

    let button = document.createElement("button");
    button.textContent = "確認"

    let a = 0

    button.addEventListener("click",function(){
        a++
        const val = parseInt(input.value)
        if (randomNumber == val){
            message.textContent = "正解"+ "　　　試行回数:" + a //countDisplay.textContent = `試行回数: $(count)`;
        }else{
            if (randomNumber < val){
                message.textContent = "大きい" + "　　　試行回数:" + a
            }
            else{
                message.textContent ="小さい" + "　　　試行回数:" + a
            }
        }
    })
    gameContainer.appendChild(button);
}
// startNumberGuessGame()
