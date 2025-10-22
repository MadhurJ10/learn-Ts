//tuples
var arr = [20, "madhur"];
// enum
var human;
(function (human) {
    human["canFly"] = "false";
    human["canTalk"] = "true";
})(human || (human = {}));
console.log(human.canFly);
console.log(human.canTalk);
// any , unknown, void , null
var a = '';
function getUserdet(obj) {
}
getUserdet({ name: "madhur", email: "madhur", num: 20 });
function check(obj) {
    obj.isSuperadmin = true;
}
var val = 8;
val = 'asn';
// oops
// class
var bottle = /** @class */ (function () {
    function bottle(price, quantity) {
        this.price = price;
        this.quantity = quantity;
    }
    return bottle;
}());
var b1 = new bottle(200, 100);
var b2 = new bottle(1000, 10);
console.log("nasjlnjf");
//this keyword
var thiss = /** @class */ (function () {
    function thiss() {
        this.name = "madhur";
    }
    thiss.prototype.getInfo = function () {
        this.name = 'hehe';
        console.log(this.name);
    };
    return thiss;
}());
// Generics 
// Generics function
function call(a) {
}
call('madhur');
call(20);
function abcd(obj) {
}
abcd({ name: "madhur", age: 20, key: 2103210 });
