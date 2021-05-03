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

addGoalButton.addEventListener("click", addListElement.bind(this, goalInput, myGoalList, goalListArea, 5));
addMealButton.addEventListener("click", addListElement.bind(this, mealInput, myMealList, mealListArea, 5));
addToDoButton.addEventListener("click", addListElement.bind(this, toDoInput, myToDoList, tasksListArea, 10));
addAppointmentButton.addEventListener("click", addListElement.bind(this, appointmentInput, myAppointmentsList, appointmentsListArea, 10));

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

addPriorButton.addEventListener("click", addTextElement.bind(this, priorityInput, priorityElement));
addGratefulButton.addEventListener("click", addTextElement.bind(this, gratefulInput, gratefulElement));
addNotesButton.addEventListener("click", addTextElement.bind(this, notesInput, notesElement));

//-----------------Remove text input------------

function removeTextElement(myElement){
  myElement.innerHTML = "";
}

removePriorButton.addEventListener('click', removeTextElement.bind(this, priorityElement));
removeGratefulButton.addEventListener('click', removeTextElement.bind(this, gratefulElement));
removeNotesButton.addEventListener('click', removeTextElement.bind(this, notesElement));

//-----------------Remove list input------------

function removeListElement(listArea, myList){
  if(myList.length > 0){
    listArea.removeChild(listArea.lastElementChild);
    myList.pop();
    console.log(myList.length); // to check the length of list in browser developer tools
  }
}

removeGoalButton.addEventListener('click', removeListElement.bind(this, goalListArea, myGoalList));
removeMealButton.addEventListener('click', removeListElement.bind(this, mealListArea, myMealList));
removeToDoButton.addEventListener('click', removeListElement.bind(this, tasksListArea, myToDoList));
removeAppointmentButton.addEventListener('click', removeListElement.bind(this, appointmentsListArea, myAppointmentsList));


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