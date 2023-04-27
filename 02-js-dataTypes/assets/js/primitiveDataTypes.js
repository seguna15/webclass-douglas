//**Primitive datatypes hold just one value
//* Number: this can either integer values i.e whole numbers OR floats i.e fractional values
let num1 = 10;
let num2 = 3.145;
let num3 = 1;
//*  typeof operator is used check the data type of a variable
//alert(typeof num2);

//* String: this is a sequence of characters enclosed in single quote '', double quote "", or backticks ``

let myString1 = 'Hello';
let myString2 = "Douglas";
let myString3 = `${myString1} ${myString2}`; 
//alert(myString3);

//Boolean: this is a true or false value, usually the result of a logical or comparison operation.
let myBool1 = true;
let myBool2 = false;

//alert(typeof myBool2);
/* let x = parseInt(prompt('Enter the value of x?'));

if( x > 5){
    alert('Hi');
}else{
    alert('Hello');
} */ 

//Null: this is not an empty value or the absence of a value rather it a value that is unknown yet

let formError = null;

/* let username = prompt('Enter your preferred username?');

if(username.length < 6){
    formError = 'sorry your username should be more than 6';
}

if(!formError){
    alert(`Welcome ${username}`);
}else{
    alert(formError);
} */

//*undefined: a variable declared without a value

let myUndef;
//alert(`type of myUndef is ${typeof myUndef}`);

//* Symbol: this is a unique identifier, it is mostly used as the value of id property in objects.

let mySymb1 = Symbol('Apple');
let mySymb2 = Symbol('Apple');

//alert(mySymb1 == mySymb2);

const user1 = {
    id: Symbol(1),
    name: 'John Doe',
    role: 'Backend Dev',
};

const user2 = {
  id: Symbol(1),
  name: "Jane Doe",
  role: "Frontend Dev",
};

//alert(user1.id === user2.id);

/*
* Type conversion using object wrappers. Every primitive type has their object wrapper. The object wrapper is starts with a capital letter and ends with a parenthesis, essentially, a constructor.
*/

//Implicit conversion: this is done by the JS engine.

let sum1  = 2  + '3'; //23 number value  2 will be implicitly converted into string
let sum2 = 4 - '3'; //1 string 3 is implicitly converted to string

//Explicity conversion
let myNum = 10;
//alert(typeof String(myNum));

let myString4 = '16';
/* alert(typeof myString4);
alert(typeof Number(myString4)); */

let myBool3 = true;
alert(typeof myBool3);
alert(typeof Number(myBool3));

