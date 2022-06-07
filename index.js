function receivesAFunction (callback){
    callback();
}

function returnsANamedFunction(){
    return function fn(){
    }
    
}
function returnsAnAnonymousFunction(){
    return () => console.log("fn is an anonymous function")
}
