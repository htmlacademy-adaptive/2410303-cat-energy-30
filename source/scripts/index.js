/* в этот файл добавляет скрипты*/

const BurgerHeader = document.querySelector(".page-header__toggle")
const HeaderMenu =  document.querySelector(".suite-list");

if (BurgerHeader) {
  BurgerHeader.addEventListener("click", function() {
    BurgerHeader.classList.toggle("page-header__toggle--close");
    BurgerHeader.classList.toggle("page-header__toggle--open");
    HeaderMenu.classList.toggle("open");
  })
}




