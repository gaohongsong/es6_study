/**
 * [扩展运算符非常实用](http://es6.ruanyifeng.com/#docs/function#扩展运算符的应用)
 * 
 */

"use strict"

// 数组合并
{
    let more = [100, 200];

    console.log([1, 2].concat(more, [-1, -2]))
    console.log([1, 2, ...more, ...[-1, -2]])

}

// 结合解析赋值
{
    let list = ['a', 1, 2, 3];
    let a = list[0], rest = list.slice(1);
    let [a1, ...rest1] = list
    console.log(a, rest)
    console.log(a1, rest1)
}

// 函数返回值
{
    let f = () => [1, 21, 3]
    function foo(a, b, c) {
        let x = Math.max(a, b)
        let y = Math.max(x, c)
        return y;
    }
    console.log(foo(...f()));
}

// 实现了Iterator接口的对象
{
    // var nodeList = document.querySelectorAll('div');
    // var array = [...nodeList];   
}

// map&set&genertor
{
    let map = new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
    ]);

    console.log([...map.keys()])

    // generator
    var go = function* () {
        yield 1;
        yield 2;
        yield 3;
    }
    console.log([...go()])
}
