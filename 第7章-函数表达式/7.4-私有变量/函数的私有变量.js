
// 函数的私有变量是指： 函数的参数， 局部变量， 内部函数
// 私有变量在函数外不可访问
// 函数内创建的闭包可以访问私有变量
function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}