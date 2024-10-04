//クリックされたら動作する
function errorInput(){
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;

    if(month<1 || month>12){
        alert("適切な値ではありません");
        return
    }

    console.log("month:", month, "day:", day)

}



//document.getElementById("month")はタグを確認するだけ
//valueはそのタグの値を示す


/* 
javascriptのプログラムとHTMLファイルはどこで対応しているか
タグについているIDで紐づく
タグの中にある付加情報のことを属性という
console.log()はc言語でいうところのprintf()です
*/