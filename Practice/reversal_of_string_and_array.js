const arr = ["hey", "my", "name", "is", "shrinidhi"];
let strrev = [];

arr.forEach((str) => {
    console.log(str);
    const reversed = str.split("").reverse().join("");
    strrev.push(reversed);
});
console.log(strrev);
let arrrev = [];
for(let i = strrev.length-1; i >= 0; i--){
    arrrev.push(strrev[i]);
};
console.log(arrrev);
