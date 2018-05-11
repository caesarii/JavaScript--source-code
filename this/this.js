//  this 的值取决于调用函数时的语法形式, 如果调用表达式 () 左侧是 变量 或 属性表达式, this 执行该变量或属性所属的对象
//  如果 () 左侧不是变量或属性表达式, this 总是指向 window


// 改变 this 的值
var flag = "window";
var obj3 = {
    flag: "my object",
    getName: function() {
        console.log(this.flag);
    }
}
// 属性表达式, 所以指向对象
obj3.getName();

// 加括号之后仍然是属性表达式, 所以指向对象
(obj3.getName)();

// 括号中的表达式的值是匿名函数本身, 所以指向 window
(obj3.getName = obj3.getName)();