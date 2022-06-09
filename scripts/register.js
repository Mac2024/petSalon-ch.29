//object literal
let salon={
    name: "The Fresh Pet Lounge",
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



//function displaySalonInfo(){
    //let tmp=`
    //<p>Welcome to the ${salon.name} located in ${salon.address.city.street}</p>
    ///<p>Finest Salon You've Ever Seen</p>
    //`;
    //document.getElementById("info").innerHTML=tmp;
    //console.log("displaying");
//}



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
let pet1 = new Pet("Katy", "12", "Female", "Rottweiler", "wash", "David", "555-555-5555");

let pet2 = new Pet("Lola", "10", "Female", "Daschund", "wash and trim", "Tonya", "535-555-5555");

let pet3 = new Pet("Rocco", "8", "Male", "Doberman", "trim", "Jessie", "555-515-5555");

let pet4 = new Pet("Bella", "5", "Female", "Terrier", "wash", "John", "555-555-6255");

let pet5 = new Pet("JoJo", "16", "Male", "Poodle", "trim", "Mike", "555-555-5560");

function isValid(aPet){
    let valid=true;
    if(aPet.name=="" || aPet.service=="" || aPet.contactPhone==""){
        //if we arrive here the pet is not valid
        valid=false;
    }
    else{
        ("Add a name for a pet")
    }
    return valid;
}

//register pets
function register(){
    console.log("Registering");
    //get the info from the inputs ***getElementById().value
    let petName=document.getElementById("txtName").value;
    let petAge=document.getElementById("txtAge").value;
    let petGender=document.getElementById("txtGender").value;
    let petBreed=document.getElementById("txtBreed").value;
    let petService=document.getElementById("selService".value);
    let petOwner=document.getElementById("txtOwner").value;
    let contactPhone=document.getElementById("txtPhone").value;
   
    //create the object using the constructor
    let newPet= new Pet(petName, petAge, petGender, petBreed, petService, petOwner, contactPhone);
    if(isValid(newPet)==true){

 
    //push the object in on the array
   salon.pets.push(newPet);
    
   //display it on the console
      console.log(newPet);
      console.log(salon.pets);  
      //clear the form
      clear();
}}

function clear(){
    let inputs=document.getElementsByTagName('input');
    for (let i=0;i<inputs.length;i++){
       inputs[i].value="";
    }
    document.getElementById("selService").value="default";
   $("input").val("");

   // console.log(inputs);
}

function init(){
    //hook events triggered events
    //displaySalonInfo();
    salon.pets.push(pet1,pet2,pet3,pet4,pet5);
    displayTable();
}

window.onload=init;