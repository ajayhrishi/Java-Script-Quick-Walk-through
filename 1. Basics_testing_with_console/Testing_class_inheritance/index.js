import * as o from "../../OutPut.mjs"
o.Create_MH("1","This page is to test the class inheritance");
o.Create_A("2",`Feel free to check the console to see the output and check the JS sheet to view the source code.`);

class Mainclass { 
    constructor(hell, heaven, earth){
        console.log(`${hell}, ${heaven}, ${earth}`);
    }
    hello(){
        console.log("hello");
    }
}
class childclass extends Mainclass {
    constructor(hell,heaven,earth){
        super(hell,heaven,earth);
    }   
}
const object = new childclass("you", "me", "house");
const object2 = new childclass("Hello", "there", "Sing a song");