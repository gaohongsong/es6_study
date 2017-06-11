/**
 * 书中内容讲解太多，不方便一一详细了解，故挑三拣四一下
 * 涉及：
 * ***************************************************
 * 1. http://es6.ruanyifeng.com/#docs/string#模板字符串
 * 2. http://es6.ruanyifeng.com/#docs/array#Array-from
 * 3. http://es6.ruanyifeng.com/#docs/function#函数参数的默认值
 * ***************************************************
 */

// 模板字符串
{
    let basket = {
        count: 1,
        onSale: 2
    }

    let str1 =
        'There are <b>' + basket.count + '</b> ' +
        'items in your basket, ' +
        '<em>' + basket.onSale +
        '</em> are on sale!'
    var str2 = `
  There are <b>${basket.count * 1}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`.trim();
    console.log(str1, '\n', '='.repeat(100), '\n', str2)

    function fn() {
        return "Hello World";
    }

    console.log(`foo ${fn()} bar`);
    // foo Hello World bar
}

// 转化为数组
{
    let arrayLike = {
        '0': 0,
        '1': 1,
        '2': 2,
        length: 3
    }
    // es5
    var arr1 = [].slice.call(arrayLike)
    console.log(arr1);

    // es6
    let arr2 = Array.from(arrayLike);
    console.log(arr2);

    // 实际应用
    // // 常见的类似数组的对象是DOM操作返回的NodeList集合
    // let ps = document.querySelectorAll('p');
    // Array.from(ps).forEach(function (p) {
    // console.log(p);
    // });

    // // arguments对象
    // function foo() {
    // var args = Array.from(arguments);
    // // ...
    // }    

    // 转化可迭代对象为数组
    Array.from('hello')
    // ['h', 'e', 'l', 'l', 'o']

    let namesSet = new Set(['a', 'b'])
    Array.from(namesSet) // ['a', 'b']
}
