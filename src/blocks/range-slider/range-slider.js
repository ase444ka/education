import "ion-rangeslider"
$(document).ready(function(){
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 1000,
        max: 15000,
        from: 5000,
        to: 10000,
        skin: "round",
        hide_min_max: true,
        hide_from_to: true
    });
});