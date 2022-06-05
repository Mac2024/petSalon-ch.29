function displayCards(){
    let petDiv = ("#pets");
    petDiv.html="";
    //travel the array
    let tmp="";
    for(let i = 0; i < salon.pets.length;i++){
        let pet = salon.pets[i];
         tmp=`
            <div class="pet">
                <h5>Name: ${pet.name}</h5>
                <p>Age:  ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Service: ${pet.service}</p>
                <p>Owner: ${pet.ownersName}</p>
                <p>Contact Phone: ${pet.contactPhone}</p>
            </div>
        `;
        petDiv.append(tmp); 
    }
}


function displayTable(){
    let table= $("#petsTable");
    for(let i=0;i<salon.pets.length;i++){
        let pet = salon.pets[i];
        tr=`
            <tr>
                <td>${pet.name} </td>
                <td>${pet.age} </td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.ownersName}</td>
                <td>${pet.contactPhone}</td>
            </tr>
        `;
        table.append(tr);
    }
    
        
}
//tr= <td> name </td>
//<td> age </td>
