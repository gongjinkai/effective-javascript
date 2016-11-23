//'use strict';

var s = new String('hello');
console.log(s); // String {0: "h", 1: "e", 2: "l", 3: "l", 4: "o", length: 5, [[PrimitiveValue]]: "hello"}

var str = s + ' world';
console.log(str); // hello world

console.log(str[4]); // o

console.log(typeof 'hello'); // string
console.log(typeof s); // object

var s1 = new String('hello');
var s2 = new String('hello');
console.log(s1 === s2); // false
console.log(s1 == s2); // false

console.log(str.toUpperCase()); // HELLO WORLD

// 下面的语句在严格模式下,会报错: Uncaught TypeError: Cannot create property 'someProperty' on string 'hello world'
str.someProperty = 'some'; // 当然我们也不建议这样做,这里只是用做例子来说明
console.log(str.someProperty); // undefined