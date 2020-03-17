const mainScriptFunc = function() {
    //slick slider 
    function slickActive() {
        $('.slickSlider').slick({
            arrows: false,
            dots: true,
            
        })
    }
    slickActive();

    //клик по букмарку
    function bookClick() {
        /**
         * Получил коллекцию всех элементов,
         * прохожусь по каждому,определяю кнопку букмарка,
         * блок букмарка и информационный блок,при клике на кнопку 
         * добавляю анимацию движения букмарка
         */
        let itemArr = document.querySelectorAll('.content-item');
        
        itemArr.forEach(function(i, el, arr) {
            let bookBtn = arr[el].querySelector('.bookmark-btn');
            let bookBlock = arr[el].querySelector('.bookmark-block');
            let infoBlock = arr[el].querySelector('.item-info');

            //если кнопка есть
            if(bookBtn) {
                bookBtn.onclick = function(e) {
                    bookBlock.classList.toggle('active');
                    infoBlock.classList.toggle('active');
                }
            }
        })
    }
    bookClick();

    //функция отображения карты
    function showMap() {
        ymaps.ready(init);

        function init(){
        
            var map = new ymaps.Map('MapBlock', {
                center: [55.907228, 31.260503],
                zoom: 5,
                controls: []
            }, {
                maxZoom: 18,
                minZoom: 2,
            }),

            myPlacemark1 = new ymaps.Placemark([55.907228, 31.260503],
                {
                    // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                    balloonContentHeader: "Балун метки",
                    balloonContentBody: "Содержимое <em>балуна</em> метки",
                    balloonContentFooter: "Подвал",
                    hintContent: "Хинт метки",
                },
                {
                    // preset: 'islands#circleIcon',
                    // iconColor: '#FE8411',
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: 'img/marker.png',
                    // Размеры метки.
                    iconImageSize: [18, 18],
                }
            );
            myPlacemark2 = new ymaps.Placemark([50.907228, 31.260503],
                {
                    // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                    balloonContentHeader: "Балун метки",
                    balloonContentBody: "Содержимое <em>балуна</em> метки",
                    balloonContentFooter: "Подвал",
                    hintContent: "Хинт метки",
                                        // preset: 'islands#circleIcon',
                    // iconColor: '#FE8411',
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: 'img/marker-active.png',
                    // Размеры метки.
                    iconImageSize: [18, 18],
                },
                {
                    // preset: 'islands#circleIcon',
                    // iconColor: '#FE8411',
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: 'img/marker-active.png',
                    // Размеры метки.
                    iconImageSize: [18, 18],
                }
            );

    
            map.geoObjects
            .add(myPlacemark1)
            .add(myPlacemark2);
        }
    }
    showMap();

    //функция переключения основных окон(карта,новости,профиль..)
    function changeMenuItem() {
        const HOME_PAGE = document.querySelector('#HomePage');
        const MAP_PAGE = document.querySelector('#MapPage');
        const PAGE_ITEMS = [HOME_PAGE, MAP_PAGE];

        let MENU = document.querySelector('#Menu');
        let MENU_ITEMS = MENU.querySelectorAll('nav a');
        
        MENU.onclick = (e) => {
            e.preventDefault();
            let current = e.target;
            let currentAddress = (current.getAttribute('href')).split('#').join('');

            for(let i = 0; i < MENU_ITEMS.length; i++) {
                current == MENU_ITEMS[i] ? MENU_ITEMS[i].classList.add('active') : MENU_ITEMS[i].classList.remove('active');
            }

            for(let i = 0; i < PAGE_ITEMS.length; i++) {
                if(PAGE_ITEMS[i].getAttribute('id') != currentAddress) {
                    PAGE_ITEMS[i].classList.remove('showMenuItem');
                } else {
                    PAGE_ITEMS[i].classList.add('showMenuItem');
                }
            }
        }
    }
    changeMenuItem();

    function showEvents() {
        let openBtn = document.querySelector('.bottom-panel .panel-events');
        let closeBtn = document.querySelector('#MapPage .events-block .block-title');
        let eventsBlock = document.querySelector('#MapPage .events-block');

        openBtn.onclick = (e) => {
            eventsBlock.classList.add('active');
        }

        closeBtn.onclick = (e) => {
            eventsBlock.classList.remove('active');
        }
    }
    showEvents();
}
mainScriptFunc();