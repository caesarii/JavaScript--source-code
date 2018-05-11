
// this 和 arguments 是函数调用时创建的特殊的局部变量, 所以函数不能访问外部函数的 this 和 arguments

// 通过闭包使函数可以访问外层函数的 this
var name2 = "window";
var obj2 = {
    name2: "my object",
    getNameFunc: function() {
        var self = this;
        return function() {
            return self.name2;
        }
    }
}
var getName = obj2.getNameFunc();

console.log(getName());