/* в этот файл добавляет скрипты*/

let BurgerHeader = document.querySelector(".page-header__toggle");

let HeaderMenu =  document.querySelector(".suite-list");

if (BurgerHeader) {
  BurgerHeader.addEventListener("click", function() {
    BurgerHeader.classList.toggle("page-header__toggle--close");
    BurgerHeader.classList.toggle("page-header__toggle--open");
    HeaderMenu.classList.toggle("open");
  })
}

// if (navToggle) {
//   navToggle.classList.remove("main-nav__toggle--hidden");
//   mainNav.classList.add("main-nav--closed");
//   navToggle.addEventListener("click", function() {
//       mainNav.classList.toggle("main-nav--opened");
//       mainNav.classList.toggle("main-nav--closed");
//   })
// }






// else {
//     BurgerHeader.classList.remove("page-header__toggle--open");
//     BurgerHeader.classList.toggle("page-header__toggle--close");

// };



