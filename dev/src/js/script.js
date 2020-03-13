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

    //Установка высоты букмарка в соответствии с высотой блока
    function compareBookHeight() {

    }   

    //функция отображения карты
    function showMap() {
        var myLatlng = new google.maps.LatLng(-34.397, 150.644);
        var myOptions = {
            zoom: 8,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("MapBlock"), myOptions);
    }
    //функция переключения основных окон(карта,новости,профиль..)
    function changeMainItem() {
        
    }
}
mainScriptFunc();