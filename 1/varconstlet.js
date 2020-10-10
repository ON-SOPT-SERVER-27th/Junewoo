/**
 * var / const / let 실습
 */

// var vv = '123';
// console.log(vv); // 123

// var vv = '321';
// console.log(vv); // 321

// let ll = '123';
// console.log(ll); // 123

// let ll = '321';
// console.log(ll); // SyntaxError: Identifier 'll' has already been declared

// const cc = '123';
// console.log(cc); // 123

// const cc = '321';
// console.log(cc); // SyntaxError: Identifier 'cc' has already been declared

const obj = {

}
obj.text = 'merong';
console.log(obj.text); // merong -> 오브젝트는 const에서 예외적으로 에러 안뜨고 잘 나온다.