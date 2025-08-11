// let outputscreen = document.getElementById("display");

// function displayval(num) {
//   display.value += num;
// }

// function calculation() {
//   try {
//     outputscreen.value = eval(outputscreen.value);
//   }
//   catch(err)
//   {
//     alert("invalid")
//   }
// }
// function cleardisplay(){
//   outputscreen.value="";
// }

// function del(){
//   outputscreen.value = outputscreen.value.slice(0, -1);
// }
let outputscreen = document.getElementById("display");
let quoteBox = document.getElementById("quote"); // Link to the quote div in HTML

const quotes = [
  "A lesson without pain is meaningless. — Fullmetal Alchemist",
  "Power comes in response to a need, not a desire. — Dragon Ball Z",
  "You should enjoy the little detours. — Hunter x Hunter",
  "No matter how deep the night, it always turns to day. — One Piece",
  "Fear is not evil. It tells you what your weakness is. — Fairy Tail",
];

function displayval(num) {
  display.value += num;
}

function calculation() {
  try {
    outputscreen.value = eval(outputscreen.value);
    showRandomQuote(); // Show a new quote after successful calculation
  } catch (err) {
    alert("Invalid expression!");
  }
}

function cleardisplay() {
  outputscreen.value = "";
}

function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteBox.innerText = quotes[randomIndex];
}
