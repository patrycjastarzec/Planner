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

//-----------------Create text element-----------------
function createTextElement(listArea, input) {
  let newElement = document.createElement("p");
  newElement.innerHTML = input;
  if (listArea.children.length < 1) {
    listArea.appendChild(newElement);
  }
}

//-----------------Add list input-----------------
function addListElement(input, list, listArea, limit) {
  if (!input.value) {
    return;
  }
  let userInput = input.value;
  let storedListElement = JSON.parse(localStorage.getItem(listArea.id));
  if (storedListElement) {
    list = storedListElement;
  }
  if (list.length < limit) {
    list.push(userInput);
    createListElement(listArea, userInput);
    localStorage.setItem(listArea.id, JSON.stringify(list));
  }
  input.value = "";
}

addGoalButton.addEventListener(
  "click",
  addListElement.bind(this, goalInput, myGoalList, goalListArea, goalLimit)
);
addMealButton.addEventListener(
  "click",
  addListElement.bind(this, mealInput, myMealList, mealListArea, mealLimit)
);
addToDoButton.addEventListener(
  "click",
  addListElement.bind(this, toDoInput, myToDoList, tasksListArea, todoLimit)
);
addAppointmentButton.addEventListener(
  "click",
  addListElement.bind(
    this,
    appointmentInput,
    myAppointmentsList,
    appointmentsListArea,
    appointmentsLimit
  )
);

//-----------------Text input-----------------

function addTextElement(myElement, input) {
  if (!input.value) {
    return;
  }
  let storedTextElement = localStorage.getItem(`${myElement.id}`);
  if (storedTextElement) {
    localStorage.removeItem(`${myElement.id}`);
  }
  let userInput = input.value;
  createTextElement(myElement, userInput);
  input.value = "";
  localStorage.setItem(`${myElement.id}`, userInput);
}

addPriorButton.addEventListener(
  "click",
  addTextElement.bind(this, priorityElement, priorityInput)
);
addGratefulButton.addEventListener(
  "click",
  addTextElement.bind(this, gratefulElement, gratefulInput)
);
addNotesButton.addEventListener(
  "click",
  addTextElement.bind(this, notesElement, notesInput)
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

function removeListElement(listArea, list) {
  let storedListElement = JSON.parse(localStorage.getItem(listArea.id));
  if (storedListElement) {
    list = storedListElement;
  }
  if (list.length > 0) {
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
    createTextElement(myElement, storedTextElement);
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

