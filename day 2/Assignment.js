
// Console log method
console.log('abc');
console.log(1);
console.log(true);
console.log(null);
console.log(undefined);
console.log([1,2,3,4]);
console.log({a:1 , b:2});

//console error method
console.error('This is a simple error');

//console waring method
console.warn('This is warning');

//console clear method
// console.clear();

//console time and end time

console.time('abc');

let fun = function()
{
    console.log('fun is running');
}

let fun2 = function()
{
    console.log('fun2 is running');
}

fun();
fun2();
console.timeEnd('abc');

// console table
console.table({'a':1, 'b':2});

//console count
for(let i=0;i<5;i++)
{
    console.count(i);
}


//differnce between var,let & const
// calling x after definition 

var x = 5; 
document.write(x, "\n"); 

// calling y after definition  
let y = 10; 
document.write(y, "\n"); 

// const x= 2;

//datatype
let n = 123;
console.log(n);

let str = "Hello";
console.log(str);

let ageFieldCheck =true;
console.log(ageFieldCheck);

let age = null;
console.log(age);

let name;
console.log(name);