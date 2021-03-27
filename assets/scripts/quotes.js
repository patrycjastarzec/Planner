let quotesList = ["All our dreams can come true, if we have the courage to pursue them. – Walt Disney", "The secret of getting ahead is getting started. – Mark Twain", "It’s hard to beat a person who never gives up. – Babe Ruth", "Everything you can imagine is real. – Pablo Picasso", "Do one thing every day that scares you. – Eleanor Roosevelt", "Impossible is just an opinion. – Paulo Coelho", "Great things are done by a series of small things brought together. – Vincent Van Gogh", "In a gentle way, you can shake the world. – Mahatma Gandhi", "Work hard in silence, let your success be the noise. – Frank Ocean", "In the middle of every difficulty lies opportunity. – Albert Einstein", "Start where you are. Use what you have. Do what you can. – Arthur Ashe"];

let quote = document.getElementById("quote");

let number = Math.floor(Math.random() * 11)

function addQuote(){
  quote.innerText = quotesList[number];
}

window.addEventListener("load", addQuote);