function objectMethods(obj){
    console.log("Original object", obj);

    let keys = Object.keys(obj);
    console.log("After Object.keys():",keys);

    
    let values = Object.values(obj);
    console.log("Original object",values);

    
    let entrise = Object.entries(obj);
    console.log("After object.entrise",entrise);



    let hasProp1 = obj.hasOwnProperty("property");
    console.log("After hasProp",hasProp1);

    let newObj = Object.assign(obj);
    console.log("After Object.assign():",newObj);


}

let obj = {
    name:"vikash"
}

console.log(obj.hasOwnProperty("age"));

const simpleObject = {
    key1:"value1",
    key2:"value2",
    key3:"value3"

};


objectMethods(simpleObject);



function objectMethods(obj1){
    console.log("Original object", obj1);
    let hasProp1 = obj1.hasOwnProperty("property");
    console.log("After hasProp",hasProp1);

}

let obj1 = {
    name:"vikash"
}

console.log(obj1.hasOwnProperty("name"));

objectMethods(obj1);
