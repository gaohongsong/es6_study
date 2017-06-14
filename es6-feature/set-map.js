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

{
    const set = new Set([2, 34, 5, 5, 6, 6]);
    console.log(
        set.keys(),
        set.values(),
        set.entries(),
        set.has(34),
    )
    // loop all items
    for (let k of set) {
        console.log(k);
    }

    for (let v of set.entries()) {
        console.log(v);
    }
    // 2
    // 34
    // 5
    // 6
    // [ 2, 2 ]
    // [ 34, 34 ]
    // [ 5, 5 ]
    // [ 6, 6 ]

    set.forEach((k, v) => console.log(k, v))

    let set_list = [...set];
    let set_list1 = Array.from(set);
    // [ 2, 34, 5, 6 ] [ 2, 34, 5, 6 ]
    console.log(set_list, set_list1);

    let a = new Set([1, 2, 3]);
    let b = new Set([4, 3, 2]);

    // 并集
    let union = new Set([...a, ...b]);
    // Set {1, 2, 3, 4}

    // 交集 in and in b
    let intersect = new Set([...a].filter(x => b.has(x)));
    // set {2, 3}

    // 差集, in a and not in b
    let difference = new Set([...a].filter(x => !b.has(x)));
    // Set {1}
    console.log(union, intersect, difference);
}

// WeakSet 
{
    // skip for future
}

// Map
{
    // 将一个 DOM 节点作为对象data的键，但是由于对象只接受字符串作为键名，
    // 所以element被自动转为字符串[object HTMLDivElement]
    // const data = {};
    // const element = document.getElementById('myDiv');

    // data[element] = 'metadata';
    // data['[object HTMLDivElement]'] // "metadata"

    // use object as key of map is ok        
    var dom1 = { 'name': 'obj1' }
    var dom2 = { 'name': 'obj2' }
    let map = new Map([
        [dom1, { print: function () { console.log('dom1 print') } }],
    ])
    console.log(map.size, map.keys(), map.values())
    map.get(dom1).print();

    map.set(dom2, { print: function () { console.log('dom2 print') } })
    console.log(map.size, map.keys(), map.values())

    map.delete(dom1)
    console.log(map.size, map.keys(), map.values())

    map.clear()
    console.log(map.size, map.keys(), map.values())

    // 后者覆盖前者
    const map1 = new Map();
    map1.set(1, 'aaa').set(1, 'bbb');
    console.log(map1.get(1)); // "bbb"

    // Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键
    let o1 = { 'name': 0 }
    let o2 = { 'name': 0 }
    let o3 = { 'name': 0 }
    let map2 = new Map()
    map2.set(o1, 'o1').set(o2, 'o2');
    // false 'o1' 'o2'
    console.log(map2.has(o3), map2.get(o1), map2.get(o2));
}


{
    // Map的遍历顺序就是插入顺序 => OrderMap
    const map = new Map([
        ['F', 'no'],
        ['T', 'yes'],
    ]);

    for (let key of map.keys()) {
        console.log(key);
    }
    // "F"
    // "T"

    for (let value of map.values()) {
        console.log(value);
    }
    // "no"
    // "yes"

    for (let item of map.entries()) {
        console.log(item[0], item[1]);
    }
    // "F" "no"
    // "T" "yes"

    // 或者
    for (let [key, value] of map.entries()) {
        console.log(key, value);
    }
    // "F" "no"
    // "T" "yes"

    // 等同于使用map.entries()
    for (let [key, value] of map) {
        console.log(key, value);
    }
    // "F" "no"
    // "T" "yes"

    map.forEach((value, key, map) => {
        console.log("Key: %s, Value: %s", key, value);
    });


    // 传递this给forEach
    const reporter = {
        report: function (key, value) {
            console.log("reporter => Key: %s, Value: %s", key, value);
        }
    };

    map.forEach(function (value, key, map) {
        this.report(key, value);
    }, reporter);
}

{

    const map = new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
    ]);

    console.log([...map.keys()])
    // [1, 2, 3]

    console.log([...map.values()])
    // ['one', 'two', 'three']

    console.log([...map.entries()])
    // [[1,'one'], [2, 'two'], [3, 'three']]

    console.log([...map])
    // [[1,'one'], [2, 'two'], [3, 'three']]    

    console.log(Array.from(map));
    // [[1,'one'], [2, 'two'], [3, 'three']]    
}
// map => object or json
{
    function strMapToObj(strMap) {
        let obj = Object.create(null);
        for (let [k, v] of strMap) {
            obj[k] = v;
        }
        return obj;
    }
    function strMapToJson(strMap) {
        return JSON.stringify(strMapToObj(strMap));
    }
    function mapToArrayJson(map) {
        return JSON.stringify([...map]);
    }

    let myMap = new Map().set('yes', true).set('no', false);
    let myMap1 = new Map().set(true, 7).set({ foo: 3 }, ['abc']);

    // '{"yes":true,"no":false}'
    console.log(strMapToJson(myMap))

    // '[[true,7],[{"foo":3},["abc"]]]'    
    console.log(mapToArrayJson(myMap1));
}
// WeakMap skip to future
{

}