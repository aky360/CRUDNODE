
var x = 12;
console.log(x)       //12

console.log(window.x)

// var is functional scope 
function abc(){
    var x = 90;
    console.log(x)     //90
}

abc()
console.log(x)         //12

// var is always global scope in js and not a blocked scope like in {} e.g. if block
// this is because the var type is always append in window
if(10>2){
    var y = 34;
    console.log(y);  //34
}
console.log(y)    // 34
