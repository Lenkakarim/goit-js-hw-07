function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector(".change-color").addEventListener("click", () => {
  const newBackgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = newBackgroundColor;
  document.querySelector(".color").textContent = newBackgroundColor;
});