//tuples

let arr: [number, string] = [20, "madhur"]


// enum
enum human {
    canFly = "false",
    canTalk = "true"
}

console.log(human.canFly)
console.log(human.canTalk)

// any , unknown, void , null
let a: string = '';


//interfaces 
interface user {
    name: string,
    email: string,
    num: number
}

function getUserdet(obj: user) {

}

getUserdet({ name: "madhur", email: "madhur", num: 20 });

//interface extensions 

interface admin extends user {
    isAdmin: boolean
}

interface superAdmin extends admin { 
    isSuperadmin: boolean;
}
function check(obj: superAdmin) {
    obj.isSuperadmin = true;
}

// type aliases

type value = string | number;

let val:value = 8;
val = 'asn';  