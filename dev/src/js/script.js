const mainScriptFunc = function() {
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