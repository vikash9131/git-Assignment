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
// slice and substring

function getSlice(str, start, end){
    console.log("Original String", str);
    console.log("after slicing",str.slice(start,end));
    console.log("after slicing1",str.substr(start,end));
}

getSlice("hello world",5,9);

var str3 = "hello world";
let slice = "start,end";
console.log("after slicing = ",str3.slice(2,5));


function cutIt(str,startIndex,EndIndex){
    let newStr = " ";
    for(let i=0; i<str.length; i++){
        if(i>=startIndex && i<EndIndex){
            newStr = newStr + str[i];
        }
    }
    return newStr;
}

const value1 = "vikash kumar";
let ans2 = value1.slice(2,5);
console.log(ans2);
console.log(cutIt(value1,2,5));

// replace

const strA = "vikash kumar";
console.log(strA.replace("kumar","gvaala"));

function getReolace(strA,target,replacement){
    console.log("Original string",strA);
    console.log("After replacing = ",strA.replace(target,replacement));
}

getReolace("vikash kumar","kumar","yadav");

// split

function splitString(str,separator){
    console.log("Original atring",str);
    console.log("after spliting = ",str.split(separator));
}

splitString("vikash kumar"," ");

const value2 = "hi vikash kumar yadav";
const word = value2.split(" ");
console.log(word);

// trim

function trimString(str){
    console.log("Original string",str);
    console.log("after triming = ", str.trim());
}

trimString("     hello world     ");

// toUpporCase

function upporString(str){
    console.log("Original String",str);
    console.log("After UpporCase", str.toUpperCase());
}

upporString("vikash kumar");

const strB = "vikash kumar";
const value3 = strB.toUpperCase();
console.log(value3);

// toLowerCase

function tolower(str){
    console.log("Original string", str);
    console.log("After change = ", str.toLowerCase());
}

tolower("VIKASH KUMAR");

const str = "VIKASH KUMAR";
const value = str.toLowerCase();
console.log(value);