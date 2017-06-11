// http://es6.ruanyifeng.com/#docs/let

// let 局部作用域
{
    let a = 10;
    var b = 1;
}

console.log(b)
console.log(a)
/**
 *                                                                                                                                                                                                                                                   
ReferenceError: a is not defined                                                                                                
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i); // undefined

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    }
}
console.log(a[6]()) // 10

var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    }
}
console.log(a[6]()) // 6


// 变量提升
console.log(foo)
var foo = 2

try {
    console.log(bar) // ReferenceError: bar is not defined
    let bar = 2
} catch (error) {
    console.log(error);
}

// 暂时性死区
if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError

    // let tmp; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}


// 不允许重复声明
function foo1()
{
    let a = 1;
    // let a = 2; // SyntaxError: Identifier 'a' has already been declared
}

// 块级作用域
// function f() { console.log('I am outside!'); }

// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// }());
// Uncaught TypeError: f is not a function

// 声明只读常量
const PI = 3.1415926
console.log(PI)
// PI = 3 // TypeError: Assignment to constant variable.

// const data // SyntaxError: Missing initializer in const declaration


const bar1 = {};

// 为 bar1 添加一个属性，可以成功
bar1.prop = 123;
console.log(bar1.prop) // 123

// 将 bar1 指向另一个对象，就会报错
// bar1 = {}; // TypeError: "bar1" is read-only


// 对象冻结
const freezeObj = Object.freeze({})
freezeObj.prop = 1234
console.log(freezeObj)
