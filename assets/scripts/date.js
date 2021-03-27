let dateInput = document.getElementById("dateInput");

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = dd + '.' + mm + '.' + yyyy;
//console.log(today)

function addDate(){
  dateInput.innerHTML = today;
}

window.addEventListener("load", addDate);
