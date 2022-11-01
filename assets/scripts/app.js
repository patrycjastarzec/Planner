//-----------------Create list element-----------------
function createListElement(listArea, input) {
  let newElement = document.createElement("li");
  newElement.classList.add("plan-area__list__li");
  newElement.innerHTML = input;
  listArea.appendChild(newElement);
  newElement.addEventListener("click", function () {
    newElement.classList.toggle("li-task__done");
  });
}

//-----------------Add list input-----------------
function addListElement(input, list, listArea, limit) {
  let userInput = input.value;
  let storedListElement = JSON.parse(localStorage.getItem(listArea.id));
  if (storedListElement) {
    list = storedListElement;
  }
  if (userInput.length > 0 && list.length < limit) {
    list.push(userInput);
    createListElement(listArea, userInput);
    localStorage.setItem(listArea.id, JSON.stringify(list));
  }
  input.value = "";
}

addGoalButton.addEventListener(
  "click",
  addListElement.bind(this, goalInput, myGoalList, goalListArea, 5)
);
addMealButton.addEventListener(
  "click",
  addListElement.bind(this, mealInput, myMealList, mealListArea, 5)
);
addToDoButton.addEventListener(
  "click",
  addListElement.bind(this, toDoInput, myToDoList, tasksListArea, 10)
);
addAppointmentButton.addEventListener(
  "click",
  addListElement.bind(
    this,
    appointmentInput,
    myAppointmentsList,
    appointmentsListArea,
    10
  )
);

//-----------------Text input-----------------

function addTextElement(input, myElement) {
  let storedTextElement = localStorage.getItem(`${myElement.id}`);
  if (storedTextElement) {
    localStorage.removeItem(`${myElement.id}`);
  }
  let userInput = input.value;
  let newElement = document.createElement("p");
  newElement.innerHTML = userInput;
  if (myElement.children.length < 1) {
    myElement.appendChild(newElement);
  }
  input.value = "";
  localStorage.setItem(`${myElement.id}`, userInput);
}

addPriorButton.addEventListener(
  "click",
  addTextElement.bind(this, priorityInput, priorityElement)
);
addGratefulButton.addEventListener(
  "click",
  addTextElement.bind(this, gratefulInput, gratefulElement)
);
addNotesButton.addEventListener(
  "click",
  addTextElement.bind(this, notesInput, notesElement)
);

//-----------------Remove text input------------

function removeTextElement(myElement) {
  myElement.innerHTML = "";
  localStorage.removeItem(`${myElement.id}`);
}

removePriorButton.addEventListener(
  "click",
  removeTextElement.bind(this, priorityElement)
);
removeGratefulButton.addEventListener(
  "click",
  removeTextElement.bind(this, gratefulElement)
);
removeNotesButton.addEventListener(
  "click",
  removeTextElement.bind(this, notesElement)
);

//-----------------Remove list input------------

function removeListElement(listArea) {
  let storedListElement = JSON.parse(localStorage.getItem(listArea.id));
  if (storedListElement.length > 0) {
    list = storedListElement;
    localStorage.removeItem(listArea.id);
    listArea.removeChild(listArea.lastElementChild);
    storedListElement.pop();
    localStorage.setItem(listArea.id, JSON.stringify(storedListElement));
  }
}

removeGoalButton.addEventListener(
  "click",
  removeListElement.bind(this, goalListArea, myGoalList)
);
removeMealButton.addEventListener(
  "click",
  removeListElement.bind(this, mealListArea, myMealList)
);
removeToDoButton.addEventListener(
  "click",
  removeListElement.bind(this, tasksListArea, myToDoList)
);
removeAppointmentButton.addEventListener(
  "click",
  removeListElement.bind(this, appointmentsListArea, myAppointmentsList)
);

//-----------------Check localstorage for list input-----------------

function checkListInStorage(listArea) {
  let storedListElement = JSON.parse(localStorage.getItem(listArea.id));
  if (storedListElement) {
    storedListElement.forEach((listElement) => {
      createListElement(listArea, listElement);
    });
  }
}
checkListInStorage(goalListArea);
checkListInStorage(mealListArea);
checkListInStorage(tasksListArea);
checkListInStorage(appointmentsListArea);

//-----------------Check localstorage for text input-----------------

function checkTextInStorage(myElement) {
  let storedTextElement = localStorage.getItem(myElement.id);
  if (storedTextElement) {
    let newElement = document.createElement("p");
    newElement.innerHTML = storedTextElement;
    myElement.appendChild(newElement);
  }
}
checkTextInStorage(priorityElement);
checkTextInStorage(gratefulElement);
checkTextInStorage(notesElement);

//-----------------Printing-----------------

function printView() {
  formArea.style.display = "none";
  window.print();
}

printButton.addEventListener("click", printView);

//-----------------Clearing-----------------

function clearPlan() {
  goalListArea.innerHTML = "";
  mealListArea.innerHTML = "";
  tasksListArea.innerHTML = "";
  appointmentsListArea.innerHTML = "";
  priorityElement.innerHTML = "";
  gratefulElement.innerHTML = "";
  notesElement.innerHTML = "";
  localStorage.clear();
}

clearButton.addEventListener("click", clearPlan);

