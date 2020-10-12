hoistFunction();

function hoistFunction(){
    console.log(x); // undefined
    var x = 'var';
    console.log(x); // var
}