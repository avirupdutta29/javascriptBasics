var name = '29';
let number = 29.92;
let isApproaved = true
let firstName = undefined;
let person = {
    firstName : "Avirup",
    lastName: "Dutta"
}
console.log("My name is = "+name);
console.log("Type of name = "+typeof(name));
console.log("Type of number = "+typeof(number));
console.log("Type of isApproaved = "+typeof(isApproaved));
console.log("Type of firstName = "+typeof(firstName));
console.log("First name is = "+person.firstName);
console.log("Last name is = "+person.lastName);
person['firstName']='Hrithik';
person['lastName']= 'Roshan';
console.log("First name is = "+person.firstName);
console.log("Last name is = "+person.lastName);

