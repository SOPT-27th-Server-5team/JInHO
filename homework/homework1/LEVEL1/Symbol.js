const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1.description);
console.log(symbol1 === symbol2);   //각각의 심볼마다 description은 같지만 고유한 값을 가지고 있어서 false

console.log('----------');

const includes = Symbol('커스텀 includes 함수');

Array.prototype[includes] = function(){
    return 'its Symbol';
}

var arr = [1, 2, 3];
console.log(arr.includes(1));
console.log(arr['includes'](1));
console.log(arr[includes]());