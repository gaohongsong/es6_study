"use strict";

export var root = '/tmp'
export var mode = 'dev'

// 推荐
var user = "miya"
var password = "miya"

// .....
export function multi(x, y) {
    return x * y;
}

function v1() { }
function v2() { }








// 放到末尾
export {
    user,
    password,
    v1,
    v2 as v2_alias
};
