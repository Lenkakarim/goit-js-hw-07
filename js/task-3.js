const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function updateNameOutput(value) {
  const trimmedValue = value.trim();
  nameOutput.textContent = trimmedValue || "Anonymous";
}

nameInput.addEventListener("input", (event) => {
  updateNameOutput(event.target.value);
});

const heading = document.querySelector("h1");
heading.classList.add("title-output");
