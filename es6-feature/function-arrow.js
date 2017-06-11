/**
 * 箭头函数
 */

{
    function f(v) {
        return v;
    }
    var ff = v => v

    var f2 = () => 5;
    var f3 = function () { return 5; }

    var fum = (v1, v2) => v1 + v2

    // 返回对象加括号
    var getObject = id => ({ name: 'test', age: 10 })
    console.log(getObject(1));

    // 配合析构
    const fool = ({ first, second }) => `first = ${first}, second = ${second}`
    console.log(fool({ first: 1, second: 2 }))

    //简化
    
}