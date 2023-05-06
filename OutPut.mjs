/*----The below functions are for creating different R elements-----------------*/
export function Create_R(idofIT, templateliteral) {
    let p = document.createElement("p");
    p.setAttribute("class", "R");
    if(idofIT!=""){
    p.setAttribute("id", idofIT);}

    document.body.appendChild(p);
    if(templateliteral!=""){
      document.getElementById(idofIT).innerHTML = templateliteral;
    }
    return p;
  }
export function Create_RB(idofIT,templateliteral) {
    let p = document.createElement("p");
    p.setAttribute("class", "RB");
    if(idofIT!=""){
    p.setAttribute("id", idofIT);}
    document.body.appendChild(p);
    if(templateliteral!=""){
      document.getElementById(idofIT).innerHTML = templateliteral;
    }
    return p;
  }
export function Create_RY(idofIT, templateliteral) {
    let p = document.createElement("p");
    p.setAttribute("class", "RY");
    if(idofIT!=""){
    p.setAttribute("id", idofIT);}
    document.body.appendChild(p);
    if(templateliteral!=""){
      document.getElementById(idofIT).innerHTML = templateliteral;
    }
    return p;
  }
export function Create_RG(idofIT, templateliteral) {
    let p = document.createElement("p");
    p.setAttribute("class", "RG");
    if(idofIT!=""){
    p.setAttribute("id", idofIT);}
    document.body.appendChild(p);
    if(templateliteral!=""){
      document.getElementById(idofIT).innerHTML = templateliteral;
    }
    return p;
  }
export function Create_RR(idofIT,templateliteral) {
    let p = document.createElement("p");
    p.setAttribute("class", "RR");
    if(idofIT!=""){
    p.setAttribute("id", idofIT);}
    document.body.appendChild(p);
    if(templateliteral!=""){
      document.getElementById(idofIT).innerHTML = templateliteral;
    }
    return p;
  }

/*----The below functions are for creating heading elements ----------------*/
  export function Create_MH(idofIT ,templateliteral) {
    let p = document.createElement("p");
    p.setAttribute("class", "MH");
    if(idofIT!=""){
    p.setAttribute("id", idofIT);}
    document.body.appendChild(p);
    if(templateliteral!=""){
      document.getElementById(idofIT).innerHTML = templateliteral;
    }
    return p;
  }

  export function Create_H(idofIT,templateliteral) {
    let p = document.createElement("p");
    p.setAttribute("class", "H");
    if(idofIT!=""){
    p.setAttribute("id", idofIT);}
    document.body.appendChild(p);
    if(templateliteral!=""){
      document.getElementById(idofIT).innerHTML = templateliteral;
    }
    return p;
  }
  export function Create_sH(idofIT,templateliteral) {
    let p = document.createElement("p");
    p.setAttribute("class", "sH");
    if(idofIT!=""){
    p.setAttribute("id", idofIT);}
    document.body.appendChild(p);
    if(templateliteral!=""){
      document.getElementById(idofIT).innerHTML = templateliteral;
    }
    return p;
  }
/*-----To make different output lines with background colors------------------------------*/
export function Create_A(idofIT,templateliteral) {
  let p = document.createElement("p");
  p.setAttribute("class", "A");
  if(idofIT!=""){
  p.setAttribute("id", idofIT);}
  document.body.appendChild(p);
  if(templateliteral!=""){
    document.getElementById(idofIT).innerHTML = templateliteral;
  }
  return p;
}
export function Create_A_Y(idofIT,templateliteral) {
  let p = document.createElement("p");
  p.setAttribute("class", "A_Y");
  if(idofIT!=""){
  p.setAttribute("id", idofIT);}
  document.body.appendChild(p);
  if(templateliteral!=""){
    document.getElementById(idofIT).innerHTML = templateliteral;
  }
  return p;
}
export function Create_A_B(idofIT ,templateliteral) {
  let p = document.createElement("p");
  p.setAttribute("class", "A_B");
  if(idofIT!=""){
  p.setAttribute("id", idofIT);}
  document.body.appendChild(p);
  if(templateliteral!=""){
    document.getElementById(idofIT).innerHTML = templateliteral;
  }
  return p;
}
export function Create_A_R(idofIT,templateliteral) {
  let p = document.createElement("p");
  p.setAttribute("class", "A_R");
  if(idofIT!=""){
  p.setAttribute("id", idofIT);}
  document.body.appendChild(p);
  if(templateliteral!=""){
    document.getElementById(idofIT).innerHTML = templateliteral;
  }
  return p;
}
export function Create_A_G(idofIT,templateliteral) {
  let p = document.createElement("p");
  p.setAttribute("class", "A_G");
  if(idofIT!=""){
  p.setAttribute("id", idofIT);}
  document.body.appendChild(p);
  if(templateliteral!=""){
    document.getElementById(idofIT).innerHTML = templateliteral;
  }
  return p;
}

