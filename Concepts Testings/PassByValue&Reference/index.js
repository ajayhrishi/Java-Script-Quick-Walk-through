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

obj1 = {a:1,b:3,c:5,f:98,g:235};
obj2 = obj1;

obj2.g = 111;

console.log(obj1);
console.log(obj2);

console.log('................................');
console.log('example of passby value in Object, obj3, obj4');

obj3 = {a:23,b:235,c:23,f:3456,g:25};
obj4 = Object.assign({},obj3); // will prevent pass by reference and use the pass by value

obj4.g = 111;

console.log(obj3);
console.log(obj4);

console.log('................................');
console.log('example of passby value in Object, obj5, obj6 using the spread operator');

obj5 = {a:223,b:545,c:65,f:423,g:78};
obj6 = {...obj5} // will prevent pass by reference and use the pass by value

obj6.g = 6666;

console.log(obj5);
console.log(obj6);
















