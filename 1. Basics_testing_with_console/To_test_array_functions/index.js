


let fruits = ["Mango", "Apple", "Berries", "Orange"];
console.log(`Please feel free to check the .js file see the backend codes that I have used. `);
console.log(`The first element of the array is ${fruits[0]}`);
console.log(`The Second element in the array is ${fruits[1]}`);
console.log(`The size of the array is ${fruits.length}`);
fruits.push('Jackfruit');
console.log(`the element now added to the spot 5 is ${fruits[4]}`);
console.log(`I have added one more element to the array using the .push();
Now the length of the array is ${fruits.length}
Also the last element in the array is ${fruits[4]}`);

fruits.unshift("Bannana");
console.log(`I have added an another element to the beggening of the array with the unshift();
Now the array Length is ${fruits.length} and the size of the array is ${fruits.length}
The element that I have added to the first is ${fruits[0]}`);

console.log(`This line to is to find the index of berries using the .indexOf()
Testing below
the position of the element berries in the array is ${fruits.indexOf("Berries")}
And it's seem to be woking fine.`);



fruits = fruits.sort();
console.log(`I have used the sort function on the array using the code fruits = fruits.sort();
Now using the below line I will test if it sorted in the alphabetic order. 
The array now is 
${fruits}
Yes, it seems to be working fine. Now let me test the reverse order sorting.`);

fruits = fruits.reverse();
console.log(`I have used the code fruits = fruits.reverse(); to sort the array in the reverse order.
Below line is to test if it's working or not. 
the array now is ${fruits}
This one is also working. Great!
`);

fruits.pop();
console.log(`I have used the code fruits.pop(); to remove the last element in the array. 
Testing if it's worked using the below line. 
the array now is ${fruits}
it seems the Element Apple at the last is now removed from the array. That did work.`);

fruits.shift();
console.log(`I have used the code fruits.shift(); to remove the first element is the array.
Testing if it's worked using the below line
the array now is ${fruits}
it seems the first element Orange is now removed from the Array. That also did work.`);
