// 중학교 -> 고등학교 -> 대학교
const 자퇴 = true;
const middleSchool = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`중학교`);
  }, 1000)
});

const highSchool = school => new Promise((resolve, reject) => {
  if (자퇴) {
    setTimeout(() => {
      reject(new Error('에러!'));
    }, 1000)
  } else {
    setTimeout(() => {
      resolve(`${school} => 고등학교`);
    }, 1000)
  }
})

const univ = school => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`${school} => 대학교`);
  }, 1000)
})

async function schoolProcess(){
  try{
    const middle = await middleSchool();
    const high = await highSchool(middle);
    const university = await univ(high);
    console.log(university);
  } catch(err){
    console.error(err);
  } finally{
    console.log('어쨌거나 저쨌거나 실행');
  }
  
}
schoolProcess();

// middleSchool() //
//   .then(school => highSchool(school))
//   .catch(err => {
//     return `검정고시`;
//   })
//   .then(school => univ(school))
//   .then(result => console.log(result))
//   .catch(error => console.error(error));

// 오랜 시간이 걸리는 작업같은 경우에, 비동기로 처리해야 하는 것이