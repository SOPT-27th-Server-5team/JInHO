var arr1 = [];
console.log(arr1);
console.log(typeof arr1);

var arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);
console.log(typeof arr2);

var arr3 = ['이진호', 1, 2, 3, null, {name: 'jh', age: 27}];
console.log(arr3);
console.log(typeof arr3);

console.log('***** Array 기본 함수들을 알아보자 *****');
var arr = [1, 2, 3, 4];

// length : 길이를 리턴
console.log(`arr의 길이 : ${arr.length}`);

// push : 맨 뒤 인덱스에 원소 추가, pop : 맨 뒤 인덱스의 원소 제거
arr.push('new item');
console.log('arr push : ', arr);
arr.pop();
console.log('arr pop : ', arr);

// shift : 맨앞인덱스의 원소를 제거하고 한칸씩 떙긴다, unshift : 맨앞 인덱스의 원소를 추가하고 하나씩 오른쪽으로 민다.
arr.unshift('first item');
console.log('arr unshift : ', arr);
arr.shift();
console.log('arr shift : ', arr);

// includes : 매개변수가 배열에 포함되어 있는지 리턴하는 함수
console.log('arr.includes(4) : ', arr.includes(4)); // true
console.log('arr.includes(1000) : ', arr.includes(1000));   // false

// indexOf : 매개변수가 배열에 포함되있다면 처음 존재하는 인덱스를 반환, 없다면 -1 반환
console.log('arr.indexOf(4) : ', arr.indexOf(4));
console.log('arr.indexOf(1000) : ', arr.indexOf(1000));

// concat : 배열을 합쳐준다.(매개변수로 받은 배열을 뒤로 붙인다.)
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var concatArr = arr1.concat(arr2);
console.log('arr1.concat(arr2) : ', concatArr);

// join : 배열의 모든 요소를 연결해 하나의 문자열로 만든다.(join()실행시 ,가 추가된다.)
var location = ["서울", "대전", "대구", "부산"];
console.log(location.join('->'));

// reverse : 배열의 모든 원소들을 역순으로 바꾼다.
console.log(location.reverse().join('->'));

// sort
var countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a, b) => a > b ? 1 : -1));  // 제대로 정렬되지 않음.
console.log(countries.sort(function(a, b){return a.localeCompare(b);}));    // 제대로 정렬됨.(유니코드 기준으로 정렬)
console.log('오름차순 정렬 : ', concatArr.sort((a, b) => a - b));
console.log('내림차순 정렬 : ', concatArr.sort(function(a, b){return b-a;}));

// filter : 배열 요소 전체를 대상으로 조건을 걸어서 그 조건을 충족하는 결과를 새로운 배열로 반환함.
var number = [100, 234, -125, 1, 23, -637, -123, 99, 2, 3, 4, 5];
var minusNumber = number.filter(item => item < 0);
console.log('minusNumber : ', minusNumber);

// map : 배열 요소 전체를 대상으로 함수를 호출하고, 그 결과를 새로운 배열로 반환함.
var countries = ['Österreich', 'Andorra', 'Vietnam', 'Korea', 'China'];
var countriesLengths = countries.map(item => item.length);
console.log('countriesLengths : ', countriesLengths);

// reduce : map은 배열을 반환할 때 사용, reduce는 값 하나를 반환할 때 주로 사용
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = number.reduce((previousValue, currentValue) => {
    console.log(`previousValue : ${previousValue}, currentValue : ${currentValue}`);
    return previousValue + currentValue;
});
console.log('sum : ', sum);

// 배열 순회
var serverPart = ['김현기', '석영현', '강준우', '송정우', '신지혜', '이영은', '이진호'];
let serverIndexStr = '서버파트 여러분 번호 한번 세겠습니다. "';
let serverPartMemberNameStr = '서버파트 여러분 이름 한번씩만 불러주세요~ "';

for(let item in serverPart){
    serverIndexStr += item + '! ';
}
console.log(serverIndexStr);

for(let item of serverPart){
    serverPartMemberNameStr += item + '! ';
}
console.log(serverPartMemberNameStr);

serverPart.forEach(item => {
    console.log(item);
});