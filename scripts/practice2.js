//console.log(student.address);
//document.write(student.address);

let products=[];
// object literal
// let product1={
    // name: "Laptop",
    // description:"HP laptop 14 ''core i7",
    // price: 200
    //
//}
//constructor is a special function and is the capitalized Product beside function//
//<--local vars-->
function Product(n, d, p){
    //this.property//
    this.name=n;
    this.description=d;
    this.price=p;
}

let product1 = new Product("Speaker", "Sony wireless", 20.50);
let product2 = new Product("Laptop", "HP", 100.00);
let product3 = new Product("Cell Phone", "Samsung", "850.00");
let product4 = new Product("E-Reader", "Amazon", "59.99");


console.log(product1,product2,product3,product4);
//products.push(product1, product2, product3);

function displayNames(){
    for(let i=0;i<products.length;i++){
        console.log(products[i].description);
    }
}
//displayNames()