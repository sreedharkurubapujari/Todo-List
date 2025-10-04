const  body = document.body
   
//Main task list division
let taskListDiv =document.createElement("div")
taskListDiv.classList.add("taskList")
body.appendChild(taskListDiv)

 let heading = document.createElement("h1")
 heading.textContent = ("Todo List")
 taskListDiv.appendChild(heading)

 let inputDiv = document.createElement("div")
 inputDiv.classList.add("inputGroup")
 taskListDiv.appendChild(inputDiv)

 let inputField = document.createElement("input")
  inputField.type ="text"
  inputField.name ="task" 
  inputField.id ="newTask"
  inputDiv.appendChild(inputField)

  let button=document.createElement("button")
  button.id ="addTask"
  button.textContent ="Add"
  inputDiv.appendChild(button)


let tasksDiv = document.createElement("div")
tasksDiv.classList.add("tasks")
taskListDiv.appendChild(tasksDiv)
                                      // function calling
function createAndAppendTask(todoitem){       

let taskDiv = document.createElement("div")
taskDiv.classList.add("task")
tasksDiv.appendChild(taskDiv)

let span =document.createElement("span")
span.textContent = todoitem
span.id =  new Date().getTime().toString()           // to write a unique ID's
taskDiv.appendChild(span)

let iconsDiv = document.createElement("div")
taskDiv.appendChild(iconsDiv)

let icon = document.createElement("i")
icon.classList.add("bx", "bx-edit")
icon.style.color ="blueviolet"
iconsDiv.appendChild(icon)

let deleteicon = document.createElement("i")
deleteicon.classList.add("bx", "bx-trash")
deleteicon.style.color ="#bc1919"
iconsDiv.appendChild(deleteicon)

inputField.value= ""           // it is a empty input



}

 function checkInput(){
  let value = inputField.value
  if(value){
          createAndAppendTask(value)
  }
  else{
         alert("Please Enter a Value")
  }
 }


button.addEventListener('click',checkInput)
