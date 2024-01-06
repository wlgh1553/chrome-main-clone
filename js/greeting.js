const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function paintGreetings() {
  userName = localStorage.getItem("username");
  greeting.innerHTML = `Hello ${userName}!!`;
  greeting.classList.remove("hidden");
}

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add("hidden");

  localStorage.setItem("username", userName);
  paintGreetings();
}

loginForm.addEventListener("submit", onLoginSubmit);

//그냥 이게 메인인가보네. 걍 다 실행하나봄
if (localStorage.getItem("username") === null) {
  loginForm.classList.remove("hidden");
} else {
  paintGreetings();
}
