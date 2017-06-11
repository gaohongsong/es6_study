// export-default.js

/**
 * export default命令只能使用一次
 * export default就是输出一个叫做default的变量或方法
 * 
// modules.js
function add(x, y) {
  return x * y;
}
export {add as default};
// 等同于
// export default add;

// app.js
import { default as xxx } from 'modules';
// 等同于
// import xxx from 'modules';
 */
export default function () {
    console.log('foo');
}


// // MyClass.js
// export default class { ... }

// // main.js
// import MyClass from 'MyClass';
// let o = new MyClass();