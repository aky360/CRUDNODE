// ...spread operator 

let greeting = "Hello EveryOne";
let charList = [...greeting]
console.log(charList)              // [ 'H', 'e', 'l', 'l', 'o', ' ', 'E', 'v', 'e', 'r', 'y', 'O', 'n', 'e' ]


let arr1 = ["amazon", "google"];
let arr2= ["facebook", "instagram"];
let arr3 = [...arr1, ...arr2];
console.log(arr3)                       // [ 'amazon', 'google', 'facebook', 'instagram' ]



let obj1 = {name:"ak", age:25, date:"19/9/22"}
let obj2 = {name:"salesforce", age:10,"hello":"hi"}

let obj3 = {...obj1, ...obj2}
let obj4 = {...obj2, ...obj1}

console.log(obj3)                            // { name: 'salesforce', age: 10, date: '19/9/22', hello: 'hi' }
console.log(obj4)                            // { name: 'ak', age: 25, hello: 'hi', date: '19/9/22' }



// Shallow copy 
var arr10 = ['a', 'b', 'c']
var arr11 = [...arr10]
arr11.push("salesforce")
console.log(arr10)                           // [ 'a', 'b', 'c' ]
console.log(arr11)                           // [ 'a', 'b', 'c', 'salesforce' ]



// Nested copy
var arrObj = [
        {name:"lwc"},
        {name:"salesforce"}
    ]
/*
var arrObj1 = [...arrObj]
console.log(arrObj1)
arrObj1[0].name = "superman"
console.log(arrObj1)                                   // [ { name: 'lwc' }, { name: 'salesforce' } ]
console.log(arrObj)                                    // [ { name: 'lwc' }, { name: 'salesforce' } ]
*/

// hack for nested copy
var arrObj1 = JSON.parse(JSON.stringify(arrObj))
arrObj1[0].name = "superman"
console.log(arrObj1)                                   // [ { name: 'superman' }, { name: 'salesforce' } ]
console.log(arrObj)                                    // [ { name: 'lwc' }, { name: 'salesforce' } ]

