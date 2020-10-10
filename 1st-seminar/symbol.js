// 심볼? 을 선언해서
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

// description과 같은지 여부를 출력하고
console.log(symbol1.description); // description은 id가 뜸.
console.log(symbol1 === symbol2); // false가 뜸. 같은 description이어도 다른갑다.

console.log('------------------------');

// 또 심볼을 선언해서
const includes = Symbol('커스텀 includes 함수');

// 원래 array 내장함수인 includes를 바꿔, 걍 its Symbol을 리턴하게 정의함.
Array.prototype[includes] = function(){
    return 'its Symbol';
}

// 실행부
// 
var arr = [1,2,3];
console.log(arr.includes(1));
console.log(arr['includes'](1));
console.log(arr[includes]());