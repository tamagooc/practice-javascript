function RPS(){
    const choices = ["gu", "choki", "pa", "muteki"];
    // この書き方は、配列です。ｃ言語参照

    // let select = document.createElement("select");
    // let option1 = document.createElement("option")
    // let option2 = document.createElement("option")
    // let option3 = document.createElement("option")
    // const gu = "gu"
    // option1.value = gu;
    // option1.textContent = gu;
    // select.appendChild(option1);
    // option2.value = choki;
    // option2.textContent = choki;
    // select.appendChild(option2);
    // option3.value = pa;
    // option3.textContent = pa;
    // select.appendChild(option3);
    // gameContainer.appendChild(select);

    let select = document.createElement("select");
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let image = document.createElement("img");
    image.alt = "Choice";
    image.style.width = "100px";
    image.style.height = "100px";
    image.src = "data:image/jpeg;base64,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";
    gameContainer.appendChild(image);

    //forEach 配列など複数のデータがあるもの使える。全部やる関数。
    //配列.forEach(配列の中身 => {命令})
}