export function Create_A_Label(idofIT,templateliteral,type) {
  let p = document.createElement("label");
  if("A"==type)
  {p.setAttribute("class", "A");}
  else if("A_Y"==type) {
    p.setAttribute("class", "A_Y");
  }
  else if("A_B"==type) {
    p.setAttribute("class", "A_B");
  }
  else if("A_B"==type) {
    p.setAttribute("class", "A_B");
  }
  else if("A_R"==type) {
    p.setAttribute("class", "A_R");
  }
  else if("A_G"==type) {
    p.setAttribute("class", "A_G");
  }
  else{
    p.setAttribute("class", "A");
  }
  if(idofIT!=""){
  p.setAttribute("id", idofIT);}
  document.body.appendChild(p);
  if(templateliteral!=""){
    document.getElementById(idofIT).innerHTML = templateliteral;
  }
  return p;
}
/*---------------To make Input Boxes------------------------------*/

export function Create_inputbox(idofIT, placeholded) {
  let p = document.createElement('input');
  p.type = 'text';
  p.setAttribute("class", "inputbox");
  if(idofIT!=""){
  p.setAttribute("id", idofIT);}
  if (placeholded !=""){
    p.setAttribute("placeholder", placeholded);}
  document.body.appendChild(p);
  return p;
}   
export function Create_inputboxN(idofIT, placeholded) {
  const p = document.createElement('input');
  p.type = 'text';
  p.setAttribute("class", "inputboxN");
  if(idofIT!=""){
  p.setAttribute("id", idofIT);}
  if (placeholded !=""){
    p.setAttribute("placeholder", placeholded);}
  document.body.appendChild(p);
  return p;
}

export function Create_radiobutton(idofIT, names) {
  let p = document.createElement('input');
  p.type = 'radio';
  if(idofIT!=""){
  p.setAttribute("id", idofIT);}
  
  p.setAttribute("name", names);
  document.body.appendChild(p);
  return p;
}
export function Create_Checkbox(idofIT) {
  let p = document.createElement('input');
  p.type = 'checkbox';
  if(idofIT!=""){
  p.setAttribute("id", idofIT);}
  document.body.appendChild(p);
  return p;
}
/*-------------------------------------------------------------------------------*/
export function Use_Output(p1, templateliteral){
    p1.innerHTML = templateliteral;
    document.body.appendChild(p1);
}
export function Use_Output_ID(p1, templateliteral){
  document.getElementById(p1).innerHTML = templateliteral;
}

export function quickaccess(idofit){

  let a = document.getElementById(idofit);
  return a;
}
/*--------------------To create new line between the elements-----------------------*/
export function br(idofIT) {  
  let p = document.createElement("pre");
  if(idofIT!=""){
  p.setAttribute("id", idofIT);}
  p.setAttribute("style", "font-size: 1px");
  p.innerHTML = "<br>";
  document.body.appendChild(p);
  return p;
}
export function Create_br(idofIT) {
  let p = document.createElement("pre");
  if(idofIT!=""){
  p.setAttribute("id", idofIT);}
  p.innerHTML = "<br>";
  document.body.appendChild(p);
  return p;
}
/*-----------------Button makers------------------------*/

export function Create_button(idofIt, label)
{
  let a = document.createElement('button');
  a.setAttribute("id", idofIt); 
  a.setAttribute("class", "button_style");
  a.innerHTML= label;
  document.body.appendChild(a);
  return a;
}

export function Create_buttonB(idofIt, label)
{
  let a = document.createElement('button');
  a.setAttribute("id", idofIt); 
  a.setAttribute("class", "button_styleB");
  a.innerHTML= label;
  document.body.appendChild(a);
  return a;
}

export function Create_buttonO(idofIt, label)
{
  let a = document.createElement('button');
  a.setAttribute("id", idofIt); 
  a.setAttribute("class", "button_styleO");
  a.innerHTML= label;
  document.body.appendChild(a);
  return a;
}

/*---------------Index Element maker------------------------------*/

export function Create_index(i,name,link,id)
{
  let a = document.createElement('a');
  a.setAttribute("id", id)
  a.setAttribute("class", "A_G");
  a.setAttribute("href", link);
  document.body.appendChild(a);
  a.innerHTML = i + ". " +name;
}