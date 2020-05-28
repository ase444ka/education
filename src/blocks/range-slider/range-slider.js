import './range-slider.scss';
import "ion-rangeslider"

let _setDiapason = function()   {
    return () => {
        let _from = $(this).prev().find(".irs-from").text();
        let _to = $(this).prev().find(".irs-to").text();
        let str = _from + "-" + _to;
        $(this).parent().prev().html(str);
        return;
    }
};

$(document).ready(function(){
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 1000,
        max: 15000,
        from: 5000,
        to: 10000,
        step: 100,
        skin: "custom",
        hide_min_max: true,
        postfix: "&#8381;"
        // hide_from_to: true
        
    });
    $(".js-range-slider").on("change", (event) => _setDiapason.call(event.target)());
    let elems = $(document).find(".js-range-slider");
    for (let elem of elems) {
        _setDiapason.call(elem)();
    }   
    
});