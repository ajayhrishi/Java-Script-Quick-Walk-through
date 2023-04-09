/*-------------------------------------------------------------------------------*/
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
/*-------------------------------------------------------------------------------*/
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

/*----------------------Input Boxes------------------------------*/

export function Create_inputbox(idofIT) {
  const p = document.createElement('input');
  p.type = 'text';
  p.setAttribute("class", "inputbox");
  p.setAttribute("id", idofIT);
  return p;
}
export function Create_inputboxN(idofIT) {
  const p = document.createElement('input');
  p.type = 'text';
  p.setAttribute("class", "inputboxN");
  p.setAttribute("id", idofIT);
  return p;
}


/*-------------------------------------------------------------------------------*/
export function Use_Output(p1, templateliteral){

    p1.innerHTML = templateliteral;
    document.body.appendChild(p1);
}







/*-------------------------------------------------------------------------------*/