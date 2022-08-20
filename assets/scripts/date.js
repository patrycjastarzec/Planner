let dateInput = document.querySelector(".plan-area__date");

let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();

today = dd + "." + mm + "." + yyyy;

function addDate() {
  dateInput.innerHTML = today;
}

window.addEventListener("load", addDate);

