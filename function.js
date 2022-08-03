let twotopowertwo = Math.pow(2, 4)
console.log('two raise to power two is', twotopowertwo)

function square() {
    console.log(2 ** 2)
}
for (let count = 1; count < 11; count++) {
    square()
}


function printname() {
    console.log('kenennaemelife')
}
printname()

function divide() {
    let number1 = 3
    let number2 = 4
    let product = number1 / number2
    let message = '3 divided by 4 =' + product
    console.log(message)
}
divide()
function add() {
    let number1 = 3
    let number2 = 4
    let answer = number1 + number2
    let add = '3  plus 4 =' + answer
    console.log(add)
}
add()
function minus() {
    let number1 = 3
    let number2 = 4
    let answer = number1 + number2
    let add = '3  minus 4 =' + answer
    console.log(add)
}
minus()
function times() {
    let number1 = 3
    let number2 = 4
    let answer = number1 + number2
    let times = '3  times 4 =' + answer
    console.log(times)
}
times()
function minus(a, b) {
    let product = a - b
    console.log(product)
}
minus(-2, 2)
function multiplication(a, b) {
    let product = a * b
    console.log(product)
   return  product
}
multiplication(-2, 2)
function add(a, b) {
    let product = a + b
    console.log(product)
}
add(-2, 2)
let m = multiplication(8,3)
console.log(m)


//assn
let g = minus(8, 2)
console.log(g)