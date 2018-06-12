let sha1 = require('sha1')
let f = x => sha1('hash ' + x.length)
let str = ""
for(let i = 0; i < 10; i++) {
    str = str + 'a';
    console.log('string ' + str + ' ' + f(str))
}
let passwd = 'pineapple'
console.log('super secret hash ' + f(passwd))