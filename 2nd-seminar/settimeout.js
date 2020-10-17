console.log('start');
setTimeout(() => {
    console.log('wait 3 seconds') ;
}, 3000);
console.log('end');

console.log('start');
setTimeout(() => {
    console.log('wait 0 seconds') ;
}, 0);
console.log('end');