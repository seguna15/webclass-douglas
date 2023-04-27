// JS variables are container for storing data
/* there are two ways to store variables in js 
1) var 
2) let  */

//*** Differences between var & let
//** 1) Var allows redundant declaration while let does not, redundant declarations means variable redeclaration 

var a = 10;
var a = 20;

let b = 10;
//let  b = 20;  Uncaught SyntaxError: Identifier 'b' has already been declared

//** Scope: var has a function scope while let has a block scope */

function greet1(){
    var greeting = "good morning";
    var day = "afternoon";
    console.log(`greeting from outside before the var if block: ${greeting}`);
    if(day == "afternoon"){
        var greeting = "good afternoon";
        console.log(`greeting from inside the var if block: ${greeting}`);
    }

    console.log(`greeting from outside after the var if block: ${greeting}`);
}

function greet2(){
    let greeting = "good morning";
    let day = "afternoon";
    console.log(`greeting from outside before the let if block: ${greeting}`);
    if(day == "afternoon"){
        let greeting = "good afternoon";
        console.log(`greeting from inside the let if block: ${greeting}`);
    }

    console.log(`greeting from outside after the let if block: ${greeting}`);
}

greet1();
greet2();

//* Hoisting: hoisting describes a variable been taken to the top of it scope. Var supports this phenomenon while let does not. In the example below no matter how deeply nested var is, it will still be accessible in the body function whereas let will only be available within its scope */
function nestedScopeTest() {
    // var functionVariable;
    if (true) {
        var functionVariable = 1;
        let blockVariable = 2;

        console.log(functionVariable); // will print 1
        console.log(blockVariable); // will print 2

        if (true) {
            let blockVariable2 = 3;
            console.log(functionVariable); // will print 1
            console.log(blockVariable); // will print 2
            console.log(blockVariable2); // will print 3
        }
        //console.log(blockVariable2); // will throw an error
    }
    console.log(functionVariable); // will print 1
    //console.log(blockVariable); // will throw an error
}


nestedScopeTest();

//** Global level: var lets you reference a value at the global level whereas let does not */
var num1 = 10;
let num2 = 20;

function add (){
    console.log(this.num2); // undefined
    console.log(`Var: ${this.num1 + 5}`); //window.num1 + 5;
    console.log(`Let: ${this.num2 + 5}`); // undefined: because we are trying to add undefined to a number
}
add();
