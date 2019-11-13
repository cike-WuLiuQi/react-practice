namespace a {
    // 需要在函数名之后生命泛型
    function createArray<T>(length: number, value: T): Array<T> {
        let result: T[] = []
        for (let i = 0; i < length; i++) {
            result[i] = value

        }
        return result
    }
    let result = createArray<number>(3, 2)
    console.log(result);

    class Person {
        private age: number = 28
        getAge() {
            return this.age
        }
    }

    let p = new Person()

    console.log(p.getAge());



    // 泛型类

    class MyArray<T> {
        private list: T[] = []
        addList(value: T): void {
            this.list.push(value);
        }

        getMax(): T {
            // 此时不知道T的类型，不能调用这个方法
            // return Math.max(...this.list)
            let max = this.list[0]
            for (let i = 1; i < this.list.length; i++) {
                const element = this.list[i];
                if (element > max) {
                    max = element
                }
            }
            return max
        }
    }

    let arr = new MyArray()
    arr.addList(3)
    console.log(arr.getMax());

    // 泛型接口
    interface Calculate {
        <T>(a: T, b: T): T
    }

    let add: Calculate = function <T>(a: T, b: T): T {
        return a
    }

    add<number>(1, 2)

    // 多个泛型参数
    function swap<A, B>(a: A, b: B) {
        return a
    }

    console.log(swap<string, number>('a', 2));


    // 默认泛型类型
    function createArray1<T = number>(length: number, value: T): Array<T> {
        let result: T[] = [];
        for (let i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }

    console.log(createArray1(2, '1'));
    console.log(createArray1(3, 3));

    // 泛型约束
    // function logger<T>(value: T) {
    //     console.log(value.length);

    // }

    interface LengthWise {
        length: string
    }
    function logger<T extends LengthWise>(value: T) {
        console.log(value.length);

    }

    // 泛型接口
    interface Cart<T> {
        list: T[]
    }

    let createCart: Cart<{ name: string, price: number }> = {
        list: [{ name: 'zhuangeng', price: 10 }]
    }

    type name = string

    function loggerName(name: name) {
        console.log(name);
        
    }

    loggerName('lee')

    // function createCart(list: Cart<number>) {
    //     return list
    // }

}