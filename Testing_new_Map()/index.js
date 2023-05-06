import * as o from "../OutPut.mjs"
o.Create_MH("id","This page is to test the new Map();");
o.Create_H("1","Enter the details below");
o.Create_A("2","Enter the ID and the value in the below column to add elements to it.");
o.Create_A_Label("3","InputID: ");o.Create_inputbox("In_id","Input ID"); o.br();
o.Create_A_Label("4","Input Value: ");o.Create_inputbox("In_value","Value"); o.br();
o.Create_button("Button","Submit");
let In_id = o.quickaccess("In_id"), In_value=o.quickaccess("In_value");

let store = new Map(["value1", 20], ["value2", 30], ["value3", 40], ["value4", "Sing"], ["value5", "Dance"] );
console.log(store.get("value2")); 
console.log(store.set("value3", "Go GO GO"));
console.log(store.delete("value5"));
console.log(store.has("value10")); 
store.forEach((value,key) => console.log(`${key}: ${value}`));
console.log(store.size);