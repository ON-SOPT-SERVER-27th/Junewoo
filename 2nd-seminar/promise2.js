const 자퇴 = true;

const middleSchool = () => new Promise ((resolve, reject) => {
  setTimeout(()=>{
    console.log('중학교를 졸업합니다');
    resolve('중학교');
  }, 1000)
});

const highSchool = school => new Promise ((resolve, reject) => {
  if(자퇴){
    console.log(`${school}까지만 다니기로 했습니다.`);
    reject(school);
  } else{
    setTimeout(()=>{
      console.log('고등학교를 졸업합니다.');
      resolve('고등학교');
    }, 1000)
  }
  
});

const univ = school => new Promise ((resolve, reject) => {
  if(자퇴){
    console.log(`${school}까지만 다니기로 했습니다.`);
    reject(school);
  }
  setTimeout(()=>{
    console.log('대학교를 졸업합니다.');
    resolve('대학교');
  }, 1000)
});


middleSchool()
  .then(school => highSchool(school))
  .then(school => univ(school))
  .then(result => console.log(`${result} 졸업한 당신은 척척학사! 대학원 생각이 없으신가요?`))
  .catch(error => console.error(`최종학력 : ${error}`));