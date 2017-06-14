/**
 * `Iterator`和`for...of`
 */

{
    function makeIterator(array) {
        var index = 0;
        return {
            next: function () {
                // 对于遍历器对象来说，done: false和value: undefined属性都是可以省略的
                // return index < array.length ?
                //     { value: array[index++], done: false } :
                //     { value: undefined, done: true };
                return index < array.length ?
                    { value: array[index++] } :
                    { done: true };
            }
        };
    }
    let arr = [1, 2, 3];
    let at = makeIterator(arr)
    let arrIter = arr[Symbol.iterator]();
    console.log(at.next(), arrIter.next());
    console.log(at.next(), arrIter.next());
    console.log(at.next(), arrIter.next());
    console.log(at.next(), arrIter.next());
    // for(let i of at){
    // console.log(i);
    // }
}
// 类的生成器函数
{
    class RangeIterator {
        constructor(start, stop) {
            this.value = start;
            this.stop = stop;
        }

        [Symbol.iterator]() { return this; }

        next() {
            var value = this.value;
            if (value < this.stop) {
                this.value++;
                return { done: false, value: value };
            }
            return { done: true, value: undefined };
        }
    }

    function range(start, stop) {
        return new RangeIterator(start, stop);
    }

    for (var value of range(0, 3)) {
        console.log(value);
    }
}
/**
 * for...of循环可以使用的范围包括数组、Set 和 Map 结构、
 * 某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、
 *  Generator 对象，以及字符串。
 */
{
    var arr = ['a', 'b', 'c', 'd'];

    for (let a in arr) {
        console.log(a); // 0 1 2 3
    }

    for (let a of arr) {
        console.log(a); // a b c d
    }
}