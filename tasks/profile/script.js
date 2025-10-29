const intro = document.getElementById("intro");
const hobbies = ["ビール","きゅうり","ブラックコーヒー"];
let index = 0;

document.getElementById("btn").addEventListener("click",() => {
    //フェード効果をリセット
    intro.classList.remove("show");
    void intro.offsetWidth;
    intro.classList.add("show");

    //趣味テキスト更新
    intro.textContent = "趣味" + hobbies[index];
    index = (index + 1) % hobbies.length;
    // 趣味入力&表示
    let newHobby = prompt("新しい趣味を入力してね（キャンセルで既存表示）");
    if(newHobby && newHobby.trim() != ""){
        hobbies.push(newHobby);
        index = hobbies.length -1;//追加した趣味をすぐ表示
    }
    document.getElementById("intro").textContent = "趣味:" + hobbies[index];
    index = (index + 1) % hobbies.length;

    //カラーランダム切り替え
    const colors = ["#421fb6","#e5e0ff","#e0ffe0","#e0e0ff"];
    let color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;

    //挨拶時間帯による変更
    const hour = new Date().getHours();
    let greeting = "こんにちは!";
    if(hour < 12) greeting = "おはよう" ;
    else if(hour >= 18) greeting = "こんばんは！";

    //h1全てに適応
    document.querySelectorAll("h1").forEach(h1 => {
        h1.textContent = greeting + "私の自己紹介";
    });
});
//テーマ切り替え
document.getElementById("themeBtn").addEventListener("click",() =>{
    document.body.classList.toggle("dark-mode");
});
//名前入力+挨拶文
document.getElementById("themeName").addEventListener("click",() =>{
    const name = prompt("あなたの名前を入力してください");
    if(name && name.trim() !=="") {
        document.querySelector("h1").textContent = `こんにちは、${name}さん！`
    }
});