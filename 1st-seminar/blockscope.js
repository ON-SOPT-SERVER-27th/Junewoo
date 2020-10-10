/**
 * 
 */

if(true){
    var x = 'var'; // 어디서든 접근가능
}

console.log(`var: ${x}`); // 잘 나오는데

if(true){
    let y = 'let'; // 블록 안에서만 접근가능
}
console.log(`let : ${y}`); // 에러 뜸.


function colorFunc(){
    if(true){
        var color = 'blue';
        console.log(color);
    }
}

colorFunc();