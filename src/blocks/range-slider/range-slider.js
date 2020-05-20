import './range-slider.scss';
/*  //------------------ТАК ПРИ ЗАГРУЗКЕ ОК ПРИ CHANGE НЕ ОК
import "ion-rangeslider"

let _setDiapason = function()   {
    let context = this;
    return function()  {
        let _from = $(context).prev().find(".irs-from").text();
        let _to = $(context).prev().find(".irs-to").text();
        let str = _from + "-" + _to;
        $(context).parent().prev().html(str);
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
        skin: "custom",
        hide_min_max: true,
        postfix: "&#8381;"
        // hide_from_to: true
        
    });
    $(".js-range-slider").on("change", _setDiapason.call($(this)));
    let elems = $(document).find(".js-range-slider");
    for (let elem of elems) {
        let boundF = _setDiapason.bind(elem);
        boundF()();
    }   
    
});  */

//------------------ТАК ПРИ ЗАГРУЗКЕ НЕ ОК ПРИ CHANGE  ОК
/* import "ion-rangeslider"

let _setDiapason = ()  => {
    return function() {
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
        skin: "custom",
        hide_min_max: true,
        postfix: "&#8381;"
        // hide_from_to: true
        
    });
    let elems = document.querySelectorAll(".js-range-slider");
    for (let elem of elems) {
        let boundF = _setDiapason.bind(elem);
        _setDiapason()();
    }
    
    $(".js-range-slider").on("change", _setDiapason.call(this));
    
}); */

//---------------------КОСТЫЛЬ, Но надо двигаться дальше хоть как-то!
import "ion-rangeslider"

let _setDiapason = function()   {
    let context = this;
    return function()  {
        let _from = $(context).prev().find(".irs-from").text();
        let _to = $(context).prev().find(".irs-to").text();
        let str = _from + "-" + _to;
        $(context).parent().parent().find('.field__annotation').html(str);
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
        skin: "custom",
        hide_min_max: true,
        postfix: "&#8381;",
        step: 100
        // hide_from_to: true
        
    });
    $(".js-range-slider").on("change", function(){
        let _from = $(this).prev().find(".irs-from").text();
        let _to = $(this).prev().find(".irs-to").text();
        let str = _from + "-" + _to;
        $(this).parent().parent().find('.field__annotation').html(str);
    });
    let elems = $(document).find(".js-range-slider");
    for (let elem of elems) {
        let boundF = _setDiapason.bind(elem);
        boundF()();
    }   
    
});