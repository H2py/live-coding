/**
 * Super and Override
 */

class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}

class FemaleIdolModel extends IdolModel{
    
    part;

    constructor(name, year, part){
        super(name, year); //부모 클래스를 super라고 칭함, 부모에서 가져왔다는 뜻
        this.part = part;
    }

    sayHello(){
        return `안녕하세요 ${this.name}이고, ${this.part}를 맡고 있습니다.`
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());