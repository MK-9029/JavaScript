let arr = [];
arr.push("{");
// console.log(arr, arr.length);
// console.log(typeof arr);
arr.push("}");
// console.log(arr);
arr.pop();
// console.log(arr);
arr.unshift("[");
console.log(arr);
// arr.forEach(function(item) {
//     console.log(item);
// })
arr.forEach(item => {
    console.log(item);
})