// 뭐 이렇게 생성자로 할 수 도 있지만
const person = new Object();

person.name='강준우';
person.part = 'server';
person['gender'] = 'male';
person.sayHello = function(){
    console.log(`안녕하세요 ${this.name}입니다.`);
}

console.log(typeof person);
console.log(person);

person.sayHello();

console.log('------------------------');

// 보통 이 객체 리터럴 방식을 많이 사용한다.
const emptyObject = {};
console.log(typeof emptyObject);

const animal = {
    animalType:'dog',
    animalName:'뽀삐',
    animalFriends:['코코','초코','쿠키'],
    bark:function(){
        console.log(`${this.animalName} : 멍멍`);
    },
    thisFriends: function(){
        this.animalFriends.forEach((friend)=>{
            console.log(`${this.animalName}의 친구 : ${friend}`);
        })
    }
};

console.log(animal);
animal.bark();
animal.thisFriends();