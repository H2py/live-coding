/*
Array Functions

*/

let = iveMembers=[
'안유진',
'가을',
'레이',
'장원영',
'리즈',
'이서',

];

console.log(iveMembers);

//push() 맨 마지막에 넣음
iveMembers.push('코드팩토리');
console.log(iveMembers);
console.log(iveMembers.push('코드팩토리'));

console.log('----------_');

//pop()
console.log(iveMembers.pop());
console.log(iveMembers);

//shift()
console.log(iveMembers.shift());
console.log(iveMembers);

//unshift() 맨 처음에 넣음
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

//splice()
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

//concat() 함수를 새로 생성해서 출력함 => 기본 값 건들지 않음
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

//slice() splice와 흡사하지만, 기존 어레이를 변경하지 않는 것
console.log(iveMembers.slice(0,3));
console.log(iveMembers);

//spread operator
let iveMembers2 ={
    ...iveMembers,
};
consosle.log(iveMembers2);

let iveMembers3 ={
    iveMembers,
};
console.log(iveMembers3);

let iveMembers4 = iveMembers;

console.log(iveMembers4);

//join() 모든 값들을 string으로 엮는 형태임
// 안유진,가을,레이,장원영,리즈,이서 이런 형태
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort()
// 오름차순

iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

//a,b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면(뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
iveMembers.sort()
console.log(iveMembers);


numbers.sort((a,b)=>{
    return a>b ? 1: -1;
});



//map()
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((X)=> {
    if(x=='안유진'){
        return `아이브: ${x}`;
    }else{
        return X;
    }
}));

// filter() 조건에 해당하는 값들을 찾는 함수
number = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

// find() 가장 먼저 해당되는 값만 찾는 함수
console.log(numbers.find((X) => x % 2 === 0));

// findIndex() index값을 반환함 (ex.8의 인덱스 1이니까 1반환)
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce() 초기값 0은 p에 입력이 된다. n은 numbers의 첫번째 값인 1이 들어감 p+n은 p에 반환되며 어레이의 두번째 값인 8이 n에 입력됨
console.log(numbers.reduce((p, n) => p + n,0));

