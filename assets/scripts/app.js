//-----------------List input-----------------
let myGoalList = [];
let myMealList = [];
let myToDoList = [];
let myAppointmentsList = [];

function addListElement(input) {
  let userInput = input.value;
  if (userInput.length > 0) {
    appendList(userInput);
  }
  clearTextArea(input);
}

function appendList(inputList) {
  let myList;
  let listArea;
  if (inputList === goalInput.value) {
    listArea = goalListArea;
    myList = myGoalList;
  } else if (inputList === mealInput.value) {
    listArea = mealListArea;
    myList = myMealList;
  } else if (inputList === toDoInput.value) {
    listArea = tasksListArea;
    myList = myToDoList;
  } else if (inputList === appointmentInput.value) {
    listArea = appointmentsListArea;
    myList = myAppointmentsList;
  }
  myList.push(inputList);
  let newElement = document.createElement("li");
  newElement.innerHTML = `${inputList}`;
  if (myList.length < 6 && myList == myGoalList) {
    listArea.appendChild(newElement);
  } else if (myList.length < 6 && myList == myMealList){
    listArea.appendChild(newElement);
  } else if (myList.length < 11 && myList == myToDoList){
    listArea.appendChild(newElement);
  } else if (myList.length < 11 && myList == myAppointmentsList){
    listArea.appendChild(newElement);
  }
}

function clearTextArea(areaToClear) {
  areaToClear.value = "";
}

function addGoalElement() {
  addListElement(goalInput);
}

function addMealElement() {
  addListElement(mealInput);
}

function addToDoElement() {
  addListElement(toDoInput);
}

function addAppointmentElement() {
  addListElement(appointmentInput);
}

addGoalButton.addEventListener("click", addGoalElement);
addMealButton.addEventListener("click", addMealElement);
addToDoButton.addEventListener("click", addToDoElement);
addAppointmentButton.addEventListener("click", addAppointmentElement);

//-----------------Text input-----------------

function addPriorityElement() {
  addTextElement(priorityInput);
}

function addGratefulElement() {
  addTextElement(gratefulInput);
}

function addNotesElement() {
  addTextElement(notesInput);
}

function addTextElement(input) {
  let userInput = input.value;
  if (input === priorityInput) {
    myElement = priorityElement;
  } else if (input === gratefulInput) {
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

//-----------------Printing-----------------

function printView() {
	const pageWithPlan = document.getElementById("pageWithPlan");
  const formArea = document.getElementById("form-area");
  formArea.style.display = "none";
  window.print();
}

printButton.addEventListener("click", printView);
