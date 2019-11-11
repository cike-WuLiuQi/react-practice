namespace a {
    interface Person {
        xx: string,
        yy: string
    }

    function enhancer(target: any) {
        target.prototype.xx = 'xx'
    }

    @enhancer
    class Person {
        constructor() { }
    }

    let p = new Person()
    console.log(p.xx);

}