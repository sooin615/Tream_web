const toggleBtn = document.querySelector(".navbar_toogleBtn");
const menu = document.querySelector(".navbar_menu");
const icons = document.querySelector(".navbar_icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

const input = document.querySelector(".search-box input");
const button = document.querySelector(".search-box button");

button.addEventListener("click", () => {
  const query = input.value;
  // 여기서 검색 기능을 수행합니다.
});
