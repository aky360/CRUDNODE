
async function funAs(){
    return "this is async funciton ";
}

var x = ()=>{
    console.log("this is log fun ");
    return "this function is running when the function is resolved ";
}

var y = ()=>{
    console.log("this is log fun2 ");
    return "this is running when the error is comming on the rejects ";
}


function funAss(){
    return new Promise(function(function1, function2){
        setTimeout(()=>{
            var error = false;
            if(!error){
                function1();
            }
            else{
                function2();
            }
        }, 1000);
    });
    return "this is async function ";
}


//this is first method to run the promises  
funAs().then(function(){
    x();
    console.log("this resolve ");
}).catch(function(){
    y();
    console.log("this reject ");
});


//this is to understand the concept of promises
funAss().then(function(){
    console.log("this is the resolve function callback ");
}).catch(function(error){
    console.log("this is the reject function callback ");
});
