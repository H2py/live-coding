/**
 * 상속은 객체들 간의 관계를 구축하는 방법이다.
 * 수퍼클래스 혹은 부모 클래스 등의 기존의 클래스로부터
 * 속성과 동작을 상속받을 수 있다.
 * 
 * 
 */

class IdolMode{
    name;
    year;

    constructor(name, year){
        this.name=name;
        this.year=year;
    }
}

class FemaleIdolModel extends IdolModel{
    dance(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

class MaleIdolModel extends IdolModel {
    sing(){
        return `남자 아이돌이 노래를 부릅니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.year);