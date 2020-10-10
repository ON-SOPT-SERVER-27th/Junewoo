// 확실히 생성자보다는 괄호 많이 쓰는듯.
var arr1 = [];
console.log(arr1);
console.log(typeof arr1);

var arr2 = new Array(1,2,3,4,5);
console.log(arr2);
console.log(typeof arr2);

var arr3 = ['강준우', 1, 2, 3, null, {name:'jw', age:24}];
console.log(arr3);
console.log(typeof arr3);

console.log('**** Array 기본 함수들을 araboza ****');
var arr = [1,2,3,4];

console.log(`arr 길이 : ${arr.length}`);

arr.push('new item');
console.log('arr push : ', arr);
arr.pop();
console.log('arr pop : ', arr);

arr.unshift('first item');
console.log('arr unshift : ', arr);
arr.shift();
console.log('arr shift:', arr);

console.log('arr.includes(4):', arr.includes(4));
console.log('arr.includes(1000)', arr.includes(1000));

console.log('arr.indexOf(4):', arr.indexOf(4));
console.log('arr.indexOf(100)', arr.indexOf(100));

var arr1 = [1,2,3];
var arr2 = [4,5,6];
var concatArr = arr1.concat(arr2);
console.log('arr1.concat(arr2): ', concatArr);

var location = ['서울', '대전', '대구', '부산'];
console.log(location.join('->'));

console.log(location.reverse().join('->'));

// 아래거 마저 써보자.