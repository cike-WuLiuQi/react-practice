namespace a {
    // 抽象类不能创建实例，只能被继承
    abstract class Animal {
        name!: string
        // 抽象方法无法再抽象类中创建
        // 只能在抽象类中的子类中实现，且必须实现
        abstract getName(): string
    }

    // let animal = new Animal()

    class Cat extends Animal {
        getName(): string {
            return this.name
        }
    }

    let cat = new Cat()
    cat.name = '猫'
    console.log(cat.getName());


    interface Pointer {
        x: number
        y: number
    }

    let p: Pointer = { x: 1, y: 2 }

    interface Speakable {
        speak(): void
    }

    interface Eatable {
        eat(): void
    }

    // 类可以实现多个接口，只能继承一个类
    class Person implements Speakable, Eatable {
        speak() { }
        eat() { }
    }

    let person = new Person()
    // person.
}

namespace b {
    class Animal {
        static eat(): void {

        }

        getName(): void {

        }
    }

    class Cat extends Animal {
        constructor() {
            super()
        }
        eat() {
            super.getName()
        }
    }
}


namespace c {
    interface PlainObject {
        // 任意属性
        [propName: string]: number
    }
    let obj: PlainObject = {
        x: 1,
        y: 2
    }

    // 接口的继承
    interface Speakable {
        speak(): void
    }

    interface SpeakChinese extends Speakable {
        speakChinese(): void
    }
    // 实现继承的接口时，需要同时实现接口本身和父亲的方法

    class Speak implements SpeakChinese {
        speak() { }
        speakChinese() { }
    }
}

namespace d {
    interface Person {
        readonly id: number
        name: string
    }

    let tom: Person = {
        id: 1,
        name: 'tom'
    }
    // tom.id = 2
}

namespace e {
    interface Discount {
        (price: number): number
    }

    // function cost1: Discount(price) {
    //     return price
    // }

    let cost: Discount = function (price) {
        return price
    }
}

namespace f {
    interface WithClass {
        // Person 修饰的是实例属性
        new(name: string): Person
    }
    class Animal {
        constructor(public name: string) {

        }
    }

    class Person {
        constructor(public age: string) {

        }
        // age() {}

    }

    function createAnimal(clazz: WithClass, name: string) {
        return new clazz(name)
    }

    let a = createAnimal(Animal, 'zhufneg')
}

