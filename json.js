const users = {
    name :"vikash",
    age : 24,
    gender : "male"
}



let user = JSON.stringify(users);
console.log(user);

const users1 = '{"name":"vikash","age":24,"gender":"male"}'
let user1 = JSON.parse(users1);
console.log(user1["name"]);
console.log(user1["age"]);
console.log(user1["gender"]);