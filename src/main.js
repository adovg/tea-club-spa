import "../src/styles.scss";

window.onload = () => {
  const burgerBtn = document.querySelector(".burger__btn");
  const menuMobile = document.querySelector(".menu__mobile");
  const blogBtn = document.querySelector(".blog__all");
  let blogItem = document.querySelector(".blog__row-hidden");

  window.addEventListener("load", () => {
    alert("Страница загружена!");
    showBlockItem();
  });

  burgerBtn.onclick = function () {
    //burgerBtn.classList.toggle("active");
    hideMenu();
  };

  menuMobile.onclick = function () {
    hideMenu();
    //burgerBtn.classList.remove("active");
  };

  function hideMenu() {
    const menuMobile = document.querySelector(".menu__mobile");
    menuMobile.classList.toggle("hidden");
  }

  function showBlockItem() {
    let screenWidth = window.innerWidth;

    if (screenWidth < 360) {
      console.log("first");
      blogItem.classList.add("hidden");
    }
  }

  showBlockItem();

  blogBtn.onclick = function () {
    blogItem.classList.toggle("hidden");
  };
};

//blog__row-hidden
