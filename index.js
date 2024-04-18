


const form= document.getElementById("form")
const nameInp= document.getElementById("name")
const surnameInp= document.getElementById("surname")
const ageInp= document.getElementById("age")
const nationalityInp = document.getElementById("nationality")
const positionInp = document.getElementById("position")
const experienceInp = document.getElementById("experience")
const users = []
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let newUser ={
        name :nameInp.value,
        surname: surnameInp .value,
        age: ageInp.value,
        nationality: nameInp.value;
        position : positionInp.value;
        experience: experienceInp.value;
    }
    
    users.push (newUser)
    renderUI(users);
})