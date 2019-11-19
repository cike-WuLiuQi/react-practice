namespace a {
    function num(input: number | string | boolean): void {

        if (typeof input === 'string') {
            input.slice()
        }
    }
}

namespace b {
    // 交叉类型  多个interface的并集
    interface Person {
        name: string,
        speak(): void
    }
    interface Animal {
        name: string
        eat(): void
    }
    type PersonAnimal = Person & Animal
    let p: PersonAnimal = {
        name: 'people',
        eat() { },
        speak() { }
    }
}

namespace c {
    // typeof  推断类型
    let p = {
        name: 'poeple',
        age: 100
    }

    type Person = typeof p;
    let p1: Person = {
        name: 'lee',
        age: 1000
    }
}

// 索引访问操作
namespace d {
    interface Person {
        name: string
        age: number
        job: {
            name: string
        }
        interests: { name: string, level: number }[]
    }
    let p: Person['interests'] = [{ name: 'huahua', level: 1 }]
    let p2: Person['job'] = {
        name: 'lee'
    }

    // keyof

    namespace a {
        interface Person {
            name: string
            age: number
            gender: 'male' | 'female'
            // [propsName: string]: any
        }

        // type PersonKeys = 'name' | 'age' | 'gender'
        type PersonKeys = keyof Person
        function getKey(value: Person, key: PersonKeys): any {
            return value[key]
        }

        let p: Person = {
            name: 'lee',
            age: 1000,
            gender: 'male'
        }
        getKey(p, 'name')

    }
}

// 映射类型
namespace d {
    interface Person {
        name: string
        age: number
        gender: 'male' | 'female'
    }

    // type PartPerson = {
    //     [key in keyof Person]?: Person[key]
    // }

    type PartPerson<T> = {
        [key in keyof T]?: T[key]
    }

    let p: PartPerson<Person> = {
        name: 'zhufeng'
    }

    namespace a {
        interface Person {
            name: string
            age: number
            gender: 'male' | 'female'
        }
        type Partial<T> = {
            [key in keyof T]?: T[key]
        }

        type PartPerson = Partial<Person>
        let p: PartPerson = {
            name: 'lee'
        }
    }

    namespace b {
        interface Person {
            name?: string
            age?: number
            gender?: 'male' | 'female'
        }
        type Required<T> = {
            [key in keyof T]-?: T[key]
        }
        type PartPerson = Required<Person>
        let p: PartPerson = {
            name: 'lee',
            age: 100,
            gender: 'male'
        }
    }

    namespace c {
        interface Person {
            name: string
            age: number
            gender: 'male' | 'female'
        }

        type ReadonlyPerson = {
            readonly [key in keyof Person]: Person[key]
        }

        let p: ReadonlyPerson = {
            name: 'lee',
            age: 10,
            gender: 'male'
        }
        // p.name = 'chao'
    }

    namespace d {
        interface Person {
            name: string
            age: number
            gender: 'male' | 'female'
        }

        type PickPerson = Pick<Person, 'name'>
        let p: PickPerson = {
            name: 'lee'
        }
        // type Pick<T, k extends keyof T> = {
        //     [key in k]: T[key]
        // }
    }

}

// 条件类型
namespace e {
    interface Fish {
        name1: string
    }
    interface Water {
        name2: string
    }
    interface Bird {
        name3: string
    }
    interface Sky {
        name4: string
    }

    type Condition<T> = T extends Fish ? Water : Sky;
    
    let c: Condition<Fish> = {
        name2: 'fish'
    }

   let c1: Condition<Fish | Bird> = {
       name2: 'fish'
   }
   let c2: Condition<Fish | Bird> = {
       name2: 'sky'
   }
}