//push

function pushExample(arr, element){
    console.log("Original Array ", arr);
    arr.push(element);
    console.log("after push = ", arr);
}

pushExample([4,5,2], 8);

function popExample(arr,element){
    console.log("Original Array",arr);
    arr.pop(element);
    console.log("After pop", arr);
}
popExample([4,5,2]);


function shiftExample(arr,element){
    console.log("Original Array",arr);
    arr.shift(element);
    console.log("After shift", arr);
}
shiftExample([4,5,2]);

function unshiftExample(arr,element){
    console.log("Original Array",arr);
    arr.unshift(element);
    console.log("After unshift", arr);
}
unshiftExample([4,5,2],8);

function concatExample(arr1,arr2){
    console.log("Original Array",arr1,arr2);
    let arr3 = arr1.concat(arr2);
    console.log("After concat", arr3);
}
concatExample([4,5,6,7,8],[12,14,45,23]);

const array1 = [4,5,6,7,8];
const array2 = [12,14,45,23];
let arr3 = array1.concat(array2);
console.log(arr3);