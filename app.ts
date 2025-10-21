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

let val: value = 8;
val = 'asn';


// oops
// class
class bottle {

    price: number
    quantity: number

    constructor(price: number, quantity: number) {
        this.price = price;
        this.quantity = quantity;
    }

}

let b1 = new bottle(200, 100);
let b2 = new bottle(1000, 10);



console.log("nasjlnjf")

//this keyword

class thiss{
    public name = "madhur"
    getInfo(){
        this.name='hehe';
        console.log(this.name);
    }
}


// Generics 

// Generics function
function call<T>(a: T){

}

call<string>('madhur');
call<number>(20);


// Generics interface

interface user<T>{
    name:string;
    age:number
    key: T
}

function abcd(obj: user<number>){

}

abcd({name:"madhur"; age:20; key:2103210});
