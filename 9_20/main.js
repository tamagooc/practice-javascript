function changeColor(){
    document.getElementById("text").style.color = "red";
    
}

//document.getElementById("text").style.color = "red";
/* これは、ドキュメントの中の「text」というIDを
持っているタグのスタイルの色を赤にしてください。 */
let count = 0;
function increaseCount(){
    
    count++;
    document.getElementById("counter").innerText = count;
    
}

function decreaseCount(){
    
    count--;
    document.getElementById("counter").innerText = count;
    
}