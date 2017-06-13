{
    // js通过函数来模拟类
    // 类 -> 构造函数
    function Dog(name) {
        this.name = name;
        this.species = 'dog';
    }
    var da = new Dog('a');
    var db = new Dog('b');
    da.species = 'cat'
    console.log(db.species); // dog
}
{
    // 构造函数
    function Dog(name) {
        this.name = name;
    }

    // 原型对象prototype
    // 为构造函数设置一个prototype属性，用来存放所有实例对象共享的属性和方法
    Dog.prototype = {
        species: 'dog'
    };

    // 实例化对象    
    var da = new Dog('a');
    var db = new Dog('b');
    console.log(db.species);

    // 修改公共属性
    Dog.prototype.species = 'cat';
    console.log(db.species);

    // 所有的实例对象共享同一个prototype对象，那么从外界看起来，
    // prototype对象就好像是实例对象的原型，而实例对象则好像"继承"了prototype对象一样
    // 以上就是javascript的继承机制
}
// __proto__ vs prototype
{
    var one = { x: 1 };
    var two = new Object();

    // 对象__proto__属性的值就是它所对应的原型对象
    console.log(one.__proto__ === Object.prototype) // true
    console.log(two.__proto__ === Object.prototype) // true
    console.log(one.toString === one.__proto__.toString) // true

    // one和two的原型就是Object.prototype
    // 不像每个对象都有__proto__属性来标识自己所继承的原型，只有函数才有prototype属性
    // [more](https://github.com/creeperyang/blog/issues/9)
}