

# 组装对象或者数组

    //数组
    const color = ['red', 'yellow']
    const colorful = [...color, 'green', 'pink']
    console.log(colorful) //[red, yellow, green, pink]
    
    //对象
    const alp = { fist: 'a', second: 'b'}
    const alphabets = { ...alp, third: 'c' }
    console.log(alphabets) //{ "fist": "a", "second": "b", "third": "c"
    
    const first = {
            a: 1,
            b: 2,
            c: 6,
        }
        const second = {
            c: 3,
            d: 4
        }
        const total = { ...first, ...second }
        console.log(total) // { a: 1, b: 2, c: 3, d: 4 }



# 有时候我们想获取数组或者对象除了前几项或者除了某几项的其他项

    //数组
    const number = [1,2,3,4,5]
    const [first, ...rest] = number
    console.log(rest) //2,3,4,5
    //对象
    const user = {
        username: 'lux',
        gender: 'female',
        age: 19,
        address: 'peking'
    }
    const { username, ...rest } = user
    console.log(rest) //{"address": "peking", "age": 19, "gender": "female"
}
