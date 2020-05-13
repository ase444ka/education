function endDigit(quantity, ...digits) {
    for (let digit of digits) {
        if ((quantity % 10 == digit)&&(quantity - digit) / 10 % 10 != 1) return true;
    }
    return false;
}
let data = {
    guests: {
        initial_value: "СИКОКА гостей",
        items: [
            {
                value: "взрослые",
                max_quantity: 100,
                writing_mode: function (quantity) {
                    if (endDigit(quantity, 1)) {
                        return quantity + " взрослый";
                    }
                    return quantity + " взрослых";
                },
                general: true,
            },
            {
                value: "дети",
                max_quantity: 50,
                writing_mode: function (quantity) {
                    if (endDigit(quantity, 1)) {
                        return quantity + " ребенок";
                    }
                    if (endDigit(quantity, 2,3,4)) {
                        return quantity + " ребенка";
                    }
                    return quantity + " детей";
                },
                general: true,
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
        result: function (total) {
            let res;
            if (endDigit(total.people, 1)) res = total.people + " гость";
            else if (endDigit(total.people, 2,3,4)) res = total.people + " гостя";
            else res = total.people + " гостей";
            if (total.babies) res += `, ${this.items[2].writing_mode(total.babies)}`;
            
            return res;
        }
    },
    rooms: {
        initial_value: "Какой нумерочик..",
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
    }
};

export {data, endDigit};