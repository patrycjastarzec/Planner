//-----------------List input-----------------
let myGoalList = [];
let myMealList = [];
let myToDoList = [];
let myAppointmentsList = [];

function addToList(elementToAdd) {
  let myList;
  if (elementToAdd === goalInput.value){
     listArea = goalListArea;
     myList = myGoalList;
  } else if (elementToAdd === mealInput.value){
     listArea = mealListArea;
     myList = myMealList;
  } else if (elementToAdd === toDoInput.value){
     listArea = tasksListArea;
     myList = myToDoList;
  } else if (elementToAdd === appointmentInput.value){
     listArea = appointmentsListArea;
     myList = myAppointmentsList;
  }
  myList.push(elementToAdd);
  let newElement = document.createElement("li");
  newElement.innerHTML = `${elementToAdd}`
  if (myList.length < 6) {
    listArea.appendChild(newElement);
  }
}

function clearTextArea(areaToClear) {
  areaToClear.value = "";
}

function addListElement(input) {
  let userInput = input.value;
  if (userInput.length > 0) {
    addToList(userInput);
  }
  clearTextArea(input);
}

function addGoalElement(){
  addListElement(goalInput);
}

function addMealElement(){
  addListElement(mealInput);
}

function addToDoElement(){
  addListElement(toDoInput);
}

function addAppointmentElement(){
  addListElement(appointmentInput);
}

addGoalButton.addEventListener("click", addGoalElement);
addMealButton.addEventListener("click", addMealElement);
addToDoButton.addEventListener("click", addToDoElement);
addAppointmentButton.addEventListener("click", addAppointmentElement);

//-----------------Text input-----------------

function addPriorityElement(){
  addTextElement(priorityInput);
}

function addGratefulElement(){
  addTextElement(gratefulInput);
}

function addNotesElement(){
  addTextElement(notesInput);
}

function addTextElement(input) {
  let userInput = input.value;
  if (input === priorityInput) {
    myElement = priorityElement;
  } else if (input === gratefulInput){
    myElement = gratefulElement;
  } else if (input === notesInput) {
    myElement = notesElement;
  }
  myElement.innerHTML = userInput;
  clearTextArea(input);
}

addPriorButton.addEventListener("click", addPriorityElement);
addGratefulButton.addEventListener("click", addGratefulElement);
addNotesButton.addEventListener("click", addNotesElement);