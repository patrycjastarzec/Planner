//Printing button
//const printButton = document.getElementById("printPlan");
//printButton.addEventListener("click", printView);

//Function that handles clearing the form
function clearTextArea(areaToClear) {
  areaToClear.value = "";
}

//Today's goals list
let addButton = document.getElementById("addGoal");
addButton.addEventListener("click", addGoalElement);

let myGoalList = [];

let listArea = document.getElementById("goalsList");

function addGoalElement() {
  let todaygoal = document.getElementById("todaygoal");
  let myInput = todaygoal.value;
  if (myInput.length > 0) {
    addGoalToList(myInput);
  } 
  clearTextArea(todaygoal);
}

function addGoalToList(thingToAdd) {
  myGoalList.push(thingToAdd);
  let newElement = document.createElement("li");
  newElement.innerHTML = myGoalList[myGoalList.length - 1];
  if (myGoalList.length < 4) {
    listArea.appendChild(newElement);
  } else {
    myGoalList = myGoalList.slice(0, 5);
  }
}

//Priority
const addPriorButton = document.getElementById("addPriorityButton");
addPriorButton.addEventListener("click", addPriority);

function addPriority() {
    let priorityElement = document.getElementById("priority");
    let myPriorValue = priorityElement.value;
    let priorityInput = document.getElementById("priorityInput");
    priorityInput.innerHTML = myPriorValue;
    clearTextArea(priorityElement);
}

//Meals list
const addMealButton = document.getElementById("addMealButton");
addMealButton.addEventListener("click", addMealElement);

let myMealList = [];

let mealListArea = document.getElementById("mealsList");

function addMealElement() {
  let todaymeal = document.getElementById("todaymeal");
  let myMealInput = todaymeal.value;
  if (myMealInput.length > 0) {
    addMealToList(myMealInput);
  }
  clearTextArea(todaymeal);
}

function addMealToList(mealToAdd) {
  myMealList.push(mealToAdd);
  let newMealElement = document.createElement("li");
  newMealElement.innerHTML = myMealList[myMealList.length - 1];
  if (myMealList.length < 6) {
    mealListArea.appendChild(newMealElement);
  } else {
    myMealList = myMealList.slice(0, 6);
  }
}

//Today I'm grateful for
const addGratefulButton = document.getElementById("addGratefulButton");
addGratefulButton.addEventListener("click", addGrateful);

function addGrateful() {
    let gratefulElement = document.getElementById("grateful");
    let myGratefulValue = gratefulElement.value;
    let gratefulInput = document.getElementById("gratefulInput");
    gratefulInput.innerHTML = myGratefulValue;
    clearTextArea(gratefulElement);
}

//To do list
let addToDoButton = document.getElementById("addToDoButton");
addToDoButton.addEventListener("click", addToDoElement);

let myToDoList = [];

let tasksListArea = document.getElementById("toDoList");

function addToDoElement() {
  let toDoElement = document.getElementById("todo");
  let toDoInput = toDoElement.value;
  if (toDoInput.length > 0) {
    addTaskToList(toDoInput);
  }
  clearTextArea(toDoElement);
}

function addTaskToList(taskToAdd) {
  myToDoList.push(taskToAdd);
  let newToDoElement = document.createElement("li");
  newToDoElement.innerHTML = myToDoList[myToDoList.length - 1];
  if (myToDoList.length < 11) {
    tasksListArea.appendChild(newToDoElement);
  } else {
    myToDoList = myToDoList.slice(0, 12);
  }
}

//Appointments list
let addAppointmentButton = document.getElementById("addAppointmentButton");
addAppointmentButton.addEventListener("click", addAppointmentElement);

let myAppointmentsList = [];

let appointmentsListArea = document.getElementById("appointmentsList");

function addAppointmentElement() {
  let appointmentElement = document.getElementById("appointments");
  let appointmentInput = appointmentElement.value; 
  if (appointmentInput.length > 0) {
    addAppointmentToList(appointmentInput);
  }
  clearTextArea(appointmentElement);
}

function addAppointmentToList(appointmentToAdd) {
  myAppointmentsList.push(appointmentToAdd);
  let newAppointmentElement = document.createElement("li");
  newAppointmentElement.innerHTML = myAppointmentsList[myAppointmentsList.length - 1];
  if (myAppointmentsList.length < 11) {
    appointmentsListArea.appendChild(newAppointmentElement);
  } else {
    myAppointmentsList = myAppointmentsList.slice(0, 12);
  }
}

//Notes
const addNotesButton = document.getElementById("addNotesButton");
addNotesButton.addEventListener("click", addNotes);

function addNotes() {
    let notesElement = document.getElementById("notes");
    let myNotesValue = notesElement.value;
    let notesInput = document.getElementById("notesInput");
    notesInput.innerHTML = myNotesValue;
    clearTextArea(gratefulElement);
}



