import * as o from "../../OutPut.mjs"
o.Create_MH("1","This page is to test the this keyword");


const car1 = {
    color: "Blue", milage: "60 Km", power: "450 HP", Nitro: "Included",
    colorgeter:function(){
        console.log(this.color);
    },
    milagegeter:function(){
        console.log(this.milage);
    },
    powergeter:function(){
        console.log(this.power);
    },
    Nitrostatus:function(){
        console.log(this.Nitro);
    }
};

const car2 = {
    color: "Red", milage: "40 Km", power: "600 HP", Nitro: "NotIncluded",
    colorgeter:function(){
        console.log(this.color);
    },
    milagegeter:function(){
        console.log(this.milage);
    },
    powergeter:function(){
        console.log(this.power);
    },
    Nitrostatus:function(){
        console.log(this.Nitro);
    }

};

console.log(car1.Nitro);
console.log(car1.milage);
console.log(car1.power);
console.log(car1.color);

car1.colorgeter();
car2.Nitrostatus();


