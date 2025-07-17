const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const currentDate = new Date();
console.log(days[currentDate.getDay()]);
console.log(currentDate.getDate());
console.log(currentDate.getMonth()+1);
console.log(currentDate.getFullYear());
console.log(currentDate.getMinutes());
console.log(currentDate.getHours());


function calculateSum(){
    let a = 0;
    for(let i=0; i<10000000; i++){
        a = a+i;
    }
    return a;
}

console.log();

const beforeDate = new Date();
const beforTimeInMs = beforeDate.getTime();
calculateSum();

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforTimeInMs);