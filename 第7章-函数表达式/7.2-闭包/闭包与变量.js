
// 闭包与变量
// 闭包保存的是外部函数的变量对象, 变量就是变量对象的属性, 所以闭包保存的不是变量的值, 而是对变量的引用
// 对于外部函数和内部的闭包而言, index 始终对=都是那一个变量, 只是值在变化

// demo1
function createFuncArray() {
    var result = new Array();
    for(var index = 0; index < 10; index++) {
        result[index] = function() {
            console.log(index);
        }
    }
    return result;
}
var funcArray = createFuncArray();
funcArray[2]()


// demo2
// 通过传递参数, 创建了每个 index 的值的副本
// 对于 外部函数而言, index 是指是同一个变量, 但对 闭包而言, num 是多个值不同的变量
// demo3 与 demo2 是等价的, 揭示了本质
function createFunctions() {
    var result = new Array();
    for(var i = 0; i < 10; i++) {
        result[i] = function(num){
           return function() {
               console.log(num)
           }
        }(i)
    }
    return result;
}

var funcArray2 = createFunctions();
funcArray2[5]()


// demo 3
function createFunctions2() {
    var result = new Array();
    for(var i = 0; i < 10; i++) {
        result[i] = function(){
            const num = i
           return function() {
               console.log(num)
           }
        }()
    }
    return result;
}

var funcArray3 = createFunctions2();
funcArray3[5]()