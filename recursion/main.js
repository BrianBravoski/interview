//reversing a string using recursion


const str = "hello";


function solution(str) {
    //base case
    if (str.length === 0) return "";


    //recursion
    return str[str.length - 1] + solution(str.slice(0, str.length - 1))

}

console.log(solution(str));