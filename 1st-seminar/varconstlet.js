/**
 * var / const / let 실습
 * var는 호이스팅을 할 수 있다. 근데 호이스팅 별로 안좋음.
 * 호이스팅 방지하고자 함수 변수를 코드 상단에 선언하자. => let이랑 const로 대체하자.
 * 그래도 알아야할게, 기존엔 var로 짜여진 라이브러리가 많아서 이해는 하고 있어야 함.
 */

var vv = '123';
console.log(vv); // 123

var vv = '321';
console.log(vv); // 321

let ll = '123';
console.log(ll); // 123

let ll = '321';
console.log(ll); // SyntaxError: Identifier 'll' has already been declared

const cc = '123';
console.log(cc); // 123

const cc = '321';
console.log(cc); // SyntaxError: Identifier 'cc' has already been declared

const obj = {

}
obj.text = 'merong';
console.log(obj.text); // merong -> 오브젝트는 const에서 예외적으로 에러 안뜨고 잘 나온다.