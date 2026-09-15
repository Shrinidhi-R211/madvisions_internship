// function randomnumbers () {
//     return (Math.floor(Math.random() * 10)); // Multiply with the number which you need as an end i.e. if we want a random number between 0 and the given number but exclude the given number, then we are going to multiply that number to the Math.floor(Math.random()) function.
// }
// console.log(randomnumbers());

function numbersBetweenRange (minVal , maxVal) {
    return (Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)) ;
    //(maxVal - minVal + 1 ) ==> this helps in specifying the output should always be greater than the min value and it also specifies, that the output != the min value. 
    //(maxVal - minVal + 1) + minval ==> This helps in getting the range value start from the minvalue and not below that.
}
console.log(numbersBetweenRange(4, 10));