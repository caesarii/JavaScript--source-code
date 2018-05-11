

// 特权方法： 访问私有变量的公有方法

// 1. 通过 构造函数 创建私有变量和特权方法
// 每个实例有自己的私有变量, 但每个实例重复创建特权方法
// demo1
function myObj() {
    var num = 0
    this.add = function() {
        num ++
    }
    this.value = function() {
        return num
    }
    
}

const obj = new myObj()
obj.add()
console.log(obj.value())

// demo2
// 局部变量作为私有变量
function Person() {
    var name = "qinghe";
    this.getName = function() {
        return name;
    }
    this.setName = function(newName) {
        name = newName
    }
}

var qinghe = new Person();
console.log(qinghe.getName());
qinghe.setName("caesar");
console.log(qinghe.getName());

// demo3
// 参数作为私有变量
function Person2(name) {
    this.getName = function() {
        return name;
    }
    this.setName = function(newName) {
        name = newName
    }
}

var qinghe = new Person2("qinghe");
console.log(qinghe.getName());
qinghe.setName("caesar");
console.log(qinghe.getName());

// demo4
// 内部函数作为私有变量
function Person3() {
    var counter = 0;
    function innerPlus() {
        counter ++;
    }
    this.outerPlus = function() {
        return innerPlus
    }
    this.get = function() {
        return counter;
    }
}
var person = new Person3();
person.outerPlus()();
console.log(person.get());




