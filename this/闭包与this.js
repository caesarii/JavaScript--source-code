
// 闭包 与 this
var name = "window";
var obj1 = {
    name: "my object",
    getNameFunc: function() {
        return function() {
            return this.name;
        }
    }
}

var getName = obj1.getNameFunc();

// getName 是 window 的属性, 所以this 指向 window
console.log(getName());
// window
