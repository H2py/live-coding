/*
객.체

*/
let yuJin={
    name:'안유진',
    group: '아이브',
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}
console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';

console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2= {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    dance : function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);

/*
* 객체의 특징
* 1) const로 선언 할 경우 객체 자체를 변경할 수는 없다.
* 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.

*/ 

console.log(object.keys(wonYoung));
console.log(object.values(wonYoung));