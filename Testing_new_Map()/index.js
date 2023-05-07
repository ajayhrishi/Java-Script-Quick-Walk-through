import * as o from "../OutPut.mjs"
o.Create_MH("id","This page is to test the new Map();");
o.Create_H("1","Enter the details below");
o.Create_A("2","Enter the ID and the value in the below column to add elements to it.");
o.Create_A_Label("3","InputID: ");o.Create_inputbox("In_id","Input ID"); o.br();
o.Create_A_Label("4","Input Value: ");o.Create_inputbox("In_value","Value"); o.br();
o.Create_button("Button","Submit");o.Create_button("S_ID","Search with ID");
o.Create_button("Delete_ID","Delete ID");
let In_id = o.quickaccess("In_id"), In_value=o.quickaccess("In_value"), button = o.quickaccess("Button"),
SearchID = o.quickaccess("S_ID"), DeleteID = o.quickaccess("Delete_ID");
o.Create_A_G("output","");
o.Create_A_G("has","");
o.Create_A_G("hasandplace","");


const shoppinglist = new Map([]);
let val, input,data;
let mape=``; 
button.onclick =()=>{
  val = In_id.value;
  input = In_value.value;
  shoppinglist.set(val,input);
  mape=``; 
  shoppinglist.forEach((value, key) => {
   mape= mape.concat( `[${key}:${value}]\n`);
  });
  o.Use_Output_ID("output", mape);
  
}

SearchID.onclick = ()=>{
    val = In_id.value;

    if(shoppinglist.has(val)){
        data = shoppinglist.get(val);
        o.Use_Output_ID("has",`Map has the key of ${val}. It's Value is ${data}`)}
        else
        {
            o.Use_Output_ID("has",`Map Does not has the value of ${val}`);
}}


DeleteID.onclick = ()=>{
    val = In_id.value;

    if(shoppinglist.has(val)){
        shoppinglist.delete(val);
        o.Use_Output_ID("has",`Map has the key of ${val}. It's Value is ${data}. We are deleting it now.`)
        shoppinglist.delete(val);
        mape="";
        shoppinglist.forEach((value, key) => {
            mape= mape.concat( `[${key}:${value}]\n`);
           });
           o.Use_Output_ID("output", mape);
    }
        else
        {
            o.Use_Output_ID("has",`Map Does not has the value of ${val} to delete it.`);
}}