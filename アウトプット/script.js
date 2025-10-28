// 配列管理
const hobbies = [];
const skills = [];
const foods = [];

// 現在選択されているカテゴリ
let currentCategory = "hobbies";

// ドロップダウン選択
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    currentCategory = e.target.dataset.value;
    document.getElementById("categoryBtn").textContent = e.target.textContent;
  });
});

// 入力欄 Enterで配列に追加
document.getElementById("userInput").addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  const text = e.target.value.trim();
  if (!text) return;

  switch (currentCategory) {
    case "hobbies":
      hobbies.push(text);
      break;
    case "skills":
      skills.push(text);
      break;
    case "foods":
      foods.push(text);
      break;
  }

  // 表示更新
  let displayText = "";
  switch (currentCategory) {
    case "hobbies":
      displayText = hobbies.join(", ");
      break;
    case "skills":
      displayText = skills.join(", ");
      break;
    case "foods":
      displayText = foods.join(", ");
      break;
  }
  document.getElementById("outputDisplay").textContent = displayText;

  // 入力欄リセット
  e.target.value = "";

  // consoleで確認用
  console.log({ hobbies, skills, foods });
});
