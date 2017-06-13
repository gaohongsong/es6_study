/**
 * [set-map](http://es6.ruanyifeng.com/#docs/set-map)
 * 
 */

{
    const s = new Set();
    [2, 3, 5, 4, 3, 4, 2, 3, 4, 5].forEach(x => s.add(x));
    for (let i of s) {
        console.log(i);
    }
    // // 2 3 5 4

    const s1 = new Set([2, 34, 5, 5, 6, 6]);
    console.log(s1, s1.size);

    // 去除数组的重复成员
    let arr1 = [2, 34, 5, 5, 6, 6];
    const arr2 = [...new Set(arr1)];
    console.log(arr2)
}

