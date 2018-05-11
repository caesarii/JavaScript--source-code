
// 内部函数调用时, createComprision 已经返回, 但是 compare 函数仍然可以访问 createComprision 函数中的变量
function  createComprison(prop) {
    return function(obj1, obj2) {
        var val1= obj1[prop];
        var val2 = obj2[prop];

        if(val1 < val2) {
            return -1;
        } else if(val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    }
}

var compare = createComprison("name");
var result = compare({"name": "qinghe"}, {"name": "caesar"});
console.log(result);