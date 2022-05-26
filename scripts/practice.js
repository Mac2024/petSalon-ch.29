//variables
let student ={
    //attributes or properties
    name:"Daniel",
    age:99,
    isActive:true,
    //function//
    sayHi: function(){
        return "hello";
    },
    hobbies:["Football", "Listen music", "Play Zelda"],
    address:{
        street:"Palomar",
        zip:"22145",
        city:"San Diego",
        country:"USA"
    }

}
//console.log(student.address.city, student.address.country, student.address.street);
//attributes
document.write(student.address.city, student.address.country);

let products =[];
let product1={
    name:"Laptop",
    description:"HP laptop 14' core i7",
    price: 200
}

let product2={
    name:"Tablet",
    description:"Apple Ipad gen 3",
    price: 150
}

let product3={
    name: "Fire Tablet",
    description: "Amazon Fire Tablet",
    price: 129
}
console.log(products);
console.log(product1, product2, product3);
//products.push(product1,product2, product3)
products=[product1, product2, product3];

console.log(products[2].name);
