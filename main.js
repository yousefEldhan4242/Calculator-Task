const btnsContainer = document.querySelector(".buttons");
const btns = document.querySelectorAll("span");
const value = document.getElementById("value");
const body = document.querySelector("body");
const toggleBtn = document.querySelector(".toggle-btn");
body.className = localStorage.getItem("mode") || "";

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    if (this.innerHTML == "=") {
      value.innerHTML = eval(value.innerHTML);
    } else {
      if (this.innerHTML == "C") {
        value.innerHTML = "";
      } else {
        value.innerHTML += this.innerHTML;
      }
    }
    if (value.innerHTML == "Infinity") {
      value.innerHTML = "Cannot / by 0";
    }
  });
}
