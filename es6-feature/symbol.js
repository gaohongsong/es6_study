/**
 * 新增数据类型
 * undefined/null/string/number/object/bool
 * [new]: symbol
 */

let s = Symbol()

console.log(typeof s)

{
    s1 = Symbol('s1');
    s2 = Symbol('s2');
    s22 = Symbol('s2');
    console.log(s1, s2, s2 === s22)
}

{
    s1 = Symbol()
    let obj = {};
    obj[s1] = 'hello'

    // 等同于
    let obj1 = {
        [s1]: 'hello'
    }

    // same to
    let obj2 = {}
    // TypeError: Property description must be an object:
    Object.defineProperty(obj2, s1, { value: 'hello' })
    console.log(obj[s1], obj1[s1], obj2[s1]);
}
// 用途多多
{
    let log = (level, content) => {
        console.log(level, content);
    }

    log.levels = {
        DEBUG: Symbol('debug'),
        INFO: Symbol('info'),
        WARN: Symbol('warn')
    };
    log(log.levels.DEBUG, 'debug message');
    log(log.levels.INFO, 'info message');

    // const
    const COLOR_RED = Symbol();
    const COLOR_GREEN = Symbol();

    function getComplement(color) {
        switch (color) {
            case COLOR_RED:
                return COLOR_GREEN;
            case COLOR_GREEN:
                return COLOR_RED;
            default:
                throw new Error('Undefined color');
        }
    }
    console.log(getComplement(COLOR_RED));
}

{
    // enum
    const SHAPE_TYPE = {
        triangle: Symbol(),
        square: Symbol(),
    }
    function getArea(shape, options) {
        switch (shape) {
            case SHAPE_TYPE.triangle:
                console.log('triangle');
                area = 0.5 * options.width * options.height;
                break;
            case SHAPE_TYPE.square:
                area = options.width * options.height;
                break;
        }
        return area;
    }
    console.log(getArea(SHAPE_TYPE.triangle, { 'width': 5, 'height': 3 }))
}

// symbol.for vs symbol
{
    // Symbol.for()会先检查给定的key是否已经存在，如果不存在才会新建一个值。
    console.log(Symbol.for("bar") === Symbol.for("bar"));
    // true

    Symbol("bar") === Symbol("bar")
    // false

    // Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。
    var s1 = Symbol.for("foo");
    Symbol.keyFor(s1) // "foo"

    var s2 = Symbol("foo");
    Symbol.keyFor(s2) // undefined
}

{
    var sm = require('./symbol-mod.js')
    console.log(sm.foo)
}

{
    // 11个内置的symbol，作为某个类中的独特方法，为类增加一些功能，比如Symbol.iterator

    // 让类支持迭代的生成器方法
    class Foo {
        // 构造方法
        constructor(...args) {
            this.args = args;
        }
        // 以*开头
        *[Symbol.iterator]() {
            for (let arg of this.args) {
                yield arg;
            }
        }
    }
    for (f of new Foo(1, 2, 3, 4)) {
        console.log(f);
    }
}