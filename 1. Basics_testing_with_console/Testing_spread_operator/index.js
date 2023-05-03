import * as op from "../../OutPut.mjs"
op.Create_MH("Mainhead",`This page is to test spread operator`);
op.Create_A_R("asdf", `To view the source code, Please open the JS Sheet`);

op.Create_sH("p1",`Using this page, I will be testing some basic usage of the spread operator in arrays`);

let array1=[], array2=[], array3=[];
assigndefault();

op.Create_H("arrayHead", `Below are the default array in this page`);

op.Create_button("default","Default Array");
let resetbutton = op.quickaccess("default");

op.Create_buttonB("reverse","Reverse the array");
let reversebutton = op.quickaccess("reverse");

op.Create_buttonO("sort", "Sort In acceding order");
let SortIncreasingbutton = op.quickaccess("sort");

op.Create_buttonO("sortback", "Sort In decreasing order");
let SortDecreasingbutton = op.quickaccess("sortback");

op.Create_buttonB("Rand","Assign Random Number's instead");
let Random = op.quickaccess("Rand");

op.Create_button("Shuffle","Shuffle Array");
let Shuffle=op.quickaccess("Shuffle");

arrayout();

op.Create_A_G("array1", `In The Array1 largest number is:${Math.max(...array1)}`) ;
op.Create_A_G("array2", `In The Array2  largest number is:${Math.max(...array2)}`) ;
op.Create_A_G("array3", `In The Array3  largest number is:${Math.max(...array3)}`) ;

op.Create_R("a",`It seems like testing the spread operator for fining the largest function in the array is succesful.`);

op.Create_A_B("aa",`The smallest number in Array1: ${Math.min(...array1)}`);
op.Create_A_B("ab",`The samllest number in Array2: ${Math.min(...array2)}`);
op.Create_A_B("ac",`The smallest number in Array3: ${Math.min(...array3)}`);

function arrayout(){
op.Create_A(`Array1`,` Array1: ${[...array1]}` );
op.Create_A(`Array2`,` Array2: ${[...array2]}` );
op.Create_A(`Array3`,` Array3: ${[...array3]}` );}

resetbutton.onclick= function(){assigndefault(); arrayout(); }

reversebutton.onclick = function(){
    array1.reverse();
    array2.reverse();
    array3.reverse();
    arrayout();}

SortIncreasingbutton.onclick = function(){  
    array1.sort();
    array2.sort();
    array3.sort();
    arrayout();}

SortDecreasingbutton.onclick = function(){
    array1.sort();
    array2.sort();
    array3.sort();
    array1.reverse();
    array2.reverse();
    array3.reverse();
    arrayout();}

Random.onclick=function(){
    assignrandom();
    arrayout();
}

Shuffle.onclick =  function(){ShuffleArrys();
arrayout();}


function assigndefault(){
    array1= [2,34,53,42,465,23,83,54,12,123,234,543,634,353,50,23,56,467,123,432];
    array2= [23,556,12,65,765,23,1,32,35,6,75,34,23,765,342,12,356,678,34,2,111,12];
    array3 = [36,56,23,576,76,54,238,8,776,67,89,98,60,34,23,55, 34,65,762,23,13,58];
}

function assignrandom(){
       array1=[];
       array2=[];
       array3=[];
    for(let i=0; i<20;i++){
       array1.push(Math.ceil(Math.random()*500));
       array2.push(Math.ceil(Math.random()*500));
       array3.push(Math.ceil(Math.random()*500));
    }
    op.Use_Output_ID("array1", `In The Array1 largest number is:${Math.max(...array1)}`) ;
    op.Use_Output_ID("array2", `In The Array2  largest number is:${Math.max(...array2)}`) ;
    op.Use_Output_ID("array3", `In The Array3  largest number is:${Math.max(...array3)}`) ;

    op.Use_Output_ID("aa",`The smallest number in Array1: ${Math.min(...array1)}`);
    op.Use_Output_ID("ab",`The samllest number in Array2: ${Math.min(...array2)}`);
    op.Use_Output_ID("ac",`The smallest number in Array3: ${Math.min(...array3)}`);

}

function ShuffleArrys(){
     let rand,array1l,array2l,array3l,temp;
    array1l=array1.length;
    array2l=array2.length;
    array3l=array3.length;

     for(let i=0; i<array1l;i++){
      temp=array1[i];
      rand=Math.floor(Math.random()*array1l);
      array1[i]=array1[rand];
      array1[rand]=temp;
     }
    for(let i=0; i<array2l;i++){
        temp=array2[i];
        rand=Math.floor(Math.random()*array2l);
        array2[i]=array2[rand];
        array2[rand]=temp;
     }
     for(let i=0; i<array3l;i++){
        temp=array3[i];
        rand=Math.floor(Math.random()*array3l);
        array3[i]=array3[rand];
        array3[rand]=temp;
     }
}