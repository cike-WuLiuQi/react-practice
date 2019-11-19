namespace a {
    interface LabelledValue {
        label: string;
    }

    function printLabel(labelledObj: LabelledValue) {
        console.log(labelledObj.label);
    }

    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
}

// 结构类型系统
namespace b {
    // 基本类型的兼容
    let num!: string | number | boolean
    let str!: string | number
    // num = str
    // str = num

    // 函数兼容
    type sunFunc = (a: number, b: number) => number
    let sum: sunFunc
    function fn1(a: number, b: number): number {
        return 1
    }
    sum = fn1

    // 类的兼容性
    class Animal {
        name!: string
    }

    class Bird extends Animal {
        // constructor(public swing: number) {
        //     super(name)
        // }
        fly!: number
    }

    let a: Animal
    a = new Bird()
    let b: Bird
    // b = new Animal()
    // 接口兼容
    // 如果传入的参数，比定义的接口还要多是可以的，但是不能少
    interface Animal {
        name: string
        age: number
    }

    interface Person {
        name: string
        age: number
        gender: number
    }

    function getName(animal: Person): string {
        return animal.name
    }
    let p = {
        name: 'ceshi',
        age: 10,
        gender: 0
    }

    getName(p)

    type logFunc = (num: string | number) => void
    let log: logFunc
    function log1(num: string | number | boolean): void {

    }

    log = log1
    // 泛型兼容

    interface Empty<T> { }
    let x!: Empty<string>
    let y!: Empty<number>
    x = y

    interface NotEmpty<T> {
        data: T
    }

    let x1!: NotEmpty<string>
    let y1!: NotEmpty<number>
    // x1 = y1
    // 枚举兼容

}