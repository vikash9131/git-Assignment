
// console.log(Math.floor(2.3));
// console.log(Math.ceil(2.3));
// console.log(Math.max(2,5,3,4,6));
// console.log(Math.min(2,5,3,4,6));

function mathMethods(value){
    console.log("Original Value", value);


    let rounded = Math.round(value);
    console.log("After round",rounded);

    let ceilling = Math.ceil(value);
    console.log("After ceilling",ceilling);

    let flooring = Math.floor(value);
    console.log("After flooring",flooring);

    let randomValue = Math.random(value);
    console.log("After random",randomValue);

    let maxValue = Math.max(2,6,5,3,7,8,9);
    console.log("After maxVale",maxValue);

    let minValue = Math.min(2,6,5,3,7,8,9);
    console.log("After minValue",minValue);

    let powerOfTow = Math.pow(5, 2);
    console.log("After pow", powerOfTow);

    let squareRoot = Math.sqrt(36,2);
    console.log("After squareRoot", squareRoot);
}

mathMethods(4.5);
