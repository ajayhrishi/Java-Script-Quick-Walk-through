import * as o from "../../OutPut.mjs"

o.Create_MH("heading",`This is page is to test the rest parameter functions`);
o.Create_A_R("as", `To view the source code, please refer to the JS sheet`);
let numbers =0;
o.Create_A("ad", `Please enter the amounts that you would like to pass in to the array`);


o.Create_inputbox(numbers,"Number"); 
o.br();
let quick;
let userarray;
let inID;
o.Create_buttonB("+","+");
o.Create_buttonB("-","Del");
o.Create_button("id", "Submit");
let button = o.quickaccess("+");
let d = o.quickaccess("-");
let c = o.quickaccess("id");
d.onclick = function(){removeInput();}
button.onclick = function() {extrainput(); }


c.onclick = function(){
    
    for (let e=1; e<=numbers; e++)
    {  
       inID = "I"+e;
       quick = o.quickaccess(inID);
       userarray[e] = quick.value;
    }

    o.Create_A(`o`,"hellow there");
}

/*took sometime, but figured out the alogorithm to make extra inputs and move the submit button along with it"*/
function extrainput(){  
    o.br();
    numbers +=1;
    inID = "I"+numbers;
    o.Create_inputbox(inID,"Number"); 
    o.br();
    button.remove()
    c.remove();
    d.remove();
    o.Create_buttonB("+","+");
    o.Create_buttonB("-","Del");
    o.Create_button("id", "Submit");
    button = o.quickaccess("+");
    c = o.quickaccess("id");
    d = o.quickaccess("-");
    button.onclick = function() {extrainput();
    d.onclick = function(){removeInput();}
    }

}
function removeInput(){
   let id = o.quickaccess(numbers);
   id.remove();
   numbers -=1;
   button.onclick = function() {extrainput();}
}

