// declare const $: (selector: string) => {
//     click(): void
//     width(length: number): void
// }
// $('#root').click()
// $('#root').width(1)

namespace a {
    declare let name: string;
    declare let age: number;
    declare function getName(name: string): string
    declare class Person { }
}


namespace b {

    declare const enum Seasons {
        Spring,
        Summer,
        Autumn,
        Winter
    }

    let seasons = [
        Seasons.Spring,
        Seasons.Summer,
        Seasons.Autumn,
        Seasons.Winter
    ];
    console.log(seasons);
}


declare namespace person {
    let name: string;
    function getName(name: string): string
    namespace fn {
        function getAge(age: number): number
    }
}
