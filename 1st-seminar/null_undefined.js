let nothing = null;
console.log(`nothing : ${nothing}, type: ${typeof nothing}`); // object -> ecmascript 설계상 오류 ㅋㅋㅋㅋ
let x;
console.log(`x : ${x}, type: ${typeof x}`); // undefined

// null vs undefined
console.log('null vs undefined');
console.log('null === undefined: ', null===undefined); // 정확히 같은 건 아닌데
console.log('null == undefined: ', null==undefined); // 결국 둘 다 없는값이긴 함.