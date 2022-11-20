const burger = document.querySelector(".js-burger-btn");
const header = document.querySelector(".js-header");
burger.addEventListener("click", () => {
  header.classList.toggle("active");
});

const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

const inputHolder = document.getElementById("search-input");
inputHolder.addEventListener("blur", () => {
  searchForm.classList.remove("active");
});
