let FullName, firstname, lastname;

FullName= "Ajay Hrishi";
firstname = FullName.slice(0,FullName.indexOf(" "));
console.log(firstname);
lastname=FullName.slice(FullName.indexOf(" "));
console.log(lastname);

