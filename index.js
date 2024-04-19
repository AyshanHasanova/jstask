

const submitBtn = document.getElementById("btn")
const form= document.getElementById("form")
const nameInp= document.getElementById("name")
const surnameInp= document.getElementById("surname")
const ageInp= document.getElementById("age")
const nationalityInp = document.getElementById("nationality")
const positionInp = document.getElementById("position")
const experienceInp = document.getElementById("experience")
const employees =[]
  let id = 0
class Employee{
    constructor(name,surname,age,position,nation,experience){
    this.id = id
    this.name = name
    this.surname = surname
    this.age = age
    this.nation= nation
    this.experience = experience
    id ++
}



}
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault() 
    let nameVal = nameInp.value
    let surnameVal = surnameInp.value
    let ageVal = ageInp.value
    let nationVal = nationalityInp.value
    let positionVal = positionInp.value
    let experienceVal = experienceInp.value
    createEmployee(name,surname,age,nation,position,experience){}
        resetForm()
    
})
function createEmployee( name,surname,age,position,nation,experience) {
    const newEmployee = new Employee( name,surname,age,position,nation,experience)
    employees.push(newEmployee)
    renderUI(employees)
}
function deleteEmployee(params) {
    const target = employees.find(x =>x.id==id)
    const indexOfTarget = employees.indexOf(target)
    employess.splice(indexOfTarget,1)
    renderUI(employees)
}
function searchEmployee(string) {
  let items=  employees.filter(emp=>emp.name.inculdes(string))
  renderUI(items)
    
}
function editEmployee(params) {
    
}
function renderUI(list) {
    let innerHtml = ""
    for (let i = 0; i < list.length; i++) {
        const element = array[i];
        innerHtml +=
        <tr>
            <th scope="row">$(i+1)</th>
            <td>${items [i].name}</td>
            <td>${items [i].surname}</td>
            <td>${items [i].age}</td>
            <td>${items [i].nation}</td>
            <td>${items [i].position}</td>
            <td>${items [i].experience}</td>
            <td><button class="btn btn-warning">Edit</button></td>
            <td><button class="btn btn-danger" onclick >Delete</button></td>
           
        </tr>
        
    }
}
