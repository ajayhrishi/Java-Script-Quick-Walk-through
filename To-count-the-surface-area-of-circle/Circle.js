window.onload = function() {
const PI = 3.14159;  // const used to deny the permission to change the variable value. 
// it will give a little bit of data security and ensure the further codes are not accidently changing this
// .. spesific variable's value. 
let radius ; 
let surface_area;

radius =window.prompt("Enter the radius of the circle: ");
radius= Number(radius);
//PI = 2.355

//PI=2.543
surface_area = radius*2*PI;
console.log("The surface area of the circle is: ", surface_area);

}