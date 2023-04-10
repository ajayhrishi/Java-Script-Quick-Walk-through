import * as OTjs from "../../OutPut.mjs"

let a = setTimeout(A2,5000);
let b = setTimeout(A3,9000);
let c = setTimeout(A4,13000);
let d = setTimeout(A5,17000);
let e = setTimeout(A6,21000);
let f = setTimeout(A7,25000);
let g = setTimeout(A8,29000);
let h = setTimeout(A9,33000);
let i = setTimeout(A10,37000);
let j = setTimeout(A11,41000);
let k = setTimeout(A12,44000);


let TestingR = OTjs.Create_R();
let TestingR2 = OTjs.Create_R();
OTjs.Use_Output(TestingR, `Hello there`);
OTjs.Use_Output(TestingR2, `It appears that my custom-made JavaScript module is functioning correctly. 
<br>This module is designed to enable me to create and modify HTML elements directly from within my JavaScript file, without the need to modify the HTML code itself.
<br><br>One of the key features of this module is the ability to access each output element with a specific ID, allowing me to make changes to individual elements with ease.

<br><br>To create elements with various CSS properties, I have implemented multiple functions that enable me to customize the appearance and behavior of each element as needed. <br><br>Overall, this module streamlines my development process and makes it easier for me to manage and manipulate HTML elements within my code.

<br><br> Now I am gonna test the other functions for creating the different elements with different CSS properties.`);
   
let skip = OTjs.Create_button("id", "Skip");
document.getElementById("id").onclick = function (){
  clearTimeout(a);
  clearTimeout(b);
  clearTimeout(c);
  clearTimeout(d);
  clearTimeout(e);
  clearTimeout(f);
  clearTimeout(g);
  clearTimeout(h);
  clearTimeout(i);
  clearTimeout(j);
  clearTimeout(k);
  A2();A3();A4();A5();A6();A7();A8();A9();A10();A11();A12();
}

function A2(){
/*------------------*/
/*----------- Tested the created P element for the Paragraph R successfully. -------------*/
let TestingRB = OTjs.Create_RB();
let TestingRB2 = OTjs.Create_RB();
OTjs.Use_Output(TestingRB,`How you doing?`);
OTjs.Use_Output(TestingRB2,`Yaaay... it seems like my code is working for creating the paragraph element with the .RB class CSS property`);
/*------------------*/
}function A3(){
let TestingRY = OTjs.Create_RY();
OTjs.Use_Output(TestingRY, `Hi, are you able to see the text in yellow color?`);
let TestingRY2 = OTjs.Create_RY();
OTjs.Use_Output(TestingRY2, `Well yes, it seems like it's working.`)
/*------------------*/
}function A4(){
let TestingRG = OTjs.Create_RG();
OTjs.Use_Output(TestingRG, `Are you able to see a green color text now? `);
let TestingRG2 = OTjs.Create_RG();
OTjs.Use_Output(TestingRG2,`Yes the function for creating the Green color text is also working`);
/*------------------*/
}function A5(){
let TestingRR = OTjs.Create_RR();
OTjs.Use_Output(TestingRR, `Are you able to see a red color text?`);
let TestingRR2 = OTjs.Create_RR();
OTjs.Use_Output(TestingRR2, `It seems like that is also working.`);
/*--------
----------*/
}function A6(){
let TestingA = OTjs.Create_A();
OTjs.Use_Output(TestingA, `Are you able to see text in bold font?`);
let TestingA2 = OTjs.Create_A();
OTjs.Use_Output(TestingA2, `Great! Class .A CSS style Paragraph is also working`);
/*------------------*/
}function A7(){
let TestingAY = OTjs.Create_A_Y();
OTjs.Use_Output(TestingAY, `Are you able to see text in bold font with yellow color background?`);
let TestingAY2 = OTjs.Create_A_Y();
OTjs.Use_Output(TestingAY2, `Great! Class .A_Y CSS style Paragraph is also working`);
/*------------------*/
}function A8(){
let TestingAB = OTjs.Create_A_B();
OTjs.Use_Output(TestingAB, `Are you able to see text in bold font with Blue color background?`);
let TestingAB2 = OTjs.Create_A_B();
OTjs.Use_Output(TestingAB2, `Great! Class .A_B CSS style Paragraph is also working`);
/*------------------*/
}function A9(){
let TestingAR = OTjs.Create_A_R();
OTjs.Use_Output(TestingAR, `Are you able to see text in bold font with Red color background?`);
let TestingAR2 = OTjs.Create_A_R();
OTjs.Use_Output(TestingAR2, `Great! Class .A_R CSS style Paragraph is also working`);
/*------------------*/
}function A10(){
let TestingAG = OTjs.Create_A_G();
OTjs.Use_Output(TestingAG, `Are you able to see text in bold font with Green color background?`);
let TestingAG2 = OTjs.Create_A_G("R");
OTjs.Use_Output(TestingAG2, `Great! Class .A_G CSS style Paragraph is also working`);
/*------------------*/
}function A11(){
OTjs.Create_inputboxN("hello", "inputboxN function is working");
OTjs.Create_brn();
OTjs.Create_inputbox("asdf", "inputbox function is working");
OTjs.Create_brn();
/*------------------*/
}function A12(){
OTjs.Create_button("h", "hello");

let TestingAG3 = OTjs.Create_A_G();
OTjs.Use_Output(TestingAG3,`It seems like the function to create the input boxes and buttons is now working properly.`);
OTjs.Create_Checkbox("h");
OTjs.Create_Checkbox("h");OTjs.Create_Checkbox("h");OTjs.Create_Checkbox("h");
OTjs.Create_radiobutton("h", "name");
OTjs.Create_radiobutton("h", "name");
OTjs.Create_radiobutton("h", "name");
}
/*------------------*/

/*------------------*/
/*------------------*/
/*------------------*/
/*------------------*/
/*------------------*/
/*------------------*/


