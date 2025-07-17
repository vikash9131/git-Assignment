const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const currentDate = new Date();
console.log(days[currentDate.getDay()]);
console.log(currentDate.getDate());
console.log(currentDate.getMonth()+1);
console.log(currentDate.getFullYear());
console.log(currentDate.getMinutes());
console.log(currentDate.getHours());