//-----------------List input-----------------
let myGoalList = [];
let myMealList = [];
let myToDoList = [];
let myAppointmentsList = [];

function addListElement(input, myList, listArea, limit) {
  let userInput = input.value;
  if (userInput.length > 0 && myList.length < limit) {
      myList.push(userInput);
      let newElement = document.createElement("li");
      newElement.innerHTML = userInput;
      listArea.appendChild(newElement);
      console.log(myList.length); // to check the length of list in browser developer tools
  }
  clearTextArea(input);
}

function clearTextArea(areaToClear) {
  areaToClear.value = "";
}

function addGoalElement() {
  addListElement(goalInput, myGoalList, goalListArea, 5);
}

function addMealElement() {
  addListElement(mealInput, myMealList, mealListArea, 5);
}

function addToDoElement() {
  addListElement(toDoInput, myToDoList, tasksListArea, 10);
}

function addAppointmentElement() {
  addListElement(appointmentInput, myAppointmentsList, appointmentsListArea, 10);
}

addGoalButton.addEventListener("click", addGoalElement);
addMealButton.addEventListener("click", addMealElement);
addToDoButton.addEventListener("click", addToDoElement);
addAppointmentButton.addEventListener("click", addAppointmentElement);

//-----------------Text input-----------------

function addTextElement(input, myElement) {
  let userInput = input.value;
  let newElement = document.createElement("p");
  newElement.innerHTML = userInput;
  if(myElement.children.length < 1){
    myElement.appendChild(newElement);
  }
  clearTextArea(input);
}

function addPriorityElement() {
  addTextElement(priorityInput, priorityElement);
}

function addGratefulElement() {
  addTextElement(gratefulInput, gratefulElement);
}

function addNotesElement() {
  addTextElement(notesInput, notesElement);
}

addPriorButton.addEventListener("click", addPriorityElement);
addGratefulButton.addEventListener("click", addGratefulElement);
addNotesButton.addEventListener("click", addNotesElement);

//-----------------Remove text input------------

function removeTextElement(myElement){
  myElement.innerHTML = "";
}

function removePriorElement(){
  removeTextElement(priorityElement);
}

function removeGratefulElement(){
  removeTextElement(gratefulElement);
}

function removeNotesElement(){
  removeTextElement(notesElement);
}

removePriorButton.addEventListener('click', removePriorElement);
removeGratefulButton.addEventListener('click', removeGratefulElement);
removeNotesButton.addEventListener('click', removeNotesElement);

//-----------------Remove list input------------

function removeListElement(listArea, myList){
  listArea.removeChild(listArea.lastElementChild);
  myList.pop();
  console.log(myList.length);
  console.log(listArea.length);
}

function removeGoalListElement(){
  removeListElement(goalListArea, myGoalList);
}

function removeMealListElement(){
  removeListElement(mealListArea, myMealList);
}

function removeToDolListElement(){
  removeListElement(tasksListArea, myToDoList);
}

function removeAppointmentsListElement(){
  removeListElement(appointmentsListArea, myAppointmentsList);
}

removeGoalButton.addEventListener('click', removeGoalListElement);
removeMealButton.addEventListener('click', removeMealListElement);
removeToDoButton.addEventListener('click', removeToDolListElement);
removeAppointmentButton.addEventListener('click', removeAppointmentsListElement);


//-----------------Printing-----------------

function printView() {
	const pageWithPlan = document.getElementById("pageWithPlan");
  const formArea = document.getElementById("form-area");
  formArea.style.display = "none";
  window.print();
}

printButton.addEventListener("click", printView);


//-----------------Clearing-----------------

function clearPlan(){
  goalListArea.innerHTML = "";
  mealListArea.innerHTML = "";
  tasksListArea.innerHTML = "";
  appointmentsListArea.innerHTML = "";
  priorityElement.innerHTML = "";
  gratefulElement.innerHTML = "";
  notesElement.innerHTML = "";
}

clearButton.addEventListener("click", clearPlan);