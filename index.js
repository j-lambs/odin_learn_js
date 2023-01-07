
    // 1. Write a function called add7 that takes one number and returns that number + 7.

    // 2. Write a function called multiply that takes 2 numbers and returns their product.

    // 3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

    // 4. Write a function called lastLetter that takes a string and returns the very last letter of that string:
    //     lastLetter("abcd") should return "d"

// 1
function add7(num)
{
    return num + 7
}
console.log(add7(10))

function multiply(n1, n2)
{
    return n1 * n2
}
console.log(multiply(10, 5))

function capitalize(myStr)
{
    first = (myStr.charAt(0)).toUpperCase()
    return first + myStr.slice(1)
}
console.log(capitalize('abc'))

function lastLetter(s)
{
    return s.charAt(s.length-1)
}
console.log(lastLetter('abcd'))
