/**
 * [函数的扩展](http://es6.ruanyifeng.com/#docs/function)
 *  + 函数参数的默认值 - good
    + rest参数 - good
    + 扩展运算符 - good
    + 严格模式
    + name 属性
    + 箭头函数
    + 绑定 this
    + 尾调用优化
    + 函数参数的尾逗号
 */


{
    // 定义了默认值的参数，应该是函数的尾参数
    function log(x, y = 'World') {
        console.log(x, y);
    }

    log('Hello') // Hello World
    log('Hello', 'China') // Hello China
    log('Hello', '') // Hello

    function point(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    let p = new point()
    let p1 = new point(2, 2)

    console.log(p, p1)
}

{
    // 对象解析实现默认参数
    function foo({ x, y = 5 }) {
        console.log(x, y);
    }

    foo({}) // undefined, 5
    foo({ x: 1 }) // 1, 5
    foo({ x: 1, y: 2 }) // 1, 2
    //foo() // TypeError: Cannot read property 'x' of undefined
}

{
    // 中间出现默认参数
    function fetch(url, { body = '', method = 'GET', headers = {} }) {
        console.log(method);
    }

    fetch('http://example.com', {})
    // "GET"

    //fetch('http://example.com')
    // 报错    
}

{
    // 写法一
    function m1({ x = 0, y = 0 } = {}) {
        return [x, y];
    }

    // 写法二
    function m2({ x, y } = { x: 0, y: 0 }) {
        return [x, y];
    }
    /**
     * 写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；
     * 写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
     */

    // 函数没有参数的情况
    m1() // [0, 0]
    m2() // [0, 0]
    // x和y都有值的情况
    m1({ x: 3, y: 8 }) // [3, 8]
    m2({ x: 3, y: 8 }) // [3, 8]
    // x和y都无值的情况
    m1({}) // [0, 0];
    m2({}) // [undefined, undefined]

}

{
    // 函数length的失真
    console.log(foo.length) // 1
    console.log(log.length) // 1
    console.log(m2.length) // 0

    // 作用域
    var x = 1;

    function f(x, y = x) {
        console.log(y);
    }

    f(2) // 2    

    // TDZ
    var x = 1;

    function foo(x = x) {
        // ...
    }

    // foo() // ReferenceError: x is not defined    
}

{
    // 应用 - 指定某个参数不能省略
    function lostWarning() {
        // throw new Error('name required');
    }

    function foobar(name = lostWarning()) {
        console.log(name)
    }

    foobar()
    foobar(1231231)
}

{
    // rest参数
    function sortNumbers() {
        return Array.prototype.slice.call(arguments).sort();
    }

    // rest写法
    const sortNumbers1 = (...numbers) => numbers.sort();

    let nbs = [1, 3, 4, 5, 32, 24, 15]
    console.log(sortNumbers(nbs), sortNumbers1(1, 3, 4, 5, 32, 24, 15, 24, 53))

    // rest改写extend
    function push(array, ...newArray) {
        console.log(newArray)
        newArray.forEach(function (item) {
            array.push(item);
        });
    }
    let arr = [1, 2, 3];
    console.log(arr)
    push(arr, 4, 5, 6)
    console.log(arr)
}

{
    // unpack array param   扩展运算符
    console.log(...[1, 2, 3])
    function add(x, y) {
        return x + y
    }
    let nbs = [1, 2]

    // nbs -> 1, 2
    console.log(add.apply(null, nbs)); // 不再需要apply
    console.log(add(...nbs));

    // 将一个数组添加到另一个数组的尾部
    var arr1 = [0, 1, 2];
    var arr2 = [3, 4, 5];
    var arr3 = [7, 8, 9];
    Array.prototype.push.apply(arr1, arr2);
    console.log(arr1)

    arr1.push(...arr3)
    console.log(arr1)
}