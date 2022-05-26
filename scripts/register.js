//object literal
let salon={
    name: "The Fashion Pet",
    address:{
        street:"Palomar",
        zip:"223456",
        city:"San Diego",
        number:"265-K",
    },
    hours:{
        open:"9:00 a.m.",
        close:"5:00 p.m."
    },
    phone:"555-555-5555",
    pets:[
        {
            name:"Scooby",
            age:"50",
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"888-888-8888",
        },
        {
            name:"ToeToe",
            age:"35",
            gender:"Female",
            breed:"Spaniel",
            service:"Grooming",
            owner:"Dorothy",
            phone:"888-888-8888", 
        },
        {
            name:"Cujo",
            age:"45",
            gender:"Male",
            breed:"Rott",
            service:"Grooming",
            owner:"David",
            phone:"888-888-8888",
        }
    ]
}
console.log(salon.pets[0]);

function displaySalonInfo(){
    let tmp=`
    <p>Welcome to the ${salon.name} located in ${salon.address.city.street}</p>
    <p>Finest Salon You've Ever Seen</p>
    `;
    document.getElementById("info").innerHTML=tmp;
}
displaySalonInfo();
function displayNames(){
    for(let i=0;i<salon.pets.length;i++){
        console.log(salon.pets[1]);
    }
}

displayNames();