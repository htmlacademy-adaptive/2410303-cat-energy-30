/* в этот файл добавляет скрипты*/

// Burger Menu

const BurgerHeader = document.querySelector(".page-header__toggle")
const HeaderMenu = document.querySelector(".suite-list");

if (BurgerHeader) {
  BurgerHeader.addEventListener("click", function () {
    BurgerHeader.classList.toggle("page-header__toggle--close");
    BurgerHeader.classList.toggle("page-header__toggle--open");
    HeaderMenu.classList.toggle("open");
  })
}

//  API Карта

const shopData = {
  shop1: [{
    lat: 55.75222,
    lon: 37.61556,
    name: 'Кэт Энерджи',
    iconDefault: 'default#image',
    iconHref: 'images/map@1x.png',
    iconSize: [113, 106],
    iconOffset: [-5, -38]
  }],
};

const init = () => {
  const map = new ymaps.Map('map', {
    center: [55.753215, 37.622504],
    zoom: 14
  });

  let activeShop = 'shop1';

  const showShop = (shop) => {
    map.geoObjects.removeAll();

    shopData[shop].forEach((item) => {
      const placemark = new ymaps.Placemark([item.lat, item.lon], {
        hintContent: item.name,
        balloonContent: item.name,
      }, {
        iconLayout: item.iconDefault,
        iconImageHref: item.iconHref,
        iconImageSize: item.iconSize,
        iconImageOffset: item.iconOffset
      });

      map.geoObjects.add(placemark);


    });

    activeShop = shop;
  };

  showShop(activeShop);
};

ymaps.ready(init);



