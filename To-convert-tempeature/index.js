import * as o from "../OutPut.mjs"


o.Create_MH("asd","This page is to test the Temperature Converter");
o.Create_H("01","Temprature converter");
o.Create_R("11", "Enter the temperature in the below input box.");
o.Create_inputboxN("InputC","Temperature"); o.br();
o.Create_A_Label("111","To Fahrenheit: ");
o.Create_radiobutton("aa","Ab");o.br();
o.Create_A_Label("112","To Degree celsius: ");
o.Create_radiobutton("ab","Ab");o.br();
o.Create_button("Sub","Submit");

let far,deg;
let button = document.getElementById("Sub");

button.onclick = function(){

o.Create_A("Result1");
if(document.getElementById("aa").checked){
    far=document.getElementById("InputC").value;

    o.Use_Output_ID("Result1",`To Fahrenheit clicked: Value: ${far}, In Fahrenheit: ${(far-30)*(5/9)} F`);
}
else if(document.getElementById("ab").checked){
    deg =document.getElementById("InputC").value;
    o.Use_Output_ID("Result1",`To Degree Celsius clicked: Value: ${deg}, In Degree Celsius: ${(deg*9/5)+32} Degree Celsius`);
}
else{
    o.Use_Output_ID("Result1", `Please click on any ID ${far}  ${deg}`);
}

}


