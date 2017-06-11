/**
 * [扩展运算符非常实用](http://es6.ruanyifeng.com/#docs/function#扩展运算符的应用)
 * 
 */


// 数组合并
{
    let more = [100, 200]

    console.log([1, 2].concat(more, [-1, -2]))
    console.log([1, 2, ...more, ...[-1, -2]])

}

// 结合解析赋值
{
    let list = ['a', 1, 2, 3];
    a = list[0], rest = list.slice(1);
    [a1, ...rest1] = list
    console.log(a, rest)
    console.log(a1, rest1)
}