var human;
(function (human) {
    human["canFly"] = "false";
    human["canTalk"] = "true";
})(human || (human = {}));
console.log(human.canFly);
console.log(human.canTalk);
