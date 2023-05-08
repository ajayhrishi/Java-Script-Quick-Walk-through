import * as o from "../../OutPut.mjs"
o.Create_MH("1","This page is to test the get and set keywords in class.")
console.log("hello there");
o.Create_A("2",`Feel free to check the console to see the output and check the JS sheet to view the source code.`);


class ABCD {
    constructor(){ 
       this._variable = 234;
       this._variable2 = 34;
    }
    get variable1getter() {
      return this._variable;
    }
    set variable1setter(values){
        this._variable = values;
    }
  }
  
  const obj = new ABCD();
  console.log(obj.variable1getter);
  obj.variable1setter = "1234";
  console.log(obj.variable1getter);
