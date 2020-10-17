// 

const promise = new Promise((resolve, reject) => {
    const merong = 'merong';
    // const merong = 'merongasdf';
    if(merong == 'merong'){
        resolve(merong);
    } else{
        reject(merong);
    }
})

promise
    .then((hi) => {
        console.log('OK : ' + hi);
        return hi;
    })
    .then((hi) => {
        console.log('OK2 : ' + hi);
        console.log('OK2 : ' + hi);
        return hi;
    })
    .then((value)=>{
        return new Promise((resolve, reject) =>{
            if(value == 'merong'){
                return resolve('resolved');
            } else{
                return reject('rejected');
            }
        })
    })
    .then((finalValue)=>{
        console.log('final result : ', finalValue);
    })
    .catch((bye) =>{
        console.error('error : ' + bye);
    });