import "../src/styles.scss";

window.onload = () => {
  const burgerBtn = document.querySelector(".burger__btn");
  const menuMobile = document.querySelector(".menu__mobile");
  const blogBtn = document.querySelector(".blog__all");
  let blogItem = document.querySelector(".blog__row-hidden");

  showBlockItem();

  burgerBtn.onclick = function () {
    hideMenu();
  };

  menuMobile.onclick = function () {
    hideMenu();
  };

  function hideMenu() {
    const menuMobile = document.querySelector(".menu__mobile");
    menuMobile.classList.toggle("hidden");
  }

  function showBlockItem() {
    let screenWidth = window.innerWidth;

    if (screenWidth < 360) {
      blogItem.classList.add("hidden");
    }
  }

  blogBtn.onclick = function () {
    blogItem.classList.toggle("hidden");
  };
};
