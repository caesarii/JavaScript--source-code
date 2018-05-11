
// 前面的模式视为自定义类型创建私有变量, 模块模式视为单例创建私有变量

var singleton = (function() {
    var num = 0
    return {
        add: function() {
            num ++
        },
        value: function() {
            return num
        }
    }
})()

singleton.add()
console.log(singleton.value())
