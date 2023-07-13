console.log('example of passby reference in Array');

let a = [2,34,5,23,123];
let b = a.concat();

b.push(23);
// values will be added to both arrays a and b, becuase 
             // of the pass by reference. 

console.log(b);
console.log(a); 

console.log('................................');
console.log('example of passby value in Array');


let d = [234,23,12,53,36];
let e = d.concat();

e.push(2222);
// values will be added to both arrays a and b, becuase 
             // of the pass by reference. 

console.log(d);
console.log(e); 

console.log('Here we have used the pass by value using the d.concate()');

console.log('................................');
console.log('example of passby reference in Object, obj1, obj2');

let obj1 = {a:1,b:3,c:5,f:98,g:235};
let obj2 = obj1;

obj2.g = 111;

console.log(obj1);
console.log(obj2);

console.log('................................');
console.log('example of passby value in Object, obj3, obj4');

let obj3 = {a:23,b:235,c:23,f:3456,g:25};
let obj4 = Object.assign({},obj3); // will prevent pass by reference and use the pass by value

obj4.g = 111;

console.log(obj3);
console.log(obj4);

console.log('................................');
console.log('example of passby value in Object, obj5, obj6 using the spread operator');

let obj5 = {a:223,b:545,c:65,f:423,g:78};
let obj6 = {...obj5} // will prevent pass by reference and use the pass by value

obj6.g = 6666;

console.log(obj5);
console.log(obj6);

console.log('..................................');
console.log('To do the deep copy');

let obj7 = {a:34,b:67,c:16,f:72,g:334};
let obj8 = JSON.parse(JSON.stringify(obj7));

obj8.g = 3333;

console.log(obj7);
console.log(obj8);















