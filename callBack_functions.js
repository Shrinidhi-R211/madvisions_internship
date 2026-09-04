

function hello(name, callback){
    console.log(`hello ${name}`);
    callback(25);
};

function age(age){
    console.log(`This year you are ${age} years old`);
};

hello( "Shrindhi" , age);

function x(y){
    console.log(`this is x function `);
    y();
};

function y (){
    console.log("the whole function y is being passed as an argument for x function ");
};

setTimeout(() => {
    console.log("this is starting after 5000ms");
        x(y);
}, 5000);