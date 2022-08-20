const goalInput = document.getElementById("form-area__input-goal");
const mealInput = document.getElementById("form-area__input-todaymeal");
const toDoInput = document.getElementById("form-area__input-todo");
const appointmentInput = document.getElementById(
  "form-area__input-appointments"
);
const priorityInput = document.getElementById("form-area__input-priority");
const gratefulInput = document.getElementById("form-area__input-grateful");
const notesInput = document.getElementById("form-area__input-notes");

const addGoalButton = document.getElementById("form-area__add-goal-button");
const addMealButton = document.getElementById("form-area__add-meal-button");
const addToDoButton = document.getElementById("form-area__add-todo-button");
const addAppointmentButton = document.getElementById(
  "form-area__add-appointment-button"
);
const addPriorButton = document.getElementById(
  "form-area__add-priority-button"
);
const addGratefulButton = document.getElementById(
  "form-area__add-grateful-button"
);
const addNotesButton = document.getElementById("form-area__add-notes-button");

const removeGoalButton = document.getElementById(
  "form-area__remove-goal-button"
);
const removeMealButton = document.getElementById(
  "form-area__remove-meal-button"
);
const removeToDoButton = document.getElementById(
  "form-area__remove-todo-button"
);
const removeAppointmentButton = document.getElementById(
  "form-area__remove-appointment-button"
);
const removePriorButton = document.getElementById(
  "form-area__remove-priority-button"
);
const removeGratefulButton = document.getElementById(
  "form-area__remove-grateful-button"
);
const removeNotesButton = document.getElementById(
  "form-area__remove-notes-button"
);

const printButton = document.getElementById("form-area__print-button");
const clearButton = document.getElementById("form-area__clear-button");

let goalListArea = document.getElementById("goalsList");
let mealListArea = document.getElementById("mealsList");
let tasksListArea = document.getElementById("toDoList");
let appointmentsListArea = document.getElementById("appointmentsList");

let priorityElement = document.getElementById("priorityElement");
let gratefulElement = document.getElementById("gratefulElement");
let notesElement = document.getElementById("notesElement");

