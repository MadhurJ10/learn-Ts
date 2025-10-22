"use strict";
//tuples
let arr = [20, "madhur"];
// enum
var human;
(function (human) {
    human["canFly"] = "false";
    human["canTalk"] = "true";
})(human || (human = {}));
console.log(human.canFly);
console.log(human.canTalk);
// any , unknown, void , null
let a = '';
function getUserdet(obj) {
}
getUserdet({ name: "madhur", email: "madhur", num: 20 });
function check(obj) {
    obj.isSuperadmin = true;
}
let val = 8;
val = 'asn';
// oops
// class
class bottle {
    constructor() {
        this.radius = 120;
        this.price = 100;
    }
}
let b1 = new bottle();
let b2 = new bottle();
b2.price = 200;
b2.radius = 300;
b1.price = 40;
b1.radius = 80;
console.log("nasjlnjf");
