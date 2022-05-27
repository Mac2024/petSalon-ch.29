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
    pets:[]
}



function displaySalonInfo(){
    let tmp=`
    <p>Welcome to the ${salon.name} located in ${salon.address.city.street}</p>
    <p>Finest Salon You've Ever Seen</p>
    `;
    document.getElementById("info").innerHTML=tmp;
    console.log("displaying");
}



//create the pet constructor
// name, age, gender, breed, service, owner, phone
function Pet(name,age,gender,breed,service,owner,phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownersName = owner;//*
    this.contactPhone = phone;//*
}

//create default pets
let katy = new Pet("Katy", "12", "Female", "Rottweiler", "wash", "David", "555-555-5555");

let lola = new Pet("Lola", "10", "Female", "Daschund", "wash and trim", "Tonya", "535-555-5555");

let rocco = new Pet("Rocco", "8", "Male", "Doberman", "trim", "Jessie", "555-515-5555");

let bella = new Pet("Bella", "5", "Female", "Terrier", "wash", "John", "555-555-6255");

let jojo = new Pet("JoJo", "16", "Male", "Poodle", "trim", "Mike", "555-555-5560");



//register pets
function register(){
    console.log("Registering");
    //get the info from the inputs ***getElementById().value
let petName=document.getElementById("txtName").value;
let petAge=document.getElementById("textAge").value;
let petGender=document.getElementById("txtGender");
let petBreed=document.getElementById("txtBreed");
let petService=document.getElementById("selService");
let petOwner=document.getElementById("txtOwner");
let contactPhone=document.getElementById("txtPhone")
   
    //create the object using the constructor
let newPet= new Pet(petName, petAge, petGender, petBreed, petService, petOwner, contactPhone);
    
    //push the object in on the array
   salon.pets.push(newPet);
    
   //display it on the console
      console.log(newPet);
      console.log(salon.pets);  
}

function init(){
    //hook events triggered events
    displaySalonInfo();
    salon.pets.push(katy,bella);
}

window.onload=init;