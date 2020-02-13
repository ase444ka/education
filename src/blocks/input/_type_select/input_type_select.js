$('.input_type_select i').click(function(){
    $(this).parent().toggleClass('input_expanded');
});

function endDigit(quantity, ...digits) {
    for (let digit of digits) {
        if ((quantity % 10 == digit)&&((quantity - digit) % 10 != 1)) return true;
    }
    return false;
}

let guests = {
    initial_value: "сколько гостей",
    items: [
        {
            value: "взрослые",
            max_quantity: 100,
            writing_mode: function (quantity) {
                if (endDigit(quantity, 1)) {
                    return quantity + " взрослый";
                }
                return quantity + " взрослых";
            }
        },
        {
            value: "дети",
            max_quantity: 50,
            writing_mode: function (quantity) {
                if (endDigit(quantity, 1)) {
                    return quantity + " ребенок";
                }
                return quantity + " детей";
            }
        },
        {
            value: "младенцы",
            max_quantity: 30,
            writing_mode: function (quantity) {
                if (endDigit(quantity, 1)) {
                    return quantity + " младенец";
                }
                if (endDigit(quantity, 2, 3, 4)) {
                    return quantity + " младенца";
                }
                return quantity + " младенцев";
            }
        },
    ],
    result: function (all) {
        if (endDigit(all, 1)) return all + " гость";
        if (endDigit(all, 2,3,4)) return all + " гость";
        return all + " гостей";
    }
};

let rooms = {
    initial_value: "Какой номер..",
    items: [
        {
            value: "спальни",
            max_quantity: 5,
            writing_mode: function(quantity) {
                if (endDigit(quantity, 1)) {
                    return quantity + " спальня";
                }
                if (endDigit(quantity, 2,3,4)) {
                    return quantity + " спальни";
                }
                return quantity + " спален";
            }
        },
        {
            value: "кровати",
            max_quantity: 30,
            writing_mode: function(quantity) {
                if (endDigit(quantity, 1)) {
                    return quantity + " кровать";
                }
                if (endDigit(quantity, 2,3,4)) {
                    return quantity + " кровати";
                }
                return quantity + " кроватей";
            }
        },
        {
            value: "ванные комнаты",
            max_quantity: 50,
            writing_mode: function(quantity) {
                if (endDigit(quantity, 1)) {
                    return quantity + " ванная комната";
                }
                if (endDigit(quantity, 2,3,4)) {
                    return quantity + " ванные комнаты";
                }
                return quantity + " ванных комнат";
            }
        },
    ]
};

