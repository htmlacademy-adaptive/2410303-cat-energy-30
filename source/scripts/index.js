/* в этот файл добавляет скрипты*/

// Подстановка нужной ссылки по клику


const shopData = {
    shop1: [{
        lat: 55.75222,
        lon: 37.61556,
        name: 'Кэт Энерджи',
        iconDefault: 'default#image',
        iconHref: '../source/images/icons/cat.png',
        iconSize: [113, 106],
        iconOffset: [-5, -38]
    }],
};

const init = () => {
    const map = new ymaps.Map('map', {
        center: [55.753215, 37.622504],
        zoom: 14
    });

    let activeShop = "shop1";

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
                iconImageOffset:item.iconOffset
            });

            map.geoObjects.add(placemark);


        });

        activeShop = shop;
    }

    showShop(activeShop);
};

ymaps.ready(init);
