/*----The below functions are for creating different R elements-----------------*/
export function Create_R(idofIT) {
    let p = document.createElement("p");
    p.setAttribute("class", "R");
    p.setAttribute("id", idofIT);
    return p;
  }
export function Create_RB(idofIT) {
    let p = document.createElement("p");
    p.setAttribute("class", "RB");
    p.setAttribute("id", idofIT);
    return p;
  }
export function Create_RY(idofIT) {
    let p = document.createElement("p");
    p.setAttribute("class", "RY");
    p.setAttribute("id", idofIT);
    return p;
  }
export function Create_RG(idofIT) {
    let p = document.createElement("p");
    p.setAttribute("class", "RG");
    p.setAttribute("id", idofIT);
    return p;
  }
export function Create_RR(idofIT) {
    let p = document.createElement("p");
    p.setAttribute("class", "RR");
    p.setAttribute("id", idofIT);
    return p;
  }

/*----The below functions are for creating heading elements ----------------*/
  export function Create_MH(idofIT) {
    let p = document.createElement("p");
    p.setAttribute("class", "MH");
    p.setAttribute("id", idofIT);
    return p;
  }

  export function Create_H(idofIT) {
    let p = document.createElement("p");
    p.setAttribute("class", "H");
    p.setAttribute("id", idofIT);
    return p;
  }
  export function Create_sH(idofIT) {
    let p = document.createElement("p");
    p.setAttribute("class", "sH");
    p.setAttribute("id", idofIT);
    return p;
  }
/*-----To make different output lines with background colors------------------------------*/
export function Create_A(idofIT) {
  let p = document.createElement("p");
  p.setAttribute("class", "A");
  p.setAttribute("id", idofIT);
  return p;
}
export function Create_A_Y(idofIT) {
  let p = document.createElement("p");
  p.setAttribute("class", "A_Y");
  p.setAttribute("id", idofIT);
  return p;
}
export function Create_A_B(idofIT) {
  let p = document.createElement("p");
  p.setAttribute("class", "A_B");
  p.setAttribute("id", idofIT);
  return p;
}
export function Create_A_R(idofIT) {
  let p = document.createElement("p");
  p.setAttribute("class", "A_R");
  p.setAttribute("id", idofIT);
  return p;
}
export function Create_A_G(idofIT) {
  let p = document.createElement("p");
  p.setAttribute("class", "A_G");
  p.setAttribute("id", idofIT);
  return p;
}
/*---------------To make Input Boxes------------------------------*/

export function Create_inputbox(idofIT, placeholded) {
  let p = document.createElement('input');
  p.type = 'text';
  p.setAttribute("class", "inputbox");
  p.setAttribute("id", idofIT);
  if (placeholded !=""){
    p.setAttribute("placeholder", placeholded);}
  document.body.appendChild(p);
  return p;
}
export function Create_inputboxN(idofIT, placeholded) {
  const p = document.createElement('input');
  p.type = 'text';
  p.setAttribute("class", "inputboxN");
  p.setAttribute("id", idofIT);
  if (placeholded !=""){
    p.setAttribute("placeholder", placeholded);}
  document.body.appendChild(p);
  return p;
}

export function Create_radiobutton(idofIT, names) {
  let p = document.createElement('input');
  p.type = 'radio';
  p.setAttribute("id", idofIT);
  p.setAttribute("name", names);
  document.body.appendChild(p);
  return p;
}
export function Create_Checkbox(idofIT) {
  let p = document.createElement('input');
  p.type = 'checkbox';
  p.setAttribute("id", idofIT);
  document.body.appendChild(p);
  return p;
}
/*-------------------------------------------------------------------------------*/
export function Use_Output(p1, templateliteral){
    p1.innerHTML = templateliteral;
    document.body.appendChild(p1);
}
/*--------------------To create new line between the elements-----------------------*/
export function Create_brn(idofIT) {  
  let p = document.createElement("pre");
  p.setAttribute("id", idofIT);
  p.setAttribute("style", "font-size: 1px");
  p.innerHTML = "<br>";
  document.body.appendChild(p);
  return p;
}
export function Create_br(idofIT) {
  let p = document.createElement("pre");
  p.setAttribute("id", idofIT);
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