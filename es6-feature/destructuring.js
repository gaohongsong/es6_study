/**
 * http://es6.ruanyifeng.com/#docs/destructuring
 * 用途
 * 数组析构赋值
 * 对象析构赋值
 * 字符串析构赋值
 * 数值和布尔值析构赋值
 * 函数参数析构赋值
 * 圆括号问题
 */


// 交换
{
    let [x, y] = [0, 1];
    [x, y] = [y, x];
    console.log(x, y);
    // 1, 0
}

// 返回多个值
{
    function foobar() {
        return [1, 2, 3];
    }
    let [a, b, c] = foobar();
    console.log(a, b, c)

    function foobar2() {
        return {
            'first': 0,
            'second': 2
        }
    }
    let { first, second } = foobar2();
    console.log(first, second);

}
// 函数参数定义
{
    // 参数是一组有次序的值
    function ff([x, y, z]) { console.log(x, y, z) }
    ff([1, 2, 3]);

    // 参数是一组无次序的值
    function ff1({ x, y, z }) { console.log(x, y, z) }
    ff1({ z: 3, y: 2, x: 1 });

}
// 提取JSON数据
{
    let jsonData = {
        id: 42,
        status: "ok",
        data: ["1", 2, 3]
    }
    let { id, status, data: number } = jsonData;
    console.log(id, status, number)
}

// 函数默认值
{
    let ajax = function (url, {
  async = true,
        beforeSend = function () { },
        cache = true,
        complete = function () { },
        crossDomain = false,
        global = true,
        // ... more config
    }) {
        // ... do stuff
    };
}

// 变量map结构
{
    var map = new Map();
    map.set('a', 1)
    map.set('b', 2)
    for (let [k, v] of map) {
        console.log(`k=${k}, v=${v}`)
    }

    // 获取键名
    for (let [k] of map) {
        console.log(`k=${k}`)
    }

    // 获取键值
    for (let [, v] of map) {
        console.log(`v=${v}`)
    }
}

// 选择性加载模块
{
    const { SourceMapConsumer, SourceNode } = require("source-map");
}

// =======================================================================================================================

//let a = 1, b=2, c=3
let [a, b, c] = [1, 2, 3]
console.log(a, b, c)


let [, m, n] = [1, 2, 3];
m // 2
n // 3
console.log(m, n)

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [, , third] = ["foo", "bar", "baz"];
third // "baz"


let [h, ...t] = [1, 2, 3, 4]
console.log(h, t)
h // 1
t // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []


// es6新增数据结构set
let [x1, y1, z1] = new Set(['a', 'b', 'c']);
x1 // "a"

// 默认值
let [q, p = 1] = [0];
console.log(q, p)
// q 0
// p 1

let [x2, y2 = 'b'] = ['a', undefined]; // x2='a', y2='b'

// 惰性求值
function f() {
    console.log('aaa');
}

// let [x3 = f()] = [1];
let [x3 = f()] = [];


// 对象的解析
let { name, age } = { name: 1, age: 2 }
console.log(name, age)


let obj = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};

let { p: [x4, { y4 }] } = obj;
x4 // "Hello"
y4 // "World"


var { x5 = 3 } = {};
x // 3

// 对象析构方便获取对象的属性和方法
let { log, sin, cos } = Math;
console.log(sin(0.5))

let arr = [1, 2, 3];
let { 0: first, [arr.length - 1]: last } = arr;
first // 1
last // 3

{
    // 字符串析构赋值
    const [a, b, c, d, e] = 'hello';
    a // "h"
    b // "e"
    c // "l"
    d // "l"
    e // "o"
    console.log(a, b, c, d, e)

    let { length: len } = 'hello';
    len // 5    
}

{
    let { toString: s } = 123;
    let { toString: s1 } = true;
    console.log(s, s1)
}


// 函数参数析构赋值
{
    function add([x, y]) {
        return x + y;
    }

    console.log(add([1, 2])); // 3
}

{
    console.log([[1, 2], [3, 4]].map(([a, b]) => a + b)); // [ 3, 7 ]
}

{
    function foo1({ x = 0, y = 1 } = {}) {
        return [x, y]
    }

    a = foo1({ x: 2, y: 3 })
    b = foo1({ x: 2 })
    c = foo1({ y: 3 })
    d = foo1()
    console.log(a, b, c, d)
    // [ 2, 3 ] [ 2, 1 ] [ 0, 3 ] [ 0, 1 ]
}