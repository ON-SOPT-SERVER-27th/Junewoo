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

var countries = ['Korea', 'Japan', 'China'];
console.log(countries.sort((a,b)=>a>b?1:-1));
console.log(countries.sort(function(a,b) {returna.localeCompare(b);}));
console.log('오름차순 정렬:', concatArr.sort((a,b)=>a-b));
console.log('내림차순 정렬:', concatArr.sort(function(a,b){return b-a}));

var number = [100,234,-125,1,23,-634,234,7,4,7,2];
var minusNumber = number.filter(item=>item<0);
console.log('minusNumber: ', minusNumber);

var countries = ['Korea', 'Japan', 'China'];
var countriesLengths = countries.map(item=>item.length);
console.log('countriesLengths: ', countriesLengths);

var number = [1,2,3,4,5,6,7,8,9,10];
var sum = number.reduce((previousValue, currentValue)=>{
    console.log(`previousValue : ${previousValue}, currentValue: ${currentValue}`);
    return previousValue + currentValue;
});

console.log('sum= ', sum);

var serverPart = ['김현기','석영현','강준우','송정우','신지혜','이영은','이진호'];
let serverIndexStr = '서버파트 여러분 번호 한번 샐게요!';
let serverPartMemberNameStr = '섭파트 여러분 이름 한번씩만 불러주세요~';

for(let item in serverPart){
    serverIndexStr += item + '!';
}
console.log(serverIndexStr);

for(let item of serverPart){
    serverPartMemberNameStr += item + '!';
}
console.log(serverPartMemberNameStr);

serverPart.forEach(item=>{
    console.log(item);
});