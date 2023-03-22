window.onload = function() {
let Pi = 3.14159;
let radius ; 
let surface_area;

radius =window.prompt("Enter the radius of the circle: ");
radius= Number(radius);

surface_area = radius*2*Pi;
console.log("The surface area of the circle is: ", surface_area);

}