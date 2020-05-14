export function endDigit(quantity, ...digits) {
    for (let digit of digits) {
        if ((quantity % 10 == digit)&&(quantity - digit) / 10 % 10 != 1) return true;
    }
    return false;
}
export let data = {
    guests: {
        items: {
            "взрослые": {
                quantity: 0,
                max_quantity: 100,
                writing_mode:  function()  {
                    if (!this.quantity) return '';
                    if (endDigit(this.quantity, 1)) {
                        return this.quantity + " взрослый";
                    }
                    return this.quantity + " взрослых";
                }
            },
            "дети": {
                quantity: 0,
                max_quantity: 50,
                writing_mode:  function()  {
                    if (!this.quantity) return '';
                    if (endDigit(this.quantity, 1)) {
                        return this.quantity + " ребенок";
                    }
                    if (endDigit(this.quantity, 2,3,4)) {
                        return this.quantity + " ребенка";
                    }
                    return this.quantity + " детей";
                }
            },
            "младенцы": {
                quantity: 0,
                max_quantity: 30,
                writing_mode:  function()  {
                    if (!this.quantity) return '';
                    if (endDigit(this.quantity, 1)) {
                        return this.quantity + " младенец";
                    }
                    if (endDigit(this.quantity, 2, 3, 4)) {
                        return this.quantity + " младенца";
                    }
                    return this.quantity + " младенцев";
                }
            },
            "гости": {
                quantity: 0,
                max_quantity: 30,
                writing_mode:  function()  {
                    if (!this.quantity) return '';
                    if (endDigit(this.quantity, 1)) {
                        return this.quantity + " гость";
                    }
                    if (endDigit(this.quantity, 2, 3, 4)) {
                        return this.quantity + " гостя";
                    }
                    return this.quantity + " гостей";
                }
            },
        },
        result: function() {
            let res;
            this.items["гости"].quantity = this.items["взрослые"].quantity + this.items["дети"].quantity;
            res = this.items["гости"].writing_mode() + (this.items["младенцы"].writing_mode() && `, ${this.items["младенцы"].writing_mode()}` || '')
            return res;
        },
        resultTotal: function() {
            let resArray = [];
            let res = '';
            if (this.items["взрослые"].quantity) resArray.push(this.items["взрослые"]);
            if (this.items["дети"].quantity) resArray.push(this.items["дети"]);
            if (this.items["младенцы"].quantity) resArray.push(this.items["младенцы"]);
            for (let item of resArray) {
                res += item.writing_mode() + ', ';
            }
            res = res.slice(0, -2);
            return res;
        },
    },
    rooms: {
        items: {
            "спальни": {
                max_quantity: 5,
                writing_mode: function() {
                    if (endDigit(this.quantity, 1)) {
                        return this.quantity + " спальня";
                    }
                    if (endDigit(this.quantity, 2,3,4)) {
                        return this.quantity + " спальни";
                    }
                    return this.quantity + " спален";
                }
            },
            "кровати": {
                max_quantity: 30,
                writing_mode: function() {
                    if (endDigit(this.quantity, 1)) {
                        return this.quantity + " кровать";
                    }
                    if (endDigit(this.quantity, 2,3,4)) {
                        return this.quantity + " кровати";
                    }
                    return this.quantity + " кроватей";
                }
            },
            "ванные комнаты": {
                max_quantity: 50,
                writing_mode: function() {
                    if (endDigit(this.quantity, 1)) {
                        return this.quantity + " ванная комната";
                    }
                    if (endDigit(this.quantity, 2,3,4)) {
                        return this.quantity + " ванные комнаты";
                    }
                    return this.quantity + " ванных комнат";
                }
            },
        },
        resultTotal: function() {
            let resArray = [];
            let res = '';
            if (this.items["спальни"].quantity) resArray.push(this.items["спальни"]);
            if (this.items["кровати"].quantity) resArray.push(this.items["кровати"]);
            if (this.items["ванные комнаты"].quantity) resArray.push(this.items["ванные комнаты"]);
            for (let item of resArray) {
                res += item.writing_mode() + ', ';
            }
            res = res.slice(0, -2);
            return res;
        },
        result: function()  {
            return this.resultTotal();
        }
    }
};

