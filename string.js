//  How to print length of the string 

function getLength(str){
    console.log("original string", str);
    console.log("current length of string = ", str.length);
}

getLength("Hello world");

let str1 = "Vikash Kumar";
console.log(str1.length);

// find the index in string

function findIndexof(str,target){
    console.log("Original string", str);
    console.log("Index",str.indexOf(target));
}

findIndexof("hello world","d");

var str2 = "vikash kumar";
let target = "k";
console.log("index = ",str2.indexOf(target));
// slice

function getSlice(str, start, end){
    console.log("Original String", str);
    console.log("after slicing",str.slice(start,end));
}

getSlice("hello world",5,9);

var str3 = "hello world";
let slice = "start,end";
console.log("after slicing = ",str3.slice(2,5));