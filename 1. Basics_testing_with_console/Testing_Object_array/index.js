import * as o from "../../OutPut.mjs"

o.Create_MH("1", "This page is to test the Object Array");
o.Create_A("2","Feel free to check the console to see the output and check the JS sheet to view the source code.")


class AB{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    get viewname(){
        return this._name;
    }
    get viewage(){
        return this._age;
    }

    set changename(value){
        this._name = value;
    }
    set changeage(value){
        this._age = value;
    }
}

let b = [];

b = [   new AB("Ajay Hrishi", 23),
        new AB("Naruto Uzumaki", 27),
        new AB("Kakashi Hatake", 49),
        new AB("Saske Uchiha", 27),
        new AB("Hashirama Senju", 350),
        new AB("Madara Uchiha", 351)];

console.log(b[4].viewname, " ",b[4].viewage );
console.log(b[2].viewname, " ",b[2].viewage);
console.log(b[1].viewname, " ",b[1].viewage);
console.log(b[0].viewname, " ",b[0].viewage);
console.log(b[3].viewname, " ",b[3].viewage);

b[0].changename = "Tanjiro Kamado";
console.log(b[0].viewname, " ",b[0].viewage);
b[0].changeage = 25;
console.log(b[0].viewname, " ",b[0].viewage);