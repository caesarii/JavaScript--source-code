// 通过局部作用域实现私有变量
// 所有实例共享私有变量和特权方法
const gate = {};

(function() {
    // 私有变量
    var num = 0
    var MyObj = function() {}
    MyObj.prototype.value = function() {
        return num
    }
    MyObj.prototype.add = function() {
        num ++
    }
    
    gate.MyObj = MyObj
})()

const MyObj = gate.MyObj
const obj = new MyObj()
obj.add()
console.log(obj.value())