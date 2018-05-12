

# Genertor

    Generator返回的也是Iterator对象
    next和yield参数传递


示例

    function* G() {
        const a = yield 100
        console.log('a', a)  // a aaa
        const b = yield 200
        console.log('b', b)  // b bbb
        const c = yield 300
        console.log('c', c)  // c ccc
    }
    const g = G()
    g.next()    // value: 100, done: false
    g.next('aaa') // value: 200, done: false
    g.next('bbb') // value: 300, done: false
    g.next('ccc') // value: undefined, done: true

    

# Thunk


# Co



# 参考

http://www.cnblogs.com/wangfupeng1988/p/6532713.html