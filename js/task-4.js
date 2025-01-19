const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const { email, password } = e.target.elements;

  const emailUser = email.value.trim();
  const passwordUser = password.value.trim();

  if (!emailUser || !passwordUser) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailUser,
    password: passwordUser,
  };

  console.log(formData);
  form.reset();
}

const labels = document.querySelectorAll(
  ".login-form label"
);
labels.forEach((label) => {
  label.classList.add("label-name");
});

const button = document.querySelector("button");
button.classList.add("form-btn");
