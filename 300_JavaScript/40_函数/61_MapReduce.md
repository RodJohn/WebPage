

# Map

概述

    map() 
    返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
    按照原始数组元素顺序依次处理元素。
    不会对空数组进行检测。
    不会改变原始数组。

参数

    map()接受的参数，分别指代当前元素、当前元素的索引、数组本身。


示例

    function pow(x) {
        return x * x;
    }
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]


# reduce

  再看reduce的用法。
  Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，
  这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算，其效果就是：

[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)


示例

    比方说对一个Array求和，就可以用reduce实现：
    
    var arr = [1, 3, 5, 7, 9];
    arr.reduce(function (x, y) {
        return x + y;
    }); // 25
    
    要把[1, 3, 5, 7, 9]变换成整数13579，reduce()也能派上用场：
    
    var arr = [1, 3, 5, 7, 9];
    arr.reduce(function (x, y) {
        return x * 10 + y;
    }); // 13579
    
    
    