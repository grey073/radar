const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
let scale = 1;

noBtn.addEventListener("click", () => {
  const x = Math.floor(Math.random() * 80); // 0% to 80%
  const y = Math.floor(Math.random() * 80); // 0% to 80%

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}vw`;
  noBtn.style.top = `${y}vh`;
  scale += 1.3;

  yesBtn.style.transform = `scale(${scale})`;
  yesBtn.style.transition = "transform 0.3s ease";

});
function yes(){
   document.body.innerHTML = `
    <div style="text-align:center; margin-top: 100px;">
      <h1 style="font-size: 48px;">🌈 You said YES! 🌈</h1>
      <p style="font-size: 24px;">Welcome to the fabulous side 😎✨</p>
      <img src="gay.gif" alt="celebration" width="300">
    </div>
  `;
}
